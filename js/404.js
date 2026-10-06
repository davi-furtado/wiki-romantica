const wikiBasePath = location.pathname.startsWith('/wiki-romantica')
  ? '/wiki-romantica/'
  : '/'

document.querySelectorAll('[data-base-href]').forEach((link) => {
  link.href = `${wikiBasePath}${link.dataset.baseHref || ''}`
})
