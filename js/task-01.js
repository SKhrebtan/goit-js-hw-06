const allItemsOfCategories = document.querySelectorAll('.item')
console.log(`Number of categories: ${allItemsOfCategories.length}`);

allItemsOfCategories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});