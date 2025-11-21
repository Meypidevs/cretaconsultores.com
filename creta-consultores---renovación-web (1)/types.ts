
export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string; // HTML allowed or rich text
  iconName: string;
  features: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML content for full replication
  date: string;
  category: string;
  image: string;
  author: string;
  // SEO Fields
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string;
}

export interface NavLink {
  path: string;
  label: string;
}

export interface LegalPage {
  id: string;
  title: string;
  content: string;
}

export interface LocalLandingPage {
  slug: string; // e.g., 'asesoria-sant-cugat'
  city: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  introText: string;
  localContent: string; // Specific text about the location/industry there
  mapEmbedUrl?: string;
}
