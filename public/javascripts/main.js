var start = function() {
  changeSize()

  //生成guide-list
  {
    var startBtn = document.getElementById('start-page-btn')
    var startBtnOnce = true
    startBtn.addEventListener('touchend', function() {
      if(startBtnOnce) {
        startBtnOnce = false
        //云层中的元素消失
        document.getElementById('open_words').style.opacity = '0'
        this.style.opacity = '0'
        //云层上部的元素消失
        document.getElementById('img_mask').style.opacity = '1'
        //云层离开效果
        document.getElementById('cloud-left').style.animation = 'cloudFadeOut 1s 0.3s'
        document.getElementById('cloud-left').style.animationFillMode = 'forwards'
        document.getElementById('cloud-right').style.animation = 'cloudFadeOut 1s 0.37s'
        document.getElementById('cloud-right').style.animationFillMode = 'forwards'
        //菜单生成
        setTimeout(function() {
          var guideUrl = ['1','2','3','4']
          var guideName = ['入校事宜','学业指导','校园文化','乐居香樟']
          for(var i=0; i<5; i++) {
            if(i === 4) {
              var clearDom = document.createElement('div')
              clearDom.className = 'clear'
              document.getElementById('guide-list').appendChild(clearDom)
            }
            else {
              var guideList = document.createElement('li')
              guideList.className = 'guide-li-' + (i + 1)
              guideList.setAttribute('index', i)
              guideList.innerHTML = '<a href="./guide#' + guideUrl[i] + '" style="background-image: url(images/guide-icon-' + (i+1) + '.png">' + guideName[i] + '</a>'
              guideList.style.backgroundImage = 'url(./images/guide-before-bg-' + (i + 1) + '.png)';
              document.getElementById('guide-list').appendChild(guideList)
              guideList.addEventListener('touchstart', function() {
                var thisIndex = parseInt(this.getAttribute('index'))
                this.style.backgroundImage = 'url(./images/guide-after-bg-' + (thisIndex + 1) + '.png)'
              })
              guideList.addEventListener('touchend', function() {
                var thisIndex = parseInt(this.getAttribute('index'))
                this.style.backgroundImage = 'url(./images/guide-before-bg-' + (thisIndex + 1) + '.png)'
              })
            }
          }
        }, 600)
      }
    })
  }
}

start()

//使animates类的元素在动画执行完后继续保持显示
function showOpacity(){
  this.style.opacity = '1'
}

var allAnimate = document.getElementsByClassName("animates")
for(i=0, l = allAnimate.length; i < l; i++){
  allAnimate[i].addEventListener('animationend', showOpacity, false)
}

