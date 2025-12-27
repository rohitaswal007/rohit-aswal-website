import React from 'react';

export interface PerformanceMetric {
  label: string;
  value: string;
  color: string;
  icon?: string;
}

export interface ChartPoint {
  name: string;
  spend: number;
  sales: number;
  [key: string]: any;
}

export interface CaseStudyData {
  id: string;
  title: string;
  headline: string;
  category: string;
  platform: 'Amazon' | 'Flipkart' | 'Quick Commerce' | 'D2C';
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  performanceSnapshots?: PerformanceMetric[];
  challenge: string;
  strategy: string;
  execution: string[];
  result: string;
  chartData: ChartPoint[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}