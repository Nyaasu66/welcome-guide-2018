(function (window, document) {
  'use strict'

  var PREVIEW_WIDTH = 390
  var PREVIEW_HEIGHT = 666
  var PHONE_MAX_WIDTH = 600
  var PHONE_MIN_HEIGHT = 480
  var PHONE_MAX_ASPECT_RATIO = 0.82
  var updateFrame = null

  function getLayoutViewport() {
    var root = document.documentElement

    return {
      width: root.clientWidth || window.innerWidth || PREVIEW_WIDTH,
      height: root.clientHeight || window.innerHeight || PREVIEW_HEIGHT
    }
  }

  function getVisibleViewport() {
    var viewport = window.visualViewport

    return {
      width: viewport ? viewport.width : window.innerWidth,
      height: viewport ? viewport.height : window.innerHeight
    }
  }

  // UA Client Hints is preferred where available. The short UA fallback follows
  // the cross-browser "Mobi" convention and keeps explicit legacy phone tokens.
  function isPhoneUserAgent() {
    var uaData = window.navigator.userAgentData
    var ua = window.navigator.userAgent || ''

    if (uaData && typeof uaData.mobile === 'boolean') {
      return uaData.mobile
    }

    return /Mobi|iPhone|iPod|Windows Phone|IEMobile|BlackBerry|BB10|Opera Mini|webOS/i.test(ua)
  }

  function isStandardPhoneViewport(viewport) {
    return viewport.width <= PHONE_MAX_WIDTH &&
      viewport.height >= PHONE_MIN_HEIGHT &&
      viewport.width / viewport.height <= PHONE_MAX_ASPECT_RATIO
  }

  function getPreviewScale(viewport) {
    var sidePadding = viewport.width >= 900 ? Math.max(60, viewport.width * 0.52) : 32
    var topPadding = viewport.width >= 900 ? 96 : 250
    var availableWidth = Math.max(220, viewport.width - sidePadding)
    var availableHeight = Math.max(400, viewport.height - topPadding)

    return Math.max(0.56, Math.min(1, availableWidth / PREVIEW_WIDTH, availableHeight / PREVIEW_HEIGHT))
  }

  function applyPreviewMetrics() {
    var viewport = getVisibleViewport()
    var scale = getPreviewScale(viewport)
    var root = document.documentElement

    root.style.setProperty('--preview-scale', scale.toFixed(4))
    root.style.setProperty('--preview-rendered-width', Math.round(PREVIEW_WIDTH * scale) + 'px')
    root.style.setProperty('--preview-rendered-height', Math.round(PREVIEW_HEIGHT * scale) + 'px')

  }

  function updateMode() {
    var viewport = getLayoutViewport()
    var useNativeLayout = isPhoneUserAgent() && isStandardPhoneViewport(viewport)
    var root = document.documentElement

    root.classList.toggle('native-mobile-mode', useNativeLayout)
    root.classList.toggle('preview-mode', !useNativeLayout)
    root.setAttribute('data-display-mode', useNativeLayout ? 'native' : 'preview')

    if (!useNativeLayout) {
      applyPreviewMetrics()
    }

    window.dispatchEvent(new CustomEvent('viewportmodechange', {
      detail: {
        mode: useNativeLayout ? 'native' : 'preview',
        width: viewport.width,
        height: viewport.height
      }
    }))
  }

  function scheduleUpdate() {
    if (updateFrame !== null) {
      window.cancelAnimationFrame(updateFrame)
    }

    updateFrame = window.requestAnimationFrame(function () {
      updateFrame = null
      updateMode()
    })
  }

  updateMode()
  window.addEventListener('resize', scheduleUpdate)
  window.addEventListener('orientationchange', scheduleUpdate)

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', scheduleUpdate)
  }

  window.viewportAdapter = {
    refresh: updateMode,
    isPhoneUserAgent: isPhoneUserAgent,
    isStandardPhoneViewport: isStandardPhoneViewport
  }
})(window, document)
