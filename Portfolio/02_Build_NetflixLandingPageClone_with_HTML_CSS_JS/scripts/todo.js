const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

tabItems.forEach(item => item.addEventListener('click', selectItem));

// Select tab content item
function selectItem(event) {

  // remove all border of all items, before adding it to the target item
  removeAllBorders();
  // and remove all content of all tab content
  removeAllShows();

  // Add border to current tab
  this.classList.add('tab-border');

  // add the class "show" to the target item, to display the content of that item
  // Grab content item from the DOM

  // Step 1: take the id from the Tab item
  // console.log(this.id); 
  // Ex: -> tab-1 (when click tab-item 1)

  const tabContentItem = document.querySelector(`#${this.id}-content`);
  console.log(tabContentItem);
  tabContentItem.classList.add('show');
  console.log(tabContentItem);
}

function removeAllBorders() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeAllShows() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}