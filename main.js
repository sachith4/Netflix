const tabItems = document.querySelectorAll('.tab-item'); /* Grabs all the classes with name tab-item as an array, we need to iterate through them*/
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');

    // Grab content item from DOM
    const tabContentItem = document.querySelectorAll(`#${this.id}-content`);// this.id gives tab-1,tab-2 or tab-3
    console.log(tabContentItem);
    //Add show class

    console.log(tabContentItem.classList);

} 

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem))/*For each 'item' in tabItems when it is clicked it calls function selectItem*/


