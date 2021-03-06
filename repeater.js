
var Repeater = {
	repeatString: function (string, count) {
		var newArray=[]; //Defined outside of for loop!  
		for (i=0; i<count; i++) {
			newArray.push(string);
		}
		return newArray.join(''); //returned outside of for loop!
	},

	repeatFunction: function (func, count) {
		var newArray=[];
		for (i=0; i<count; i++) {
			newArray.push(func(2,4));
		}
		return newArray.join('');

	},

	count: 0,

	repeatMore: function (string) {
		var newArray=[];
		this.count++;

		for (i=0; i<this.count; i++) {
			newArray.push(string);
		}
		return newArray;
	}
}

console.log(Repeater.repeatMore('dog'));
console.log(Repeater.repeatMore('house'));
console.log(Repeater.repeatMore('cat'));


