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

export interface BlockCard {
  id: string;
  title: string;
  description: string;
  previewUrl: string;
}

export interface SectionData {
  title: string;
  description: string;
  path: string;
  blocks: BlockCard[];
}

export interface BlockView {
  label: string;
  content: string;
  language?: string;
}

export interface BlockData {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  views: BlockView[];
  previewUrl?: string;
}

export interface Route {
  path: string;
  title: string;
  name: string;
}

export type ViewMode = 'code' | 'preview';
