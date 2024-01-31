var swiper = new Swiper('.swiper', {
	breakpoints: {
		320: {
		  slidesPerView: 1.25,
		  spaceBetween: 10
		},
		640: {
		  slidesPerView: 2.25,
		  spaceBetween: 20
		},
		992: {
			slidesPerView: 3.25,
		  	spaceBetween: 20
		},
		1200: {
			slidesPerView: 4.25,
		  	spaceBetween: 30
		}
	  }
});

const palindrome = (str) => {
	const string = str.toLowerCase().replace(/[^0-9a-z]/gi, '').split('');
	for (let i = 0; i < string.length/2; i++) {
		if (string[i] !== string[string.length -1 -i]) {  
		return false;
		} 
	}
	return true;
}
console.log(palindrome('_level'));


const multiplyAll = arr => arr.reduce((a,b)=> a*b,1);
console.log(multiplyAll([1,2,3,4]));


const wordsToMarks = string => [...string].reduce((res, c) => res += c.charCodeAt() - 96, 0)
console.log(wordsToMarks('hello'));