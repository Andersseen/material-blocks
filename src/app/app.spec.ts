import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';
import { render, screen } from '@testing-library/angular';
import { expect, test } from 'vitest';
import App from './app';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
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
