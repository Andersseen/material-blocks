import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { expect, test } from 'vitest';
import { getHighlightOptions } from '@shared/highlight.config';
import App from './app';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideHighlightOptions(getHighlightOptions()),
      ],
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // test('should render title', async () => {
  //   await render(App);
  //   expect(screen.getByText(/hello/i)).toBeInTheDocument();
  // });

  // it('should match snapshot', () => {
  //   expect(fixture).toMatchSnapshot();
  // });
});
