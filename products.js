// Create an array to hold your products.
var myProducts = [];

var product0 = {
  image: "<img class='beer-pic' src='images/Porter.jpg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "This is a dark style of beer developed in London from well-hopped beers made from brown malt. One sip and you'll swear you've been Thunderstruck.",
  price: 12.00,
  URL: "error404.html"
}
var product1 = {
  image: "<img class='beer-pic' src='images/Porter.jpg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "This is a dark style of beer developed in London from well-hopped beers made from brown malt. One sip and you'll swear you've been Thunderstruck.",
  price: 12.00,
  URL: "error404.html"
}
var product2 = {
  image: "<img class='beer-pic' src='images/Porter.jpg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "This is a dark style of beer developed in London from well-hopped beers made from brown malt. One sip and you'll swear you've been Thunderstruck.",
  price: 12.00,
  URL: "error404.html"
}
var product3 = {
  image: "<img class='beer-pic' src='images/Porter.jpg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "This is a dark style of beer developed in London from well-hopped beers made from brown malt. One sip and you'll swear you've been Thunderstruck.",
  price: 12.00,
  URL: "error404.html"
}
var product4 = {
  image: "<img class='beer-pic' src='images/Porter.jpg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "This is a dark style of beer developed in London from well-hopped beers made from brown malt. One sip and you'll swear you've been Thunderstruck.",
  price: 12.00,
  URL: "error404.html"
}
var product5 = {
  image: "<img class='beer-pic' src='images/Porter.jpg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "This is a dark style of beer developed in London from well-hopped beers made from brown malt. One sip and you'll swear you've been Thunderstruck.",
  price: 12.00,
  URL: "error404.html"
}
var product6 = {
  image: "<img class='beer-pic' src='images/Porter.jpg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "This is a dark style of beer developed in London from well-hopped beers made from brown malt. One sip and you'll swear you've been Thunderstruck.",
  price: 12.00,
  URL: "error404.html"
}
var product7 = {
  image: "<img class='beer-pic' src='images/Porter.jpg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "This is a dark style of beer developed in London from well-hopped beers made from brown malt. One sip and you'll swear you've been Thunderstruck.",
  price: 12.00,
  URL: "error404.html"
}

// FILL THE ARRAY //
myProducts.push(product0);
myProducts.push(product1);
myProducts.push(product2);
myProducts.push(product3);
myProducts.push(product4);
myProducts.push(product5);
myProducts.push(product6);
myProducts.push(product7);


//-- Get a reference to the button element in the DOM --//
var button = document.getElementById("addition");


document.getElementById("reamInput0").value = 0;
document.getElementById("reamInput1").value = 0;
document.getElementById("reamInput2").value = 0;
document.getElementById("reamInput3").value = 0;
document.getElementById("reamInput4").value = 0;
document.getElementById("reamInput5").value = 0;
document.getElementById("reamInput6").value = 0;
document.getElementById("reamInput7").value = 0;



function determineConverter (clickEvent) {
  
  //-- DEFINE VARS --//
  //-- PRODUCT0 --//
  var reamInput0 = document.getElementById("reamInput0").value;
  console.log("input", reamInput0);
  reamInput0Price = myProducts[0].price * reamInput0;
  console.log("price:", reamInput0Price);

  var reamInput1 = document.getElementById("reamInput1").value;
  console.log("input", reamInput1);
  reamInput1Price = myProducts[0].price * reamInput1;
  console.log("price:", reamInput1Price);

  var reamInput2 = document.getElementById("reamInput2").value;
  console.log("input", reamInput2);
  reamInput2Price = myProducts[0].price * reamInput2;
  console.log("price:", reamInput2Price);

  var reamInput3 = document.getElementById("reamInput3").value;
  console.log("input", reamInput3);
  reamInput3Price = myProducts[0].price * reamInput3;
  console.log("price:", reamInput3Price);

  var reamInput4 = document.getElementById("reamInput4").value;
  console.log("input", reamInput4);
  reamInput4Price = myProducts[0].price * reamInput4;
  console.log("price:", reamInput4Price);

  var reamInput5 = document.getElementById("reamInput5").value;
  console.log("input", reamInput5);
  reamInput5Price = myProducts[0].price * reamInput5;
  console.log("price:", reamInput5Price);

  var reamInput6 = document.getElementById("reamInput6").value;
  console.log("input", reamInput6);
  reamInput6Price = myProducts[0].price * reamInput6;
  console.log("price:", reamInput6Price);

  var reamInput7 = document.getElementById("reamInput7").value;
  console.log("input", reamInput7);
  reamInput7Price = myProducts[0].price * reamInput7;
  console.log("price:", reamInput7Price);

  finalTotal = reamInput0Price + reamInput1Price + reamInput2Price + reamInput3Price + reamInput4Price + reamInput5Price + reamInput6Price + reamInput7Price;
  console.log("finalTotal:", finalTotal);

  var finalTotalOutPut = document.getElementById("total");
  finalTotalOutPut.innerHTML = "$" + finalTotal + ".00";
};


//-- EVENT LISTENER --//
button.addEventListener("click", determineConverter);


// Assign a function to be executed when the button is clicked //

//-- CLEAR BUTTON --//
document.getElementById("clear").onclick = function () {
  document.getElementById("total").innerHTML = "";
  
  document.getElementById("reamInput0").value = 0;
  document.getElementById("reamInput1").value = 0;
  document.getElementById("reamInput2").value = 0;
  document.getElementById("reamInput3").value = 0;
  document.getElementById("reamInput4").value = 0;
  document.getElementById("reamInput5").value = 0;
  document.getElementById("reamInput6").value = 0;
  document.getElementById("reamInput7").value = 0;
};











