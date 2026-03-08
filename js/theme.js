// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    updateThemeIcon('light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    updateThemeIcon('dark');
  }
}

function updateThemeIcon(theme) {
  const themeIcons = document.querySelectorAll('.theme-icon');
  themeIcons.forEach(icon => {
    if (theme === 'dark') {
      icon.innerHTML = 'light_mode'; // Show sun when dark
    } else {
      icon.innerHTML = 'dark_mode'; // Show moon when light
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const currentTheme = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  updateThemeIcon(currentTheme);
});
