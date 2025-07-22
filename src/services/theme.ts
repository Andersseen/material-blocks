import { isPlatformBrowser } from '@angular/common';
import {
  computed,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable()
export default class ThemeState {
  #platformId = inject(PLATFORM_ID);
  #currentTheme = signal<Theme>('dark');

  readonly theme = this.#currentTheme.asReadonly();
  readonly isDark = computed(() => this.#currentTheme() === 'dark');

  private isBrowser = signal(isPlatformBrowser(this.#platformId));

  public initializeTheme() {
    if (!this.isBrowser()) return;
    const savedTheme = localStorage.getItem('theme') as Theme;

    this.applyTheme(savedTheme ?? 'dark');
  }

  private applyTheme(theme: Theme) {
    if (!this.isBrowser()) return;
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
    this.#currentTheme.set(theme);
  }

  toggleTheme() {
    this.applyTheme(this.isDark() ? 'light' : 'dark');
  }

  setTheme(theme: Theme) {
    this.#currentTheme.set(theme);
  }
}
