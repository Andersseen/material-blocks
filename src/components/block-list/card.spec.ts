import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { describe, beforeEach, it, expect } from 'vitest';

import Card from './card';

const mockBlock = {
  id: '1',
  title: 'Test Block',
  description: 'Block description',
  previewUrl: 'image.png',
};

describe('Card', () => {
  let fixture: ComponentFixture<Card>;
  let component: Card;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [Card, RouterTestingModule, NoopAnimationsModule],
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('block', mockBlock);
    fixture.componentRef.setInput('path', 'section');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render block data', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const title = compiled.querySelector('h3');
    const img = compiled.querySelector('img');
    expect(title?.textContent).toContain(mockBlock.title);
    expect(img?.getAttribute('src')).toBe(mockBlock.previewUrl);
    expect(img?.getAttribute('alt')).toBe(mockBlock.title);
  });
});
