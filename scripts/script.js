let submitBtn = document.getElementById("submit-btn");
let ordersSection = document.getElementById("orders");
let orders = [
    { type: "Aesthetic", meal: "Halal", location: "Jizzakh", desire: "Mountains", status: "used" },
    { type: "Minimalist", meal: "Normal", location: "Tashkent City", desire: "Sun", status: "confirmed" }
]; // an array for orders, the ones inside the array will be added to the dom


// a function which creates an element in the DOM, namely, a row for an order 
addHTML = () => {
    ordersSection.innerHTML = "";

    for (let i = 0; i < orders.length; i++) {
        let insertOrder = document.createElement("div");   //creating a div
        insertOrder.classList.add("table", orders[i].status);   // removing the old elements
        insertOrder.innerHTML =
            "<span>" + (i + 1) + "</span>" +   // adding 1 because indexing starts from 0
            "<span>" + orders[i].type + "</span>" +
            "<span>" + orders[i].meal + "</span>" +
            "<span>" + orders[i].location + "</span>" +
            "<span>" + orders[i].desire + "</span>" +
            "<span>" + orders[i].status + "</span>";   // adding the inforamtion to the row
        ordersSection.appendChild(insertOrder);   // appending to DOM
    }
}


// a function which receives data from the DOM
takeOrder = () => {
    // assigning the values to variables
    let type = document.querySelector('input[name="type"]:checked').value;
    let meal = document.querySelector('input[name="meal"]:checked').value;
    let location = document.querySelector('input[name="location"]:checked').value;
    let desire = document.querySelector('input[name="desire"]:checked').value;

    // pushing the object to the array
    orders.push({
        type: type,
        meal: meal,
        location: location,
        desire: desire,
        status: "pending"
    });

    addHTML();  // recalling the function that generates elements on the DOM
}

submitBtn.addEventListener("click", takeOrder)  // adding an event listener to submit button on order page and it calls takeOrder function

addHTML();  // calling the function that generates elements on the DOM

