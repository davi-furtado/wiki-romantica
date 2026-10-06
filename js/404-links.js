(() => {
  const basePath = window.__wikiBasePath || (location.pathname.startsWith('/wiki-romantica') ? '/wiki-romantica/' : '/')
  document.querySelectorAll('[data-base-href]').forEach((link) => {
    link.href = `${basePath}${link.dataset.baseHref || ''}`
  })
})()
