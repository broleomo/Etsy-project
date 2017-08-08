// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let average = 0;
  for (i = 0;i < data.length; i++) {
    average = average + data[i].price;
  }
  // return average.toFixed(2);
  // console.log(average);
  console.log("The average price is $" + (average / data.length).toFixed(2));
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  // let cheap = [];
  for (i = 0; i < data.length; i++){
    if (data[i].price >= 14.00 && data[i].price <= 18.00){
    console.log(data[i].title);
  }
  }
    // console.log(cheap);
  }


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let itemLookup = [];
  for (i = 0; i < data.length; i++){
  if (data[i].currency_code == "GBP"){
      itemLookup = data[i].title + " costs " + data[i].price + " pounds.";
  }
  }
  console.log(itemLookup);
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
// let woodItems = [];
for (let i = 0; i < data.length; i++){
      if (data[i].materials.includes("wood")){
        console.log(data[i].title + " is made of wood.");
      }
  // }
  // console.log(woodItems);
}
}

//
// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
for (let i = 0; i < data.length; i++) {
  if (data[i].materials.length >= 8) {
    console.log(`${data[i].title} has ${data[i].materials.length} materials`);

  for (let j = 0; j < data[i].materials.length; j++) {
    let manyItems = data[i].materials[j];
    console.log(`- ${manyItems}`);
      }
    }
  }
  }
//
//
//
// // 6: How many items were made by their sellers?
// // Answer:
function question6 () {
//   // Answer:
let items = 0;
for (let i = 0; i < data.length; i++) {
  if(data[i].who_made === "i_did"){
    items++;
}
  }
console.log(`${items} items were made by their sellers.`);
}
