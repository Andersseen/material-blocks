import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect, describe, beforeEach, it } from 'vitest';

import SectionHeader from './section-header';


describe('SectionHeader', () => {
  let fixture: ComponentFixture<SectionHeader>;
  let component: SectionHeader;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [SectionHeader],
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeader);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('data', { title: 'Title', description: 'Desc' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render provided title and description', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const titleEl = compiled.querySelector('h3');
    const descEl = compiled.querySelector('p');
    expect(titleEl?.textContent).toContain('Title');
    expect(descEl?.textContent).toContain('Desc');
  });
});
