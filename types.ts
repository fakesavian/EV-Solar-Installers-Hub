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

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
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