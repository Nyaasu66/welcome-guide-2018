var start = function () {
  changeSize()

  document.getElementById('en_ncu').addEventListener('animationend',buttonAppear, false)
  //生成guide-list
  var startBtn = document.getElementById('start-page-btn')
  var startBtnOnce = true
  startBtn.addEventListener('touchend', function () {
    if (startBtnOnce) {
      startBtnOnce = false
      //元素消失
      imgDisappear()
      //云层离开效果
      document.getElementById('cloud-left').style.animation = 'cloudFadeOut 1s 0.3s'
      document.getElementById('cloud-left').style.animationFillMode = 'forwards'
      document.getElementById('cloud-right').style.animation = 'cloudFadeOut 1s 0.37s'
      document.getElementById('cloud-right').style.animationFillMode = 'forwards'
      //菜单生成
      menuAppear()
    }
  })

  //使animates类的元素在动画执行完后继续保持显示
  function showOpacity() { this.style.opacity = '1' }
  var allAnimate = document.getElementsByClassName("animates")
  for (i = 0, l = allAnimate.length; i < l; i++) {
    allAnimate[i].addEventListener('animationend', showOpacity, false)
  }

  function imgDisappear() {
    //云层中的元素消失
    document.getElementById('open_words').style.opacity = '0'
    document.getElementById('start-page-btn').style.opacity = '0'
    //云层上部的元素消失
    var allImgDisapr = document.getElementsByClassName("img-disapr")
    for (i = 0, l = allImgDisapr.length; i < l; i++) {
      allImgDisapr[i].style.transition = 'opacity 0.6s'
      allImgDisapr[i].style.opacity = '0'
    }
  }

  function menuAppear() {
    document.getElementById('guide-list').style.display = 'block'
    document.getElementById('guide-1').style.animation = 'guideLeft 1.3s ease-in-out 0.6s'
    document.getElementById('guide-2').style.animation = 'guideRight 1.3s ease-in-out 1.6s'
    document.getElementById('guide-3').style.animation = 'guideLeft 1.3s ease-in-out 2.6s'
    document.getElementById('guide-4').style.animation = 'guideRight 1.3s ease-in-out 3.6s'
    document.getElementById('guide-1').style.animationFillMode = 'forwards'
    document.getElementById('guide-2').style.animationFillMode = 'forwards'
    document.getElementById('guide-3').style.animationFillMode = 'forwards'
    document.getElementById('guide-4').style.animationFillMode = 'forwards'
    document.getElementById('bubbles-container').style.animation = 'bubblesFadeIn 1.3s ease 0.3s'
    document.getElementById('bubbles-container').style.animationFillMode = 'forwards'
  }

  function buttonAppear() {
    document.getElementById('start-page-btn').style.display = 'block'
  }
}

start()