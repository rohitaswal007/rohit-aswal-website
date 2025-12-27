import { ShoppingCart, Zap, BarChart3, Anchor } from 'lucide-react';
import { CaseStudyData, ServiceItem } from './types';

// Helper to generate daily data for Nov 2025 (Blinkit) - Adjusted for USD scale
const generateBlinkitData = () => {
  const data = [];
  const startSales = 3500; // Adjusted from 280,000 INR (~$3.5k)
  const startUnits = 1200;
  
  for (let i = 1; i <= 30; i++) {
    const volatility = 0.15;
    const trend = 1 + (i / 60); 
    const cycle = Math.sin(i * 0.8) * 500;
    
    const salesValue = (startSales * trend + cycle) * (1 + (Math.random() - 0.5) * volatility);
    const unitsValue = (startUnits * trend + (cycle / 3)) * (1 + (Math.random() - 0.5) * volatility);

    data.push({
      name: `${i}${i === 1 ? 'st' : i === 2 ? 'nd' : i === 3 ? 'rd' : 'th'} Nov`,
      sales: Math.round(salesValue),
      units: Math.round(unitsValue),
      spend: Math.round(salesValue * 0.25)
    });
  }
  return data;
};

// Data for Amazon Pull Up Bar case study - Adjusted for USD scale
const generateAmazonAdsData = () => [
  { name: '1/1/2025', spend: 4200, sales: 21000 },
  { name: '2/1/2025', spend: 3000, sales: 14000 },
  { name: '3/1/2025', spend: 6000, sales: 32000 },
  { name: '4/1/2025', spend: 4200, sales: 30000 },
  { name: '5/1/2025', spend: 7800, sales: 62000 },
  { name: '6/1/2025', spend: 6000, sales: 51000 },
  { name: '7/1/2025', spend: 10800, sales: 106000 },
  { name: '8/1/2025', spend: 7000, sales: 97000 },
  { name: '9/1/2025', spend: 6600, sales: 86000 },
  { name: '10/1/2025', spend: 5400, sales: 60000 },
  { name: '11/1/2025', spend: 480, sales: 3400 },
];

