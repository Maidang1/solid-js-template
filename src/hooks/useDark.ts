import { createMemo } from 'solid-js';
import { createStore } from 'solid-js/store';

interface Store {
  theme: 'dark' | 'light';
}

const [store, setStore] = createStore<Store>({
  theme: 'light',
});

export const useDark = () => {
  const isDark = createMemo(() => {
    return store.theme === 'dark';
  });
  const toggleTheme = () => {
    const html = document.querySelector('html') as HTMLHtmlElement;
    const currentTheme = store.theme;

    if (currentTheme === 'dark') {
      html.classList.remove('dark');
      setStore({
        ...store,
        theme: 'light',
      });
    } else {
      html.classList.add('dark');
      setStore({
        ...store,
        theme: 'dark',
      });
    }
  };

  return [isDark, toggleTheme] as const;
};
