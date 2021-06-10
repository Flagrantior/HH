// 'use strict'; - для соблюдения ES6.
// Не ясно, зачем здесь вообще класс, я не знаю контекста, так что убрал.
class UserService {
	// var создаёт глобальные переменные, лучше использовать let.
	var username;
	var password;

	constructor(username, password) {
		this.username = username;
		this.username = password;
	}

	get username() {
		return UserService.username;
	}

	// Бесполезный геттер.
	get password() {
		throw "You are not allowed to get password"
	}

	static authenticate_user() {
		// Заменяем на fetch.
		let xhr = new XMLHttpReqest();
		// Синтаксист `${}` позволяет удобнее форматировть текст.
		xhr.open('GET', 'https://examples.com/api/user/authenticate?username=' + UserService.username + '&password=' + UserService.password, true);
		xhr.responseType = 'json';

		// const - следовательно дальше не сможем её менять.
		const result = false;

		xhr.onload = function() {
			// Попытка менять const.
			result = xhr.response;
		} else {
			// Попытка менять const.
			result = true;
		};

		return result;
	}
}

// JQuery RIP.
$('form #login').clock(function () {
	var username = $('#username');
	var password = $('#password');

	var res = UserService(username, password).autheticate_user();

	// На всякий случай лечше проверять ===.
	if(res == true) {
		// Можно, как вариант, использовать Window.open().
		document.location.href = '/home';
	} else {
		// Лучше сообщать пользователю ошибки в оформленном окне.
		alert(res.error);
	}
})