export const CASE_STUDIES: CaseStudyData[] = [
  {
    id: 'cs-1',
    title: 'Feminine Hygiene Growth',
    headline: 'Slashed TACoS by 20% While Growing Revenue 32% for a Feminine Hygiene Brand',
    category: 'Feminine Hygiene',
    platform: 'Amazon',
    stats: [
      { label: 'Total ACoS Reduction', value: '-20%', description: 'Reduction in overall ad spend relative to total revenue' },
      { label: 'Organic Search Ranking', value: '#4', description: 'Organic rank achieved from position 48' },
      { label: 'Net Revenue Growth', value: '32%', description: 'Monthly Revenue Multiplier' },
    ],
    performanceSnapshots: [
      { label: 'Clicks', value: '1,122,813', color: '#6b7280' },
      { label: 'Spend', value: '$228,170', color: '#14b8a6' },
      { label: 'ROAS', value: '2.66', color: '#6b7280' },
      { label: 'Sales', value: '$606,420', color: '#6366f1' },
    ],
    challenge: 'A fast-growing feminine hygiene and hair removal brand faced a seasonal revenue drop during Q3. Rising ad costs (TACoS climbing to 23%) were eating into margins, while new product launches weren\'t gaining traction. Organic visibility was stuck at rank 48 for critical keywords, and profitability was becoming unsustainable during the off-season.',
    strategy: 'Shifted to a profitability-first approach by restructuring campaigns around margin protection and organic growth:\n→ Cut spend on high-TOS portfolios draining budgets with minimal returns\n→ Rebuilt campaigns targeting high-intent, low-competition keywords to dominate search for both existing and new SKUs\n→ Launched video campaigns for product awareness and retargeting high-intent buyers\n→ Improved product availability across regions (2-3 day delivery) to capture conversions during peak search hours\n→ Deployed upsell and cross-sell campaigns to lift AOV by 25% and drive repeat purchases',
    execution: [
      'Audited 50+ campaigns to identify budget bleeders and reallocate to high-performers',
      'Implemented Single Keyword Campaigns (SKC) for precision targeting and bid control',
      'Optimized bid strategies for Top-of-Search placements on branded and category terms',
      'Launched defensive campaigns to protect brand terms from competitor hijacking'
    ],
    result: 'Within one quarter, TACoS dropped from 23% to 18% (-20%) while revenue grew 32% with only a 10% increase in ad spend. Organic ranking improved from #48 to #4 for core keywords, driving sustained visibility and profitability into Q4.',
    chartData: [
      { name: 'Jan 2025', spend: 25000, sales: 58000 },
      { name: 'Feb 2025', spend: 18000, sales: 50000 },
      { name: 'Mar 2025', spend: 22000, sales: 58000 },
      { name: 'Apr 2025', spend: 17000, sales: 54000 },
      { name: 'May 2025', spend: 20000, sales: 60000 },
      { name: 'Jun 2025', spend: 20000, sales: 56000 },
      { name: 'Jul 2025', spend: 29000, sales: 70000 },
      { name: 'Aug 2025', spend: 26000, sales: 66000 },
      { name: 'Sep 2025', spend: 29500, sales: 77800 },
      { name: 'Oct 2025', spend: 19000, sales: 48000 },
      { name: 'Nov 2025', spend: 0, sales: 0 },
    ],
  },
  {
    id: 'cs-2',
    title: 'Blinkit Search Domination',
    headline: 'Scaled a Beauty & Makeup Brand 2x on Blinkit in 3 Months',
    category: 'Beauty & Makeup',
    platform: 'Quick Commerce',
    stats: [
      { label: 'Advertising ROAS', value: '4.2', description: 'Improved from 3.0 baseline' },
      { label: 'Revenue Growth Scale', value: '2x', description: 'Achieved in 75 days' },
      { label: 'Conversion Rate Lift', value: '17%', description: 'Higher ad-to-purchase conversion efficiency' },
    ],
    performanceSnapshots: [
      { label: 'Total Sales (USD)', value: '$115,460', color: '#7c3aed' },
      { label: 'Total Units', value: '44,024', color: '#10b981' },
      { label: 'ROAS', value: '4.2', color: '#6b7280' },
      { label: 'Impressions', value: '2.1M', color: '#6366f1' },
    ],
    challenge: 'A beauty and makeup brand was getting visibility but conversions were lagging. Their ROAS was stagnant at 3.0 and they were losing out on potential sales.',
    strategy: 'Implemented a SKU-first growth framework focused on high-potential movers and regional efficiency:\n→ Classified SKUs into "Growth" and "Core" segments based on historical conversion rates and sales velocity.\n→ Deployed city-level campaign clusters to optimize for regional search trends and hyper-local inventory availability.\n→ Shifted to an event-led bidding strategy, capturing high-intent "gifting" and "seasonal" searches during peak retail windows.\n→ Balanced aggressive search domination for top SKUs with Listing Spotlight for broader top-of-funnel awareness.',
    execution: [
      'Identified and scaled "Nail Paint Kits" into a top-selling product line via targeted bundle promotion.',
      'Extracted high-conversion keywords using Helium10 and Blinkit suggestions to maintain top-tier placements.',
      'Launched segmented SKU-level campaigns to enable granular performance tracking and budget control.',
      'Utilized Listing Spotlight to drive awareness for high-potential SKUs where organic ranking was low.',
      'Implemented real-time budget reallocation: doubling down on high-performers and cutting spend on poor ROAS SKUs.',
      'Optimized gifting season revenue by targeting occasion-specific keywords and special event traffic.'
    ],
    result: 'Achieved a 2x revenue scale within 75 days of onboarding. Monthly revenue grew from an average of $60k to almost $120k through aggressive SKU classification and regional optimization. ROAS improved from 3.0 to 4.2 while increasing total conversion rate (CVR) by 17% through better placement targeting and creative refinement.',
    chartData: generateBlinkitData(),
  },
  {
    id: 'cs-3',
    title: 'Sports & Fitness: Pull Up Bar Scale',
    headline: 'Scaled a Pull Up Bar from Page 3 to #1 Best Seller in Category',
    category: 'Sports & Fitness',
    platform: 'Amazon',
    stats: [
      { label: 'Organic Sales Growth', value: '+25%', description: 'Permanent lift in organic daily sales velocity' },
      { label: 'Best TACoS Achieved', value: '7.5%', description: 'Improved from 10% through bid optimization' },
      { label: 'Category BSR Ranking', value: '#1', description: 'Achieved #1 position in Best Sellers' },
    ],
    performanceSnapshots: [
      { label: 'Spend', value: '$60,400', color: '#2563eb' },
      { label: 'Sales', value: '$446,800', color: '#f97316' },
      { label: 'ROAS', value: '7.40', color: '#6b7280' },
      { label: 'Impressions', value: '40,867,048', color: '#6366f1' },
      { label: 'CTR', value: '1.29%', color: '#10b981' }
    ],
    challenge: 'A pull-up bar brand was hitting a growth ceiling at $35k/month with a 10% TACoS. Despite competitive pricing, they were overdependent on paid traffic (65% share) and campaign structures were basic, overlapping, and lacked granular control, leading to budget exhaustion by evening.',
    strategy: 'Engineered a scalable growth framework using deep data audits and search term isolation:\n→ Initial Audit & Opportunity: Identified manual and auto overlaps to restructure for high underlying efficiency (ROI 7).\n→ Listing & Keyword Foundation: Conducted a 65-day STR review for high-CVR long-tail keywords and top-performing ASINs.\n→ Campaign Architecture: Built a structured framework from scratch across all four variants using exact match for Top 10 high-volume keywords and phrase match for discovery.\n→ Budget Optimization: Implemented automated budget rules to scale during high-traffic windows and restrict during low-intent periods.',
    execution: [
      'Redirected marketing efforts to the best-selling ASIN during a competitor stockout window to maximize organic velocity.',
      'Aggressively targeted the top 10 bestsellers through focused ad groups using SP and SBV ads.',
      'Established a disciplined 10-day creative refresh cycle and monthly data-led audits.',
      'Utilized search term isolation to negating overlaps, lowering CPCs and improving keyword efficiency.',
      'Secured the #1 BSR tag in June through consolidated marketing and Prime Day build-up.'
    ],
    result: 'Tripled monthly revenue from $35k to $145k in 75 days of onboarding. Improved profitability by reducing TACoS from 10% to 7.5% while establishing #1 BSR in Pull-Up Bars and #3 BSR in Sports & Fitness. This sustained the permanent 25% lift in organic daily sales.',
    chartData: generateAmazonAdsData(),
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'amazon',
    title: 'Amazon Ads Architecture',
    description: 'PPC campaigns that don’t just spend budget, but defend market share and drive organic rank.',
    icon: ShoppingCart,
  },
  {
    id: 'qcom',
    title: 'Quick Commerce Scale',
    description: 'Dominate Blinkit, Zepto, and Swiggy Instamart before your competitors figure out the bid landscape.',
    icon: Zap,
  },
  {
    id: 'flipkart',
    title: 'Flipkart Performance',
    description: 'Navigating the complexities of Flipkart’s ad engine to extract maximum ROI per dollar.',
    icon: Anchor,
  },
  {
    id: 'audit',
    title: 'System & Profit Audits',
    description: 'I find where you are bleeding money. A comprehensive deep-dive into your account health.',
    icon: BarChart3,
  }
];

export const BRAND_LOGOS = [
  { name: "StartUp Inc", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "FitLife", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "PureGlow", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" },
  { name: "UrbanTech", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "EcoWear", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" }
];