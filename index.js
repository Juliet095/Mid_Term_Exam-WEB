//  SECTION C


// NO.1
function reverse_number(a){
    return parseInt(a.toString().split('').reverse().join(''));
  }
  console.log(reverse_number(1234));

// NO.2
function sum_of_all_even_numbers(array) {
    return array.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
  }
  
  console.log(sum_of_all_even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 

// NO.3
function product_or_sum(a, b) {
    return a === b ? a * b : a + b;
  }
  
  console.log(product_or_sum(4, 4)); 
  console.log(product_or_sum(4, 3)); 

//   NO.4
function isPalindrome(word) {
    return word === word.split("").reverse().join("");
  }
  
  console.log(isPalindrome("madam")); 
  console.log(isPalindrome("juliet")); 


// NO.5
let bucketList = [];

const itemInput = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');
const listBtn = document.getElementById('list-btn');
const deleteBtn = document.getElementById('delete-btn');
const listContainer = document.getElementById('list-container');

addBtn.addEventListener('click', addItem);
listBtn.addEventListener('click', listItems);
deleteBtn.addEventListener('click', deleteItem);

function addItem() {
    const item = itemInput.value.trim();
    if (item) {
        bucketList.push(item);
        itemInput.value = '';
    }
}

function listItems() {
    const listHtml = bucketList.map((item, index) => {
        return `<p>${index + 1}. ${item}</p>`;
    }).join('');
    listContainer.innerHTML = listHtml;
}

function deleteItem() {
    const index = prompt('Enter the item number to delete:');
    if (index) {
        const itemIndex = parseInt(index) - 1;
        if (itemIndex >= 0 && itemIndex < bucketList.length) {
            bucketList.splice(itemIndex, 1);
            listItems();
        }
    }
}

  