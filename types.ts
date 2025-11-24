export interface Installer {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  tags: string[];
  logo: string;
  featured?: boolean;
}

export interface DirectoryInstaller {
  id: string;
  company_name: string;
  category: 'EV' | 'Solar' | 'Hybrid';
  description: string;
  slug?: string;
  hq: {
    city: string;
    state: string;
    country: string;
    lat?: number;
    lng?: number;
  };
  founded_year?: number;
  employees_estimate?: string;
  service_area: string[];
  service_models: string[];
  services_offered: string[];
  charger_brands?: string[];
  solar_equipment?: {
    modules?: string[];
    inverters?: string[];
    storage?: string[];
  };
  certifications?: string[];
  utility_and_partner_affiliations?: string[];
  financing?: {
    options?: string[];
    notes?: string | null;
  };
  pricing?: {
    ev_level2_range_usd?: string | null;
    dcfc_range_usd?: string | null;
    solar_ppw_usd?: string | null;
    battery_adder_per_kwh_usd?: string | null;
    site_survey?: string | null;
  };
  warranty?: {
    labor_years?: number | null;
    equipment_years?: number | null;
    performance_guarantee?: string | null;
    notes?: string | null;
  };
  permit_handling?: boolean;
  rebates_and_programs?: string[];
  languages?: string[];
  contacts?: {
    phone?: string | null;
    email?: string | null;
    website?: string | null;
  };
  support_hours?: string | null;
  ratings?: {
    average?: number | null;
    review_count?: number | null;
    source?: string | null;
  };
  featured_projects?: Array<{
    name: string;
    location: string;
    scope_kw?: number | null;
    chargers_installed?: number | null;
    year?: number | null;
    equipment?: string[];
    segment?: string;
  }>;
  sustainability_practices?: string[];
  tags?: string[];
  photos?: {
    logo?: string | null;
    gallery?: string[];
  };
  data_quality_notes?: string | null;
  suitableFor?: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface DirectoryInstallerNormalized extends DirectoryInstaller {
  slug: string;
  suitableFor: string[];
  tags: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string; // e.g., "Homeowner"
  content: string;
  avatar: string;
  location: string;
}

export enum ChatSender {
  USER = 'user',
  AI = 'ai'
}

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
  timestamp: number;
}
