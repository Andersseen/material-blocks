import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'ui-blocks-theme';
  
  private _isDarkMode = signal<boolean>(false);
  
  readonly isDarkMode = this._isDarkMode.asReadonly();
  
  constructor() {
    this.initializeTheme();
    
    // Apply theme changes to document
    effect(() => {
      const isDark = this._isDarkMode();
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem(this.STORAGE_KEY, isDark.toString());
    });
  }
  
  private initializeTheme(): void {
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme !== null) {
      this._isDarkMode.set(savedTheme === 'true');
    } else {
      this._isDarkMode.set(prefersDark);
    }
  }
  
  toggleTheme(): void {
    this._isDarkMode.update(current => !current);
  }
  
  setTheme(isDark: boolean): void {
    this._isDarkMode.set(isDark);
  }
}