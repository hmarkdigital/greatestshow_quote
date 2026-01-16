export interface PriceItem {
  net: number;
  vat: number;
  gross: number;
}

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  price: PriceItem;
  customPriceRange?: {
    net: string;
    gross: string;
  };
  note?: string;
  highlight?: boolean;
}

export interface PackageOption {
  id: string;
  name: string;
  logo?: string;
  color?: string;
  level: 'Basic' | 'Premium';
  monthlyPrice: PriceItem;
  yearlyPrice: PriceItem; // calculated for 12 months for comparison
  features: string[];
  minContract: string;
}

export interface ClientInfo {
  name: string;
  contact: string;
  date: string;
  valid: string;
}