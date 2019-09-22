
const tabContentItems = document.querySelectorAll('.tab-content-item');
console.log(tabContentItems);
const listTabs = document.querySelectorAll('.tab-item');

listTabs.forEach(tab => {
  tab.addEventListener('click', selectItem);
});

function selectItem(event) {
  // Step 1: remove all tab-border of all tabs
  // and show of tab-content-item
  removeTabBorder();
  removeAllShow();
  // Step 2: add tab-border to the target tab
  this.classList.add('tab-border');

  // add .show class to tab-1-content or 2 or 3
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}


function removeTabBorder() {
  listTabs.forEach(tab => 
    tab.classList.remove('tab-border')
  );
}

function removeAllShow() {
  tabContentItems.forEach(item => 
    item.classList.remove('show')
  );
}