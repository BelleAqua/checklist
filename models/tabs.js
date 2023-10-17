/** @format */

function openTab(event, id) {
	const tabs = document.getElementsByClassName('tab');
	const components = document.getElementsByClassName('component');

	const tab = document.getElementById(id);

	for (const component of components) {
		component.classList.remove('tab-active');
	}

	for (const tab of tabs) {
		tab.classList.remove('active');
	}

	event.target.classList.add('tab-active');

	tab.classList.add('active');
}

function openList(event, id) {
	const tabs = document.getElementsByClassName('tabcontent');
	const components = document.getElementsByClassName('tabbutton');

	const tab = document.getElementById(id);

	for (const component of components) {
		component.classList.remove('tab-active');
	}

	for (const tab of tabs) {
		tab.classList.remove('active');
	}

	event.target.classList.add('tab-active');

	tab.classList.add('active');
}

document.addEventListener('click', (event) => {
	const list = event.target.classList;

	if (!list.contains('checkbox')) return;

	if (!list.contains('checked')) list.add('checked');
	else list.remove('checked');
});

function reset() {
	const elements = document.getElementsByClassName('checkbox');

	for (const element of elements) {
		element.classList.remove('checked');
	}
}
