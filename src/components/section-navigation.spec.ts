import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { describe, beforeEach, it, expect, vi } from 'vitest';

import SectionNavigation from './section-navigation';


describe('SectionNavigation', () => {
  let fixture: ComponentFixture<SectionNavigation>;
  let component: SectionNavigation;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [SectionNavigation, RouterTestingModule, NoopAnimationsModule],
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit navigation events', () => {
    const spy = vi.fn();
    component.navigationButton.subscribe(spy);
    const buttons = fixture.nativeElement.querySelectorAll('button');
    // index 1 -> prev, index 2 -> next
    (buttons[1] as HTMLButtonElement).click();
    (buttons[2] as HTMLButtonElement).click();
    expect(spy).toHaveBeenCalledWith('prev');
    expect(spy).toHaveBeenCalledWith('next');
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
