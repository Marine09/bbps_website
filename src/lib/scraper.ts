import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

// Base URL for the school website
const BASE_URL = 'https://bbpsnavimum.balbharati.org';

// Utility to resolve relative URLs
const resolveUrl = (relativeUrl: string) => {
  if (relativeUrl.startsWith('http')) return relativeUrl;
  return `${BASE_URL}${relativeUrl.startsWith('/') ? '' : '/'}${relativeUrl}`;
};

// Track visited URLs to avoid duplicates
const visitedUrls = new Set<string>();

// Store all extracted data
const extractedData: Record<string, any> = {
  pages: [],
  navigation: {},
  documents: [],
  images: [],
  metadata: {},
};

// Extract metadata from a page
const extractMetadata = ($: cheerio.CheerioAPI, url: string) => {
  const metadata = {
    url,
    title: $('title').text().trim(),
    description: $('meta[name="description"]').attr('content') || '',
    keywords: $('meta[name="keywords"]').attr('content') || '',
    h1: $('h1').map((_, el) => $(el).text().trim()).get(),
    h2: $('h2').map((_, el) => $(el).text().trim()).get(),
    h3: $('h3').map((_, el) => $(el).text().trim()).get(),
  };
  
  return metadata;
};

// Extract content from a page
const extractContent = ($: cheerio.CheerioAPI, url: string) => {
  const content = {
    url,
    title: $('title').text().trim(),
    mainContent: $('#main-content, .main-content, main').text().trim() || $('body').text().trim(),
    paragraphs: $('p').map((_, el) => $(el).text().trim()).get(),
    images: $('img').map((_, el) => {
      return {
        src: resolveUrl($(el).attr('src') || ''),
        alt: $(el).attr('alt') || '',
        title: $(el).attr('title') || '',
      };
    }).get(),
    links: $('a').map((_, el) => {
      const href = $(el).attr('href') || '';
      return {
        text: $(el).text().trim(),
        url: resolveUrl(href),
        isExternal: href.startsWith('http') && !href.startsWith(BASE_URL),
      };
    }).get(),
  };
  
  return content;
};

// Extract navigation structure
const extractNavigation = ($: cheerio.CheerioAPI) => {
  const navigation: Record<string, any> = {};
  
  // Main navigation
  navigation.main = $('nav, .nav, .navigation, header ul').first().find('> ul > li').map((_, el) => {
    const $el = $(el);
    const $link = $el.find('> a');
    
    return {
      text: $link.text().trim(),
      url: resolveUrl($link.attr('href') || ''),
      children: $el.find('> ul > li').map((_, child) => {
        const $child = $(child);
        const $childLink = $child.find('> a');
        
        return {
          text: $childLink.text().trim(),
          url: resolveUrl($childLink.attr('href') || ''),
        };
      }).get(),
    };
  }).get();
  
  // Footer navigation
  navigation.footer = $('footer, .footer').find('a').map((_, el) => {
    const $el = $(el);
    return {
      text: $el.text().trim(),
      url: resolveUrl($el.attr('href') || ''),
    };
  }).get();
  
  return navigation;
};

// Extract documents (PDFs, DOCs, etc.)
const extractDocuments = ($: cheerio.CheerioAPI) => {
  return $('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[href$=".xls"], a[href$=".xlsx"], a[href$=".ppt"], a[href$=".pptx"]')
    .map((_, el) => {
      const $el = $(el);
      return {
        text: $el.text().trim(),
        url: resolveUrl($el.attr('href') || ''),
        type: path.extname($el.attr('href') || '').slice(1),
      };
    }).get();
};

// Process a single page
const processPage = async (url: string, depth = 0) => {
  // Skip if already visited or exceeds depth
  if (visitedUrls.has(url) || depth > 3) return;
  
  try {
    console.log(`Processing: ${url}`);
    visitedUrls.add(url);
    
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Extract data
    const metadata = extractMetadata($, url);
    const content = extractContent($, url);
    const documents = extractDocuments($);
    
    // Only extract navigation from the homepage
    if (url === BASE_URL || url === `${BASE_URL}/`) {
      extractedData.navigation = extractNavigation($);
    }
    
    // Store extracted data
    extractedData.pages.push({
      ...content,
      metadata,
    });
    
    extractedData.documents.push(...documents);
    
    // Find new links to process
    $('a').each((_, el) => {
      const href = $(el).attr('href');
      if (href) {
        const resolvedUrl = resolveUrl(href);
        if (resolvedUrl.startsWith(BASE_URL) && !visitedUrls.has(resolvedUrl)) {
          // Process internal links recursively
          processPage(resolvedUrl, depth + 1);
        }
      }
    });
  } catch (error) {
    console.error(`Error processing ${url}:`, error);
  }
};

// Main scraping function
export const scrapeWebsite = async () => {
  try {
    // Start from the homepage
    await processPage(BASE_URL);
    
    // Save extracted data to JSON files
    const outputDir = path.join(process.cwd(), 'data');
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(outputDir, 'pages.json'),
      JSON.stringify(extractedData.pages, null, 2)
    );
    
    fs.writeFileSync(
      path.join(outputDir, 'navigation.json'),
      JSON.stringify(extractedData.navigation, null, 2)
    );
    
    fs.writeFileSync(
      path.join(outputDir, 'documents.json'),
      JSON.stringify(extractedData.documents, null, 2)
    );
    
    console.log('Website scraping completed successfully!');
    return extractedData;
  } catch (error) {
    console.error('Error scraping website:', error);
    throw error;
  }
};

// Helper function to run the scraper
export const runScraper = async () => {
  console.log('Starting website scraper...');
  await scrapeWebsite();
}; 