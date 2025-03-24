import { runScraper } from '../src/lib/scraper.js';

// Run the scraper
(async () => {
  try {
    await runScraper();
  } catch (error) {
    console.error('Scraping failed:', error);
    process.exit(1);
  }
})(); 