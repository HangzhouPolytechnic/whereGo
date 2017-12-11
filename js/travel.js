// JavaScript Document
//foot立即下载按钮鼠标悬停标签
var txt = document.getElementById('txt');
      txt.setAttribute("title","下载去哪儿客户端");
	//初始设定时器的值为空
var timer5=null;
var timer6=null;
function start(){
	clearInterval(timer5);    //清除定时器
	clearInterval(timer6);    //清除定时器
	//控制定时器当zhezhao1的css的top为252px时清楚定时器，即暂停；如果不达到则每30毫秒top的像素-5px
	timer5=setInterval(function(){
		if($('.zhezhao1').css('top')==252+'px'){
			clearInterval(timer5);
			}
		else{
			$('.zhezhao1').css('top',parseInt($(".zhezhao1").css("top"))-5+"px");
		}
		},30)
	}
function end(){
	clearInterval(timer5);    //清除定时器
	clearInterval(timer6);    //清除定时器
	//$('.box_in').css({'display':'block','opacity':'0.6'});
		//控制定时器当zhezhao1的css的top为302px时清楚定时器，即暂停；如果不达到则每30毫秒top的像素+5px
	timer6=setInterval(function(){
		if($('.zhezhao1').css('top')==302+'px'){
			clearInterval(timer6);
			}
		else{
			$('.zhezhao1').css('top',parseInt($(".zhezhao1").css("top"))+5+"px");
		}
		},30)
	}
	//初始设定时器的值为空
	var timer7=null;
	var timer8=null;
function start2(){
	
	clearInterval(timer7);     //清除定时器
	clearInterval(timer8);     //清除定时器
		//控制定时器当zhezhao2的css的top为92px时清楚定时器，即暂停；如果不达到则每30毫秒top的像素-5px
	timer7=setInterval(function(){
		if($('.zhezhao2').css('top')==92+'px'){
			clearInterval(timer7);
			}
		else{
			$('.zhezhao2').css('top',parseInt($(".zhezhao2").css("top"))-5+"px");
		}
		},30)
	}

