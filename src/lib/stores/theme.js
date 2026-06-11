import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
  const stored = browser ? localStorage.getItem('lr-theme') || 'light' : 'light';
  const { subscribe, set } = writable(stored);

  return {
    subscribe,
    toggle: () => {
      if (!browser) return;
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      document.body.setAttribute('data-theme', next);
      localStorage.setItem('lr-theme', next);
      set(next);
    },
    init: () => {
      if (!browser) return;
      const saved = localStorage.getItem('lr-theme') || 'light';
      document.documentElement.setAttribute('data-theme', saved);
      document.body.setAttribute('data-theme', saved);
      set(saved);
    }
  };
}

export const theme = createThemeStore();
