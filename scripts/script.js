let count = 0;

function paging() {
	let title = document.getElementById('title-text');
	let text = document.getElementById('text');
	let react = document.getElementById('react-img');
	let apple = document.getElementById('apple-img');
	let android = document.getElementById('android-img');


	if ( count >= 0 ) {
		if (count === 0) {
			title.style.opacity = ("1");
			title.style.color = ("#000");
			title.style.transform = ("translateX(0%)");
			title.style.transition = ("1.1s");
			count ++;
		} else if (count === 1){
			text.style.transition = ("2s");
			text.style.opacity = ("1");
			count ++;
		} else if (count === 2){
			react.style.transform = ("translateX(0%)");
			react.style.transition = ("1.1s");
			count ++;
		} else if (count === 3){
			apple.style.transition = ("2s");
			apple.style.opacity = ("1");
			count ++;
		} else if (count === 4){
			android.style.transform = ("translateX(0%)");
			android.style.transition = ("1.1s");
			count ++;
		} else {
			count = -1;
		}
	}
	if (count < 0) {
		if (count === -5) {
			title.style.opacity = ("1");
			title.style.color = ("#000");
			title.style.transform = ("translateX(-60%)");
			title.style.transition = ("1.1s");
			count = 0;
		} else if (count === -4){
			text.style.transition = ("1.2s");
			text.style.opacity = ("0");
			count --;
		} else if (count === -3){
			react.style.transform = ("translateY(-100%) rotate(360deg)");
			react.style.transition = ("1.1s");
			count --;
		} else if (count === -2){
			apple.style.transition = ("1.2s");
			apple.style.opacity = ("0");
			count --;
		} else if (count === -1){
			android.style.transform = ("translateX(150%) rotate(180deg)");
			android.style.transition = ("1.1s");
			count --;
		} 
	}
};