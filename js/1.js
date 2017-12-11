function mover(i)
{
	var mainone=document.getElementById('main-one');
	var maintwo=document.getElementById('main-two');
	var mainthree=document.getElementById('main-three');
	switch(i){
		case 1:
			$(event.target).parent().addClass('present')
			$(event.target).parent().next().removeClass('present')
			$(event.target).parent().next().next().removeClass('present')
			mainone.style.display="block";
			maintwo.style.display="none";
			mainthree.style.display="none";
			break;
		case 2:
			$(event.target).parent().addClass('present')
			$(event.target).parent().prev().removeClass('present')
			$(event.target).parent().next().removeClass('present')
			mainone.style.display="none";
			maintwo.style.display="block";
			mainthree.style.display="none";
			break;
		case 3:
			$(event.target).parent().addClass('present')
			$(event.target).parent().prev().removeClass('present')
			$(event.target).parent().prev().prev().removeClass('present')
			mainone.style.display="none";
			maintwo.style.display="none";
			mainthree.style.display="block";
			break;		
	}
}


function deladv(){

	$(event.target).parent().parent().remove();
}



/* 知识点：        */
        /*       this用法 */
        /*       DOM事件 */
        /*       定时器 */

        window.onload = function() {
            var container = document.getElementById('container');
            var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var timer;

            function animate(offset) {
                //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
                //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
                var newLeft = parseInt(list.style.left) + offset;
                list.style.left = newLeft + 'px';
                //无限滚动判断
                if (newLeft > -945) {
                    list.style.left = -4725 + 'px';
                }
                if (newLeft < -4725) {
                    list.style.left = -945 + 'px';
                }
            }

            function play() {
                //重复执行的定时器
                timer = setInterval(function() {
                    next.onclick();
                }, 2500)
            }

            function stop() {
                clearInterval(timer);
            }

            function buttonsShow() {
                //将之前的小圆点的样式清除
                for (var i = 0; i < buttons.length; i++) {
                    if (buttons[i].className == "on") {
                        buttons[i].className = "";
                    }
                }
                //数组从0开始，故index需要-1
                buttons[index - 1].className = "on";
            }

            prev.onclick = function() {
                index -= 1;
                if (index < 1) {
                    index = 5
                }
                buttonsShow();
                animate(945);
            };

            next.onclick = function() {
                //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
                index += 1;
                if (index > 5) {
                    index = 1
                }
                animate(-945);
                buttonsShow();
            };

            for (var i = 0; i < buttons.length; i++) {
                (function(i) {
                    buttons[i].onclick = function() {

                        /*   这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
                        /*   由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
                        var clickIndex = parseInt(this.getAttribute('index'));
                        var offset = 945 * (index - clickIndex); //这个index是当前图片停留时的index
                        animate(offset);
                        index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
                        buttonsShow();
                    }
                })(i)
            }

            container.onmouseover = stop;
            container.onmouseout = play;
            play();

        }
