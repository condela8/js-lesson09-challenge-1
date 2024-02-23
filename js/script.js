
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");

// text input box
const guestInput = document.querySelector(".add-guest input");

// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");

// span class for number of guests attending
const guestCount = document.querySelector(".attendance");

// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");


// invite button
const addGuestButton = document.querySelector(".invite");
addGuestButton.addEventListener("click", function(){
    const guests = guestInput.value;
    //console.log(guest);
    if(guests != " "){
        addToList(guests);
        updateGuestCount();
        clearInput();
        }
   
});
const clearInput = function(){
    guestInput.value = " ";
}
const addToList = function(guest) {
    const listItem = document.createElement("li");
        listItem.innerText = guest;
        guestList.append(listItem);

}
const  updateGuestCount = function(){
    const guest = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guest.length;
    if (guest.length===8){
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");

    }
}
//Select Assigned Items & Build an Array

const assignItems = function(){
    const potluckItems = ['Halloumi',
    'Melon Skewers',
    'Prosciutto Bruschetta',
    'Veggie Nori Rolls',
     'Stuffed Peppadews',
     '3-Cheese Tomato Tart',
     'Zucchini Noodles',
    'Couscous Salad',
     'potato salad',
    'Lemon Cream',
    'Pesto Pasta Salad',
    'Tangy Carrot Slaw',
];
//Select Elements & Loop Through the Array
const allGuests = document.querySelectorAll('.guest-list li'); 
for (let guest of allGuests){

    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];
     const listItem = document.createElement("li");
     listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
     assignedItems.append(listItem);
     potluckItems.splice(randomPotluckIndex, 1);
};
}
 //Add an Event Listener & Update PotluckItems Array
 assignButton.addEventListener("click", function(){
    assignItems();
    assignButton.disabled = true;
 });