function end2(){
	clearInterval(timer7);   //清楚定时器
	clearInterval(timer8);   //清楚定时器
	
	//$('.box_in').css({'display':'block','opacity':'0.6'});
	//控制定时器当zhezhao2的css的top为132px时清楚定时器，即暂停；如果不达到则每30毫秒top的像素+5px
	timer8=setInterval(function(){
		if($('.zhezhao2').css('top')==132+'px'){
			clearInterval(timer8);
			}
		else{
			$('.zhezhao2').css('top',parseInt($(".zhezhao2").css("top"))+5+"px");
		}
		},30)
	}
	//设置plan_nav ul的切换，当鼠标移到.mod-home-travel时，只有.mod-home-travel的display为block其余为none；plan_one的样式背景为00add1，颜色为白色；
	//余下同理
	function plan1(){
		$('.mod-home-travel').css('display','block');
		$('.mod-home-travel_two').css('display','none');
		$('.mod-home-travel_three').css('display','none');
		$('.mod-home-travel_four').css('display','none');
		$('.plan_one a').css('color','#ffffff')
		$('.plan_one').css('background-color','#00add1')
		$('.plan_two a').css('color','#000')
		$('.plan_two').css('background-color','#fff')
		$('.plan_three a').css('color','#000')
		$('.plan_three').css('background-color','#fff')
		$('.plan_four a').css('color','#000')
		$('.plan_four').css('background-color','#fff')
		
	}
	function plan2(){
		$('.mod-home-travel').css('display','none');
		$('.mod-home-travel_two').css('display','block');
		$('.mod-home-travel_three').css('display','none');
		$('.mod-home-travel_four').css('display','none');
		$('.plan_one a').css('color','#000')
		$('.plan_one').css('background-color','#fff')
		$('.plan_two a').css('color','#fff')
		$('.plan_two').css('background-color','#00add1')
		$('.plan_three a').css('color','#000')
		$('.plan_three').css('background-color','#fff')
		$('.plan_four a').css('color','#000')
		$('.plan_four').css('background-color','#fff')
	}
	function plan3(){
		$('.mod-home-travel').css('display','none');
		$('.mod-home-travel_two').css('display','none');
		$('.mod-home-travel_three').css('display','block');
		$('.mod-home-travel_four').css('display','none');
		$('.plan_three a').css('color','#fff')
		$('.plan_three').css('background-color','#00add1')
		$('.plan_one a').css('color','#000')
		$('.plan_one').css('background-color','#fff')
		$('.plan_two a').css('color','#000')
		$('.plan_two').css('background-color','#fff')
		$('.plan_four a').css('color','#000')
		$('.plan_four').css('background-color','#fff')
		
			
	}
	function plan4(){
		$('.mod-home-travel').css('display','none');
		$('.mod-home-travel_two').css('display','none');
		$('.mod-home-travel_three').css('display','none');
		$('.mod-home-travel_four').css('display','block');
		$('.plan_four a').css('color','#fff')
		$('.plan_four').css('background-color','#00add1')
		$('.plan_one a').css('color','#000')
		$('.plan_one').css('background-color','#fff')
		$('.plan_two a').css('color','#000')
		$('.plan_two').css('background-color','#fff')
		$('.plan_three a').css('color','#000')
		$('.plan_three').css('background-color','#fff')
		
	}
	function plan5(){
		$('.mod-home-travel-front').css('display','block');
		$('.mod-home-travel-front-two').css('display','none');
		$('.mod-home-travel-front-three').css('display','none');
		$('.mod-home-travel-front-four').css('display','none');
		$('.mod-home-travel-front-five').css('display','none');
		$('.plan_five a').css('color','#fff')
		$('.plan_five').css('background-color','#00add1')
		$('.plan_nine a').css('color','#000')
		$('.plan_nine').css('background-color','#fff')
		$('.plan_six a').css('color','#000')
		$('.plan_six').css('background-color','#fff')
		$('.plan_seven a').css('color','#000')
		$('.plan_seven').css('background-color','#fff')
		$('.plan_eight a').css('color','#000')
		$('.plan_eight').css('background-color','#fff')
	}
	function plan6(){
		$('.mod-home-travel-front').css('display','none');
		$('.mod-home-travel-front-two').css('display','block');
		$('.mod-home-travel-front-three').css('display','none');
		$('.mod-home-travel-front-four').css('display','none');
		$('.mod-home-travel-front-five').css('display','none');
		$(event.target).prev().removeClass('plan_one');
		$('.plan_six a').css('color','#fff')
		$('.plan_six').css('background-color','#00add1')
		$('.plan_five a').css('color','#000')
		$('.plan_five').css('background-color','#fff')
		$('.plan_nine a').css('color','#000')
		$('.plan_nine').css('background-color','#fff')
		$('.plan_seven a').css('color','#000')
		$('.plan_seven').css('background-color','#fff')
		$('.plan_eight a').css('color','#000')
		$('.plan_eight').css('background-color','#fff')
	}
	function plan7(){
		$('.mod-home-travel-front').css('display','none');
		$('.mod-home-travel-front-two').css('display','none');
		$('.mod-home-travel-front-three').css('display','block');
		$('.mod-home-travel-front-four').css('display','none');
		$('.mod-home-travel-front-five').css('display','none');
		$('.plan_seven a').css('color','#fff')
		$('.plan_seven').css('background-color','#00add1')
		$('.plan_five a').css('color','#000')
		$('.plan_five').css('background-color','#fff')
		$('.plan_six a').css('color','#000')
		$('.plan_six').css('background-color','#fff')
		$('.plan_nine a').css('color','#000')
		$('.plan_nine').css('background-color','#fff')
		$('.plan_eight a').css('color','#000')
		$('.plan_eight').css('background-color','#fff')
	}
	function plan8(){
		$('.mod-home-travel-front').css('display','none');
		$('.mod-home-travel-front-two').css('display','none');
		$('.mod-home-travel-front-three').css('display','none');
		$('.mod-home-travel-front-four').css('display','block');
		$('.mod-home-travel-front-five').css('display','none');
		$('.plan_eight a').css('color','#fff')
		$('.plan_eight').css('background-color','#00add1')
		$('.plan_five a').css('color','#000')
		$('.plan_five').css('background-color','#fff')
		$('.plan_six a').css('color','#000')
		$('.plan_six').css('background-color','#fff')
		$('.plan_seven a').css('color','#000')
		$('.plan_seven').css('background-color','#fff')
		$('.plan_nine a').css('color','#000')
		$('.plan_nine').css('background-color','#fff')
	}
	function plan9(){
		$('.mod-home-travel-front').css('display','none');
		$('.mod-home-travel-front-two').css('display','none');
		$('.mod-home-travel-front-three').css('display','none');
		$('.mod-home-travel-front-four').css('display','none');
		$('.mod-home-travel-front-five').css('display','block');
		$('.plan_nine a').css('color','#fff')
		$('.plan_nine').css('background-color','#00add1')
		$('.plan_five a').css('color','#000')
		$('.plan_five').css('background-color','#fff')
		$('.plan_six a').css('color','#000')
		$('.plan_six').css('background-color','#fff')
		$('.plan_seven a').css('color','#000')
		$('.plan_seven').css('background-color','#fff')
		$('.plan_eight a').css('color','#000')
		$('.plan_eight').css('background-color','#fff')
	}
	//当鼠标移到图片会显示一张背景和文字
	function bg1(){
		$('.book-detail-bg-one').css('display','block')
		$('.book-detail-one').css('display','block')
		}
	function bgout1(){
		$('.book-detail-bg-one').css('display','none')
		$('.book-detail-one').css('display','none')
		}
		function bg2(){
		$('.book-detail-bg-two').css('display','block')
		$('.book-detail-two').css('display','block')
		}
	function bgout2(){
		$('.book-detail-bg-two').css('display','none')
		$('.book-detail-two').css('display','none')
		}
		function bg3(){
		$('.book-detail-bg-three').css('display','block')
		$('.book-detail-three').css('display','block')
		}
	function bgout3(){
		$('.book-detail-bg-three').css('display','none')
		$('.book-detail-three').css('display','none')
		}
		function bg4(){
		$('.book-detail-bg-four').css('display','block')
		$('.book-detail-four').css('display','block')
		}
	function bgout4(){
		$('.book-detail-bg-four').css('display','none')
		$('.book-detail-four').css('display','none')
		}
		function bg5(){
		$('.book-detail-bg-five').css('display','block')
		$('.book-detail-five').css('display','block')
		}
	function bgout5(){
		$('.book-detail-bg-five').css('display','none')
		$('.book-detail-five').css('display','none')
		}
		function bg6(){
		$('.book-detail-bg-six').css('display','block')
		$('.book-detail-six').css('display','block')
		}
	function bgout6(){
		$('.book-detail-bg-six').css('display','none')
		$('.book-detail-six').css('display','none')
		}
		function bg7(){
		$('.book-detail-bg-seven').css('display','block')
		$('.book-detail-seven').css('display','block')
		}
	function bgout7(){
		$('.book-detail-bg-seven').css('display','none')
		$('.book-detail-seven').css('display','none')
		}
		function bg8(){
		$('.book-detail-bg-eight').css('display','block')
		$('.book-detail-eight').css('display','block')
		}
	function bgout8(){
		$('.book-detail-bg-eight').css('display','none')
		$('.book-detail-eight').css('display','none')
		}
		function bg9(){
		$('.book-detail-bg-niine').css('display','block')
		$('.book-detail-nine').css('display','block')
		}
	function bgout9(){
		$('.book-detail-bg-nine').css('display','none')
		$('.book-detail-nine').css('display','none')
		}
		function bg11(){
		$('.book-detail-bg-eleven').css('display','block')
		$('.book-detail-eleven').css('display','block')
		}
	function bgout11(){
		$('.book-detail-bg-eleven').css('display','none')
		$('.book-detail-eleven').css('display','none')
		}
		function bg12(){
		$('.book-detail-bg-twelve').css('display','block')
		$('.book-detail-twelve').css('display','block')
		}
	function bgout12(){
		$('.book-detail-bg-twelve').css('display','none')
		$('.book-detail-twelve').css('display','none')
		}
		function bg13(){
		$('.book-detail-bg-thirteen').css('display','block')
		$('.book-detail-thirteen').css('display','block')
		}
	function bgout13(){
		$('.book-detail-bg-thirteen').css('display','none')
		$('.book-detail-thirteen').css('display','none')
		}
		function bg14(){
		$('.book-detail-bg-fourteen').css('display','block')
		$('.book-detail-fourteen').css('display','block')
		}
	function bgout14(){
		$('.book-detail-bg-fourteen').css('display','none')
		$('.book-detail-fourteen').css('display','none')
		}
		function bg15(){
		$('.book-detail-bg-fiveteen').css('display','block')
		$('.book-detail-fiveteen').css('display','block')
		}
	function bgout15(){
		$('.book-detail-bg-fiveteen').css('display','none')
		$('.book-detail-fiveteen').css('display','none')
		}
	function bg10(){
		$('.book-detail-bg-ten').css('display','block')
		$('.book-detail-ten').css('display','block')
		}
	function bgout10(){
		$('.book-detail-bg-ten').css('display','none')
		$('.book-detail-ten').css('display','none')
		}	