import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { expect, describe, beforeEach, it } from 'vitest';

import Footer from './footer';


describe('Footer', () => {
  let fixture: ComponentFixture<Footer>;
  let component: Footer;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [Footer, RouterTestingModule, NoopAnimationsModule],
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render current year', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const year = new Date().getFullYear().toString();
    expect(compiled.textContent).toContain(year);
  });
});
