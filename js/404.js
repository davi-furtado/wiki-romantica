const wikiBasePath = location.pathname.startsWith('/wiki-romantica')
  ? '/wiki-romantica/'
  : '/'

const appendStylesheet = (href) => {
  const stylesheet = document.createElement('link')
  stylesheet.rel = 'stylesheet'
  stylesheet.href = `${wikiBasePath}${href}`
  document.head.appendChild(stylesheet)
}

const appendScript = (src) => {
  const script = document.createElement('script')
  script.src = `${wikiBasePath}${src}`
  document.body.appendChild(script)
}

const icon = document.createElement('link')
icon.rel = 'icon'
icon.href = `${wikiBasePath}favicon.ico`
document.head.appendChild(icon)
appendStylesheet('css/bootstrap.min.css')
appendStylesheet('css/style.css')

document.querySelectorAll('[data-base-href]').forEach((link) => {
  link.href = `${wikiBasePath}${link.dataset.baseHref || ''}`
})

appendScript('js/bootstrap.bundle.min.js')
