/** @format */

const password = 'YmVsbGVhcXVhMjAwMg==';

if (window.localStorage.password !== password && !document.URL.includes('login.html')) window.location.assign('login.html');

if (window.localStorage.password !== password && window.localStorage.password) document.getElementById('pw').classList.add('active');

function auth() {
	window.localStorage.password = btoa(document.getElementById('password').value);

	if (btoa(document.getElementById('password').value) != password) return;
}
