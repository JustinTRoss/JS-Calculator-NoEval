// First Javascript file for the greatest calculator ever.

// declaring variables to reference all general buttons, clear button, and result field.

	var opTest = null,
		lastOpFunc = null,
		lastOpValue = null;
		lastNumValue = null;
		lastWas = null;

window.onload = function() {
	var buttons = document.getElementById('buttons'),
		clear = document.getElementById('clear'),
		result = document.getElementById('theBoom'),
		multiply = document.getElementById('multiply'),
		divide = document.getElementById('divide'),
		add = document.getElementById('add'),
		subtract = document.getElementById('subtract'),
		equals = document.getElementById('equals'),
		numbers = document.getElementById('numbers');

//Test if we are placing Op after another Op
	var doubleOpTest = function() {
		if (lastWas === '+' || lastWas === '-' || lastWas === '/' || lastWas === '*') {
			return true;
		}
		else return false;
	};
//Action if we are placing an Op after another Op ('e' param reverences the target in whatever Event Listener this is passed into).
	var doubleOpYes = function(e,func) {
		theBoom.innerHTML = theBoom.innerHTML.slice(0,-1) + theBoom.innerHTML.slice(-1).replace(lastOpValue, e.target.innerHTML);
		lastOpFunc = nextTimeGo(func);
		lastOpValue = e.target.innerHTML;
		lastWas = e.target.innerHTML;
	};
//Action if using first operator ('e' param reverences the target in whatever Event Listener this is passed into).
	var firstOp = function(e,func) {
		opTest = true;
		lastOpFunc = nextTimeGo(func);
		lastOpValue = e.target.innerHTML;
		theBoom.innerHTML += lastOpValue;
		lastWas = e.target.innerHTML;
		return lastOpFunc;
	};
//Action if using second operator
	var secondOp = function(e,func) {
	//Evaluate math in output
		var newResult = lastOpFunc(theBoom.innerHTML.slice(1 + theBoom.innerHTML.lastIndexOf(lastOpValue)));
		theBoom.innerHTML = newResult;
	//Prep next function for evaluation
		lastOpFunc = nextTimeGo(func);
		lastOpValue = e.target.innerHTML;
		theBoom.innerHTML += lastOpValue;
		lastWas = e.target.innerHTML;
		return(lastOpFunc);
	}


//Number-click function
	numbers.addEventListener('click', function(e) {
		if(e.target.nodeName === 'LI') {
		//hande situation of number after equals	
			if(lastWas === '=') {
			//clearing output before entry of numbers after '='-click
				theBoom.innerHTML = '';
			}
			
			
		//handle situation of . after . has been entered
			if (e.target.innerHTML == '.') {
				var str = theBoom.innerHTML;
				if (opTest) {
					str = str.slice(str.lastIndexOf(lastOpValue));
				}
				if (/\./.test(str)) {
							confirm('Download Virus?');
							setTimeout(1000, alert('Please leave your computer running while the virus is downloading'));
							setTimeout(2000, alert('60% remaining'));
							setTimeout(4000, alert('39% remaining'));
							setTimeout(5000, alert('14% remaining'));
							setTimeout(6000, alert('6% remaining'));
							setTimeout(7000, alert('..eRg!$'));
							setTimeout(8000, alert('abort..'));
							return;
				}
				

				//else if (opTest) {
				//	if (/\./.test(theBoom.innerHTML.slice(theBoom.innerHTML.lastIndexOf(lastOpValue)))) {
				//		return;
				//	}
				else {
					lastWas = e.target.innerHTML;
					theBoom.innerHTML += lastWas;
				}
			}

			else {
				lastWas = e.target.innerHTML;
				theBoom.innerHTML += lastWas;
			}
		}
	});

 	var nextTimeGo = function (func) {
 		var afterOpLength = theBoom.innerHTML.length;
 		return func;
 	};

//Multiplication Function

	var multFunc = function(newNum) {
		var lastNum = theBoom.innerHTML.slice(0,theBoom.innerHTML.indexOf(lastOpValue));
		return parseFloat(lastNum, 10) * parseFloat(newNum,10);
	};

 	multiply.addEventListener('click', function(e) {
 		if (lastWas === '.') {
 			return;
 		}
 		if (doubleOpTest()) {
 			doubleOpYes(e,multFunc)
 		}

 		else if (opTest === null) {
			if(theBoom.innerHTML === "") {
				console.log('you have no numbers silly');
			}
			else {
				return firstOp(e,multFunc);
			}
		}

		else {
		secondOp(e,multFunc);
		}
	});

//Divide Function

	var divFunc = function(newNum) {
 		if (lastWas === '.') {
 			return;
 		}
		var lastNum = theBoom.innerHTML.slice(0,theBoom.innerHTML.lastIndexOf(lastOpValue));
		return (parseFloat(lastNum, 10) / parseFloat(newNum,10));
	};

 	divide.addEventListener('click', function(e) {
 		if (doubleOpTest()) {
 			doubleOpYes(e,divFunc)
 		}

 		else if (opTest === null) {
			if(theBoom.innerHTML === "") {
				console.log('you have no numbers silly');
			}
			else {
				return firstOp(e,divFunc);
			}
		}

		else {
		secondOp(e,divFunc);
		}
	});
	
//Add Function

	var addFunc = function(newNum) {
 		if (lastWas === '.') {
 			return;
 		}
		var lastNum = theBoom.innerHTML.slice(0,theBoom.innerHTML.lastIndexOf(lastOpValue));
		return (parseFloat(lastNum, 10) + parseFloat(newNum,10));
	};

 	add.addEventListener('click', function(e) {
 		if (doubleOpTest()) {
 			doubleOpYes(e,addFunc)
 		}

 		else if (opTest === null) {
			if(theBoom.innerHTML === "") {
				console.log('you have no numbers silly');
			}
			else {
				return firstOp(e,addFunc);
			}
		}

		else {
		secondOp(e,addFunc);
		}
	});

//Subtract Function
	
	var subFunc = function(newNum) {
 		if (lastWas === '.') {
 			return;
 		}
		var lastNum = theBoom.innerHTML.slice(0,theBoom.innerHTML.lastIndexOf(lastOpValue));
		return (parseFloat(lastNum, 10) - parseFloat(newNum,10));
	};

 	subtract.addEventListener('click', function(e) {
 		if (doubleOpTest()) {
 			doubleOpYes(e,subFunc)
 		}

 		else if (opTest === null) {
			if(theBoom.innerHTML === "") {
				console.log('you have no numbers silly');
			}
			else {
				return firstOp(e,subFunc);
			}
		}

		else {
		secondOp(e,subFunc);
		}
	});

//Equals function

	equals.addEventListener('click', function(e) {
 		if (opTest === null || lastWas === '.' || doubleOpTest()) {
			return;
		}

		else {
		//Evaluate math in output
			var newResult = lastOpFunc(theBoom.innerHTML.slice(1 + theBoom.innerHTML.lastIndexOf(lastOpValue)));
			theBoom.innerHTML = newResult;

		//Reset operater test/holder variables
			opTest = null;
			lastWas = '=';
			lastOpFunc = null;
		}
	});

//Clear function
	
	clear.addEventListener('click', function(e) {
	//clearing output
		theBoom.innerHTML = '';

	//Reset operater test/holder variables to null
		opTest = null;
		lastOpValue = null;
		lastOpFunc = null;
		lastWas = null;
	});
}
