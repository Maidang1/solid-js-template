import { Component } from 'solid-js';
import { useDark } from './hooks/useDark';

const App: Component = () => {
  const [isDark, toggleTheme] = useDark();

  return (
    <div class='w-full h-full bg-white dark:bg-dark text-black dark:text-white'>
      <main class='px-6 py-[8vh] max-w-[76ch] mx-auto xl:text-lg dark:prose-invert relative dark:text-white'>
        <div class='absolute right-4 top-0 text-2xl mt-4 cursor-pointer text-coolgray'>
          <div
            class={
              isDark() ? 'i-ri-sun-line text-white' : 'i-ri-moon-line text-dark'
            }
            onClick={toggleTheme}
          ></div>
        </div>
        <header>
          <h1 class='flex dark:text-white text-3xl'>
            <span>solid-js-template</span>
          </h1>
        </header>
      </main>
    </div>
  );
};

export default App;
