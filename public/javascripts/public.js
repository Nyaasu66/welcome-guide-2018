var changeSize = function() {
  document.getElementsByTagName('html')[0].style.fontSize = (document.body.offsetWidth / 1080) * 6.25 * 16 + 'px';
  window.onresize = function() {
    document.getElementsByTagName('html')[0].style.fontSize = (document.body.offsetWidth / 1080) * 6.25 * 16 + 'px';
  }
}
