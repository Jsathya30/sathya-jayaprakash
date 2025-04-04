
var addToCart = document.getElementsByClassName('add-btn');
var addProduct = document.getElementById('itemCount');
let count=0;

function countItem(){
   count+=1;
   document.getElementById('itemCount').innerHTML = count;
   console.log(count);
}

function toggleDetails(index){
   let details = document.querySelectorAll('.detailsCard');
   // details[index].style.display = details[index].style.display === 'block' ? 'none' : 'block';
   details[index].style.display = 'block';
}

const removeProductCard = document.getElementsByClassName('removeCard');
const detailsCards = document.getElementsByClassName('detailsCard');
for (let i = 0; i < removeProductCard.length; i++) {
   removeProductCard[i].addEventListener('click', () => {
       for (let j = 0; j < detailsCards.length; j++) {
           detailsCards[j].style.display = 'none'; // Hide all detail cards
       }
   });
}



