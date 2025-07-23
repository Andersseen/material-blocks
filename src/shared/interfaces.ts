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
  blocks: BlockCard[];
}
