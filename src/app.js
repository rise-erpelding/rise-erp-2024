// The initial theme is set by the inline script in <head> (before first paint).
// This handles switching it afterwards.
const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');

function getTheme() {
  return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function updateToggleLabel() {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  themeToggle.setAttribute('aria-label', `Switch to ${next} mode`);
}

themeToggle.addEventListener('click', () => {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try {
    localStorage.setItem('theme', next);
  } catch (e) {
    // storage unavailable (e.g. private mode) — the theme just won't persist
  }
  updateToggleLabel();
});

updateToggleLabel();
