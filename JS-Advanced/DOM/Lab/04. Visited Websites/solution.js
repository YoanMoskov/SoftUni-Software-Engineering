function solve() {
  let linkElements = document.querySelectorAll('.link-1 > a')
  for (const linkElement of linkElements) {
    linkElement.addEventListener('click', onClickAction)
    function onClickAction(e) {
      let parent = linkElement.parentNode;
      let visitedChild = parent.childNodes[3];
      let count = Number(visitedChild.innerHTML.split(' ')[1]) + 1;
      visitedChild.innerHTML = `visited ${count} times`;
    }
  }
}