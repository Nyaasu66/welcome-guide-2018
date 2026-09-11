var changeSize = function() {
  var updateRootSize = function() {
    var html = document.getElementsByTagName('html')[0]
    var isPreview = html.classList.contains('preview-mode')
    var viewport = document.getElementById('mobile-viewport')
    var contentWidth = isPreview && viewport ? viewport.offsetWidth : document.documentElement.clientWidth

    html.style.fontSize = (contentWidth / 1080) * 6.25 * 16 + 'px'
  }

  updateRootSize()
  window.addEventListener('resize', updateRootSize)
  window.addEventListener('viewportmodechange', updateRootSize)
}
