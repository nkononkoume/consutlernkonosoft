(() => {
  const themeKey = 'nkonosoft-theme';
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const languageSwitch = document.querySelector('[data-language-switch]');
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  const readTheme = () => {
    try {
      return localStorage.getItem(themeKey) || 'dark';
    } catch {
      return 'dark';
    }
  };

  const applyTheme = (theme) => {
    const isLight = theme === 'light';
    document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
    if (themeMeta) themeMeta.content = isLight ? '#f4f7f5' : '#07111f';
    if (themeToggle) {
      const nextTheme = isLight ? 'dark' : 'light';
      const label = themeToggle.dataset[nextTheme === 'light' ? 'lightLabel' : 'darkLabel'];
      themeToggle.setAttribute('aria-label', label);
      themeToggle.title = label;
      themeToggle.querySelector('[data-theme-glyph]').textContent = isLight ? '\u263e' : '\u263c';
    }
  };

  applyTheme(readTheme());

  themeToggle?.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    try {
      localStorage.setItem(themeKey, nextTheme);
    } catch {
      // Theme switching still works for this page when storage is unavailable.
    }
    applyTheme(nextTheme);
  });

  if (languageSwitch) {
    languageSwitch.value = document.documentElement.lang === 'en' ? 'en' : 'fr';
    languageSwitch.addEventListener('change', () => {
      const language = languageSwitch.value;
      const destination = language === 'en' ? languageSwitch.dataset.urlEn : languageSwitch.dataset.urlFr;
      if (destination) window.location.href = destination;
    });
  }
})();
