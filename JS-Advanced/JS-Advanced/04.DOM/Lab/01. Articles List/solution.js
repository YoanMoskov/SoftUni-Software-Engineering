function createArticle() {
	let inputTitleEl = document.querySelector('#createTitle');
	let inputContentEl = document.querySelector('#createContent');
	let articlesListEl = document.querySelector('#articles');

	let title = document.createElement('h3');
	let content = document.createElement('p');
	let currArticle = document.createElement('article');

	if (inputTitleEl.value !== '' && inputContentEl.value !== '') {
		title.innerHTML = inputTitleEl.value;
		content.innerHTML = inputContentEl.value;
		currArticle.appendChild(title);
		currArticle.appendChild(content);
		articlesListEl.appendChild(currArticle);
		inputTitleEl.value = '';
		inputContentEl.value = '';
	}
}