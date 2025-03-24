import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate dummy data
const generateDummyData = () => {
  // Create sample navigation data
  const navigation = {
    main: [
      {
        text: 'About BBPS',
        url: 'https://bbpsnavimum.balbharati.org/about',
        children: [
          { text: 'About us', url: 'https://bbpsnavimum.balbharati.org/about-us' },
          { text: 'History of school', url: 'https://bbpsnavimum.balbharati.org/history' },
          { text: 'Mission', url: 'https://bbpsnavimum.balbharati.org/mission' },
          { text: 'Vision', url: 'https://bbpsnavimum.balbharati.org/vision' },
          { text: 'Management', url: 'https://bbpsnavimum.balbharati.org/management' },
        ]
      },
      {
        text: 'Academics',
        url: 'https://bbpsnavimum.balbharati.org/academics',
        children: [
          { text: 'Curriculum', url: 'https://bbpsnavimum.balbharati.org/curriculum' },
          { text: 'Departments', url: 'https://bbpsnavimum.balbharati.org/departments' },
          { text: 'Achievements', url: 'https://bbpsnavimum.balbharati.org/achievements' },
        ]
      },
      {
        text: 'Admissions',
        url: 'https://bbpsnavimum.balbharati.org/admissions',
        children: [
          { text: 'Procedure', url: 'https://bbpsnavimum.balbharati.org/admission-procedure' },
          { text: 'Fee Structure', url: 'https://bbpsnavimum.balbharati.org/fee-structure' },
        ]
      },
      {
        text: 'Contact',
        url: 'https://bbpsnavimum.balbharati.org/contact',
        children: []
      }
    ],
    footer: [
      { text: 'Privacy Policy', url: 'https://bbpsnavimum.balbharati.org/privacy-policy' },
      { text: 'Terms of Use', url: 'https://bbpsnavimum.balbharati.org/terms' },
      { text: 'Site Map', url: 'https://bbpsnavimum.balbharati.org/sitemap' },
    ]
  };

  // Create sample pages data
  const pages = [
    {
      url: 'https://bbpsnavimum.balbharati.org/',
      title: 'Bal Bharati Public School - Navi Mumbai',
      mainContent: 'Welcome to Bal Bharati Public School Navi Mumbai. We are committed to providing quality education to our students.',
      paragraphs: [
        'Welcome to Bal Bharati Public School Navi Mumbai. We are committed to providing quality education to our students.',
        'Our school aims to nurture young minds and help them develop into responsible citizens.',
        'We provide a holistic education that focuses on academic excellence as well as character development.'
      ],
      images: [
        { src: 'https://bbpsnavimum.balbharati.org/images/school-building.jpg', alt: 'School Building', title: 'BBPS Navi Mumbai Campus' },
        { src: 'https://bbpsnavimum.balbharati.org/images/students.jpg', alt: 'Students', title: 'Our Students' },
      ],
      links: [
        { text: 'About Us', url: 'https://bbpsnavimum.balbharati.org/about-us', isExternal: false },
        { text: 'Contact', url: 'https://bbpsnavimum.balbharati.org/contact', isExternal: false },
      ],
      metadata: {
        url: 'https://bbpsnavimum.balbharati.org/',
        title: 'Bal Bharati Public School - Navi Mumbai',
        description: 'Official website of Bal Bharati Public School, Navi Mumbai',
        keywords: 'BBPS, school, education, Navi Mumbai, CBSE',
        h1: ['Welcome to Bal Bharati Public School'],
        h2: ['About Us', 'Our Mission', 'Our Vision'],
        h3: ['Announcements', 'Latest News', 'Events']
      }
    },
    {
      url: 'https://bbpsnavimum.balbharati.org/about-us',
      title: 'About Us - Bal Bharati Public School Navi Mumbai',
      mainContent: 'Learn about Bal Bharati Public School Navi Mumbai, our history, mission, and vision.',
      paragraphs: [
        'Bal Bharati Public School, Navi Mumbai was established in the year 1998.',
        'The school is affiliated to the Central Board of Secondary Education (CBSE) and offers education from Nursery to Class XII.',
        'Our aim is to provide holistic education that nurtures the intellectual, physical, emotional, and spiritual development of our students.'
      ],
      images: [
        { src: 'https://bbpsnavimum.balbharati.org/images/school-front.jpg', alt: 'School Front View', title: 'BBPS Navi Mumbai Front View' },
      ],
      links: [
        { text: 'Home', url: 'https://bbpsnavimum.balbharati.org/', isExternal: false },
        { text: 'Contact', url: 'https://bbpsnavimum.balbharati.org/contact', isExternal: false },
      ],
      metadata: {
        url: 'https://bbpsnavimum.balbharati.org/about-us',
        title: 'About Us - Bal Bharati Public School Navi Mumbai',
        description: 'Learn about Bal Bharati Public School Navi Mumbai, our history, mission, and vision.',
        keywords: 'about us, BBPS, history, mission, vision',
        h1: ['About Bal Bharati Public School Navi Mumbai'],
        h2: ['Our History', 'Our Mission', 'Our Vision'],
        h3: ['School Management', 'Faculty', 'Infrastructure']
      }
    }
  ];

  // Create sample documents data
  const documents = [
    { text: 'School Brochure', url: 'https://bbpsnavimum.balbharati.org/documents/brochure.pdf', type: 'pdf' },
    { text: 'Admission Form', url: 'https://bbpsnavimum.balbharati.org/documents/admission-form.pdf', type: 'pdf' },
    { text: 'Fee Structure', url: 'https://bbpsnavimum.balbharati.org/documents/fee-structure.pdf', type: 'pdf' },
    { text: 'Annual Report', url: 'https://bbpsnavimum.balbharati.org/documents/annual-report-2023.pdf', type: 'pdf' },
    { text: 'Academic Calendar', url: 'https://bbpsnavimum.balbharati.org/documents/academic-calendar-2024-25.pdf', type: 'pdf' },
  ];

  // Create the data directory if it doesn't exist
  const dataDir = path.join(path.dirname(__dirname), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Write the data to JSON files
  fs.writeFileSync(
    path.join(dataDir, 'navigation.json'),
    JSON.stringify(navigation, null, 2)
  );

  fs.writeFileSync(
    path.join(dataDir, 'pages.json'),
    JSON.stringify(pages, null, 2)
  );

  fs.writeFileSync(
    path.join(dataDir, 'documents.json'),
    JSON.stringify(documents, null, 2)
  );

  console.log('Dummy data generated successfully!');
};

// Run the function
generateDummyData(); 