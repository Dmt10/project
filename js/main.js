window.onload = init;

function init(){
		var el = document.getElementsByClassName('str');
		for(var i =0; i < el.length; i++) {
			el[i].onmouseover = function(){this.style="border-color: #0f6ecd"}
			el[i].onmouseleave = function(){this.style="border-color:  #a30015 "}
		 }
		 var tel = document.getElementsByClassName('tel')[0];
		 tel.onmouseover = function(){this.style="border-color: #0f6ecd; color:#0f6ecd "}
		 tel.onmouseleave = function(){this.style="border-color:  #a30015; color: #a30015 "}
		 tel.onclick = function(){this.innerText='+7(978)-000-00-00';}
			document.getElementsByClassName('imgs')[0].style.marginLeft="0px";
		var i = 1, int;

			 var el=document.getElementsByClassName('imgs')[0];
			int = setInterval(function(){
			 if(parseInt(el.style.marginLeft) >= -document.getElementsByClassName('imgs')[0].getElementsByTagName('img')[0].width) {
				el.style.marginLeft = (-i + parseInt(el.style.marginLeft)) + "px";
			} else {
				el.style.marginLeft = "0px";
				var child = el.getElementsByTagName('img')[0];
				var oldChild = el.removeChild(child);
				el.appendChild(oldChild);
			}
			
			},10);
			$('.container').css({'overflow':'hidden'});
			$('.line').eq(0).css({'margin-left':'-5000px'}).delay(1000).animate({ 'margin-left': '0px'}, 1000);
			$('.line').eq(1).css({'margin-left':'5000px'}).delay(1500).animate({ 'margin-left': '0px'}, 1000);
			$('.line').eq(2).css({'margin-left':'-5000px'}).delay(2000).animate({ 'margin-left': '0px'}, 1000);
			//jq
			
			
			
}