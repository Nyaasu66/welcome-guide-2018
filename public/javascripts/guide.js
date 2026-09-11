var start = function () {
	changeSize()
	var pageChangeUl = document.getElementById('page-change-ul'),
		hash = parseInt(location.hash.split('#')[1]),
		canChange = true

	function bindActivation(selector, handler) {
		$(selector)
			.attr('role', 'button')
			.attr('tabindex', '0')
			.on('click', handler)
			.on('keydown', function (event) {
				if (event.key === 'Enter' || event.key === ' ' || event.which === 13 || event.which === 32) {
					event.preventDefault()
					this.click()
				}
			})
	}

	pageChangeUl.getElementsByTagName('li')[hash + 1].className = 'now-page'
	document.getElementById('page-content-' + hash).style.display = 'block'
	$('.page-content-list li').on('touchstart', function (e) {
		this.className = 'data-image hover'
	})
	$('.page-content-list li').on('touchend touchcancel', function (e) {
		this.className = 'data-image'
	})
	bindActivation('.page-content-list li', function () {
		if (this.getAttribute('disabled')) {
			window.location.href = this.getAttribute('to')
			return
		}
		showMengBan(parseInt(this.getAttribute('page')), parseInt(this.getAttribute('list')))
	})
	bindActivation('#switch-right', function () {
		jumpPage()
		if (canChange) {
			canChange = false
			changePage(1)
		}
	})
	bindActivation('#switch-left', function () {
		jumpPage()
		if (canChange) {
			canChange = false
			changePage(-1)
		}
	})
	

	bindActivation('#p4-app', function () {
    var ua = window.navigator.userAgent.toLowerCase(); 
    if (ua.match(/MicroMessenger/i) == 'micromessenger') { 
			document.getElementById('mengban-weixin').style.display = 'flex'; 
    } else {
			location.href='http://incu.ncuos.com/'; 
    } 
	})
	bindActivation('#close-btn-weixin', function () {
		document.getElementById('mengban-weixin').style.display = 'none'
	})

	$('.panel-title').on('click', function () {
		var button = this
		var shouldExpand = button.getAttribute('aria-expanded') !== 'true'

		$('.panel-title').each(function () {
			this.setAttribute('aria-expanded', 'false')
			document.getElementById(this.getAttribute('aria-controls')).hidden = true
		})

		if (shouldExpand) {
			button.setAttribute('aria-expanded', 'true')
			document.getElementById(button.getAttribute('aria-controls')).hidden = false
		}
	})


  var dataImage = document.getElementsByClassName('data-image');
  for(var i=0; i<dataImage.length; i++) {
    dataImage[i].style.backgroundImage = 'url(' + dataImage[i].getAttribute('data-src') + ')';
  }

	function jumpPage() {
		canChange = true
		if (pageChangeUl.getElementsByClassName('like-page')[0]) {
			var likeIndex = parseInt(pageChangeUl.getElementsByClassName('like-page')[0].getAttribute('index'))
			switch (likeIndex) {
				case 6:
					pageChangeUl.getElementsByClassName('like-page')[0].className = ''
					break
				case 1:
					pageChangeUl.getElementsByClassName('like-page')[0].className = ''
					break
			}
		}
	}

	function changePage(moveX) {

		var pageChangeLi = pageChangeUl.getElementsByTagName('li'),
			nowIndex = parseInt(pageChangeUl.getElementsByClassName('now-page')[0].getAttribute('index'))
		switch (moveX) {
			case 1:
				if (nowIndex === 5) {
					document.getElementById('page-content-4').style.display = 'none'
					hash = 1
					document.getElementById('page-content-1').style.display = 'block'
					location.hash = '#' + hash
					pageChangeLi[nowIndex].className = ''
					pageChangeLi[6].className = 'like-page'
					pageChangeLi[2].className = 'now-page'
				}
				else {
					document.getElementById('page-content-' + hash).style.display = 'none'
					hash += 1
					document.getElementById('page-content-' + hash).style.display = 'block'
					location.hash = '#' + hash
					pageChangeLi[nowIndex].className = ''
					pageChangeLi[nowIndex + 1].className = 'now-page'
				}
				break
			case -1:
				if (nowIndex === 2) {
					document.getElementById('page-content-1').style.display = 'none'
					hash = 4
					document.getElementById('page-content-4').style.display = 'block'
					location.hash = '#' + hash
					pageChangeLi[nowIndex].className = ''
					pageChangeLi[1].className = 'like-page'
					pageChangeLi[5].className = 'now-page'
				}
				else {
					document.getElementById('page-content-' + hash).style.display = 'none'
					hash -= 1
					document.getElementById('page-content-' + hash).style.display = 'block'
					location.hash = '#' + hash
					pageChangeLi[nowIndex].className = ''
					pageChangeLi[nowIndex - 1].className = 'now-page'
				}
				break
		}
	}

	function showMengBan(page, list) {
		document.getElementById('mengban').style.display = 'flex'
		document.getElementById('word-content').innerHTML = words[page - 1][list - 1]
	}
	function hideMengBan() {
		document.getElementById('mengban').style.display = 'none'
	}
	bindActivation('#close-btn', function () {
		hideMengBan()
	})

}

start()
