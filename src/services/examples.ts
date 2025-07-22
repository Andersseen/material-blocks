import { Injectable } from '@angular/core';
import { SECTIONS, UISection } from '@data/sections';

@Injectable()
export default class Examples {
  getAllSections(): UISection[] {
    return SECTIONS;
  }

  getSectionsByCategory(category: string): UISection[] {
    return SECTIONS.filter((section) => section.category === category);
  }

  getSectionById(id: string): UISection | undefined {
    return SECTIONS.find((section) => section.id === id);
  }

  getCategories(): string[] {
    return [...new Set(SECTIONS.map((section) => section.category))];
  }
}
