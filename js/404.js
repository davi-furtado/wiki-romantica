const wikiBasePath = location.pathname.startsWith('/wiki-romantica')
  ? '/wiki-romantica/'
  : '/'

document.querySelectorAll('[data-base-href]').forEach((link) => {
  link.href = `${wikiBasePath}${link.dataset.baseHref || ''}`
})

const themeToggle = document.querySelector('#theme-toggle')
const savedTheme =
  localStorage.getItem('wiki-theme') ||
  localStorage.getItem('tema') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light')

const renderTheme = (theme) => {
  const isDark = theme === 'dark'
  document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light')
  themeToggle.textContent = isDark ? '☀' : '☾'
  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro',
  )
  themeToggle.title = isDark
    ? 'Mudar para modo claro'
    : 'Mudar para modo escuro'
}

if (themeToggle) {
  renderTheme(savedTheme)
  themeToggle.addEventListener('click', () => {
    const nextTheme =
      document.documentElement.dataset.bsTheme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('wiki-theme', nextTheme)
    renderTheme(nextTheme)
  })
}
