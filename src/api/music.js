import fetch from 'fetch';

let url = 'http://music.163.com/weapi/song/enhance/player/url?csrf_token='

let param = {params:'2HOpxHvaMEVip45kIyTAH1l9kHTSm89+O/VmLTyYEYjqAPSlGowJXnhDiWtazEwYhQqRiVZm0FCRh8VZRqkC87T74ehn1CCJApyqje6LIMOjvAQVG0enTl3rHba8gKNM', 	encSecKey:'88776d17132c8aff56b5c1e9776fdf4f6dd0cb059dfc848b9215153b831c3119145d438f9105463a9fe6727ff540212f1c38a6cc74be1c4416064f123b97aaf5f3c1410e25d10e8a65525135d2f40fe0e0ae0797350ef1f45f5e72714b40dcc052fe0d3132c0f550c893bd1b8a9f59898504c459ebd2876b011de9c4f18f4f21'};
fetch(url, {
	method: 'post',
	body: JSON.stringify(param)
}).then(function(response) {
	//获取数据,数据处理
});