export interface Section {
  id: string;
  title: string;
  description: string;
  icon: string;
  componentCount: number;
  tags: string[];
  isPopular?: boolean;
  gradient: string;
}
export const sections: Section[] = [
  {
    id: 'features',
    title: 'Features',
    description:
      'Showcase product features and benefits with various layouts, grids, and interactive elements.',
    icon: 'featured_play_list',
    componentCount: 12,
    tags: ['Product', 'Benefits', 'Showcase', 'Grid'],
    isPopular: true,
    gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
  },
  {
    id: 'heroes',
    title: 'Heroes',
    description:
      'Eye-catching landing page headers with CTAs, background images, and compelling content.',
    icon: 'web_asset',
    componentCount: 15,
    tags: ['Landing', 'Header', 'CTA', 'Background'],
    isPopular: true,
    gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
  },
  {
    id: 'pricing',
    title: 'Pricing',
    description:
      'Professional pricing tables, subscription plans, and service comparison layouts.',
    icon: 'payments',
    componentCount: 8,
    tags: ['Plans', 'Tables', 'Subscription', 'Compare'],
    isPopular: true,
    gradient: 'bg-gradient-to-br from-green-500 to-green-600',
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
    description:
      'Customer reviews, testimonials, and social proof components with carousels and grids.',
    icon: 'format_quote',
    componentCount: 10,
    tags: ['Reviews', 'Social Proof', 'Carousel', 'Customer'],
    gradient: 'bg-gradient-to-br from-pink-500 to-pink-600',
  },
  {
    id: 'team',
    title: 'Team',
    description:
      'Professional team member profiles, employee showcases, and organizational layouts.',
    icon: 'groups',
    componentCount: 7,
    tags: ['Profiles', 'Staff', 'Organization', 'Cards'],
    gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
  },
  {
    id: 'contact',
    title: 'Contact',
    description:
      'Contact forms, location maps, business information, and communication components.',
    icon: 'contact_mail',
    componentCount: 9,
    tags: ['Forms', 'Maps', 'Information', 'Communication'],
    gradient: 'bg-gradient-to-br from-teal-500 to-teal-600',
  },
  {
    id: 'footers',
    title: 'Footers',
    description:
      'Website footers with links, legal information, social media, and contact details.',
    icon: 'web',
    componentCount: 11,
    tags: ['Links', 'Legal', 'Social', 'Navigation'],
    gradient: 'bg-gradient-to-br from-gray-500 to-gray-600',
  },
  {
    id: 'navigation',
    title: 'Navigation',
    description:
      'Navigation bars, side menus, breadcrumbs, and mobile-friendly navigation components.',
    icon: 'menu',
    componentCount: 14,
    tags: ['Navbar', 'Menu', 'Breadcrumb', 'Mobile'],
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
  },
  {
    id: 'stats',
    title: 'Statistics',
    description:
      'Data visualization, metrics display, counters, and achievement showcase components.',
    icon: 'analytics',
    componentCount: 6,
    tags: ['Data', 'Metrics', 'Counters', 'Charts'],
    gradient: 'bg-gradient-to-br from-red-500 to-red-600',
  },
  {
    id: 'blog',
    title: 'Blog',
    description:
      'Article layouts, blog posts, news sections, and editorial content components.',
    icon: 'article',
    componentCount: 13,
    tags: ['Articles', 'Posts', 'News', 'Content'],
    gradient: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description:
      'Product catalogs, shopping carts, checkout flows, and online store components.',
    icon: 'shopping_cart',
    componentCount: 16,
    tags: ['Products', 'Cart', 'Shop', 'Checkout'],
    gradient: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
  },
  {
    id: 'forms',
    title: 'Forms',
    description:
      'Advanced forms, multi-step wizards, validation patterns, and input components.',
    icon: 'dynamic_form',
    componentCount: 18,
    tags: ['Input', 'Validation', 'Wizard', 'Fields'],
    gradient: 'bg-gradient-to-br from-violet-500 to-violet-600',
  },
];
