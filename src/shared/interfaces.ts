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
  iframeUrl?: string;
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

export interface BlockData extends BlockCard {
  tags?: string[];
  views: BlockView[];
}

export interface Route {
  path: string;
  title: string;
  name: string;
}

export type ViewMode = 'code' | 'preview';
