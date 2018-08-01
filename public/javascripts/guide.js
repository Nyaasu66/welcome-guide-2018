var start = function() {
	changeSize()
	var pageChange = document.getElementById('page-change'),
			pageChangeUl = document.getElementById('page-change-ul'),
			hash = parseInt(location.hash.split('#')[1]),
			pageWidth = pageChange.offsetWidth,
			unit = 100 * (parseFloat(document.getElementsByTagName('html')[0].style.fontSize) / 625 / 0.16),
			canChange = true
	pageChangeUl.getElementsByTagName('li')[hash+1].className = 'now-page'
	pageChangeUl.style.left = (pageWidth / 2) - (hash + 1.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
  document.getElementById('page-content-' + hash).style.display = 'block'
  $('.page-content-list li').on('touchstart', function(e) {
    this.className = 'data-image hover'
  })
  $('.page-content-list li').on('touchend', function(e) {
    this.className = 'data-image'
  })
  $('.page-content-list li').on('tap', function(e) {
		if (this.getAttribute('disabled')) {
			window.location.href = this.getAttribute('to')
			return
		}
    showMengBan(parseInt(this.getAttribute('page')), parseInt(this.getAttribute('list')))
  })
  $('#page-content-3 .page-content-title:first').on('tap', function(e) {
    showMengBan(parseInt(this.getAttribute('page')), parseInt(this.getAttribute('list')))
  })
  $('.open-site').on('tap', function(e) {
    window.open(this.getAttribute('href'))
  })
	$('#switch-left').on('tap', function(e) {
    e.stopPropagation()
		console.log('left')
		if(canChange) {
			canChange = false
			changePage(1)
		}
	})
	$('#switch-right').on('tap', function(e) {
    e.stopPropagation()
		console.log('right')
		if(canChange) {
			canChange = false
			changePage(-1)
		}
	})


  $('body').on('touchstart', function(e) {
    e.stopPropagation()
  })

	function jumpPage() {
		canChange = true
		if(pageChangeUl.getElementsByClassName('like-page')[0]) {
			var likeIndex = parseInt(pageChangeUl.getElementsByClassName('like-page')[0].getAttribute('index'))
			switch(likeIndex) {	
				case 6:
					pageChangeUl.style.transition = '0s'
					pageChangeUl.style.left = (pageWidth / 2) - (2.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
					pageChangeUl.getElementsByClassName('like-page')[0].className = ''
					break
				case 1:
					pageChangeUl.style.transition = '0s'
					pageChangeUl.style.left = (pageWidth / 2) - (5.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
					pageChangeUl.getElementsByClassName('like-page')[0].className = ''
					break
			}
		}
	}
	pageChangeUl.addEventListener("webkitTransitionEnd", jumpPage);
	pageChangeUl.addEventListener('transitionend', jumpPage)

	function changePage(moveX) {

		var pageChangeLi = pageChangeUl.getElementsByTagName('li'),
				nowIndex = parseInt(pageChangeUl.getElementsByClassName('now-page')[0].getAttribute('index'))
		switch(moveX) {
			case 1:
				if(nowIndex === 5) {
          document.getElementById('page-content-4').style.display = 'none'
					hash = 1
          document.getElementById('page-content-1').style.display = 'block'
					location.hash = '#' + hash
					pageChangeLi[nowIndex].className = ''
					pageChangeLi[6].className = 'like-page'
					pageChangeLi[2].className = 'now-page'
					pageChangeUl.style.transition = '0.1s'
					pageChangeUl.style.left = (pageWidth / 2) - (nowIndex + 1.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
				}
				else{
          document.getElementById('page-content-' + hash).style.display = 'none'
					hash += 1
          document.getElementById('page-content-' + hash).style.display = 'block'
					location.hash = '#' + hash
					pageChangeLi[nowIndex].className = ''
					pageChangeLi[nowIndex+1].className = 'now-page'
					pageChangeUl.style.transition = '0.1s'
					pageChangeUl.style.left = (pageWidth / 2) - (nowIndex + 1.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
				} 
				break
			case -1:
				if(nowIndex === 2) {
          document.getElementById('page-content-1').style.display = 'none'
					hash = 4
          document.getElementById('page-content-4').style.display = 'block'
					location.hash = '#' + hash
					pageChangeLi[nowIndex].className = ''
					pageChangeLi[1].className = 'like-page'
					pageChangeLi[5].className = 'now-page'
					pageChangeUl.style.transition = '0.1s'
					pageChangeUl.style.left = (pageWidth / 2) - (nowIndex - 0.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
				}
				else{
          document.getElementById('page-content-' + hash).style.display = 'none'
					hash -= 1
          document.getElementById('page-content-' + hash).style.display = 'block'
					location.hash = '#' + hash
					pageChangeLi[nowIndex].className = ''
					pageChangeLi[nowIndex-1].className = 'now-page'
					pageChangeUl.style.transition = '0.1s'
					pageChangeUl.style.left = (pageWidth / 2) - (nowIndex - 0.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
				} 
				break
		}
	}
  var dataImage = document.getElementsByClassName('data-image');
  for(var i=0; i<dataImage.length; i++) {
    dataImage[i].style.backgroundImage = 'url(' + dataImage[i].getAttribute('data-src') + ')';
  }

    function showMengBan(page,list) {
      document.getElementById('mengban').style.display = 'flex'
      document.getElementById('word-content').innerHTML = words[page-1][list-1]
    }
    function hideMengBan() {
      document.getElementById('mengban').style.display = 'none'
    }
    $('#close-btn').on('touchend', function() {
      hideMengBan()
    })
}

start()