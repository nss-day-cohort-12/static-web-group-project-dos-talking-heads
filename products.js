// Create an array to hold your products.
var myProducts = [];

var product0 = {
  image: "<img class='pic0' src='images/paperimg0.png' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "Paper over, to patch up or attempt to conceal (a difference, disagreement, etc.) so as to preserve a friendship, present a unified opinion, etc.",
  price: 13.00,
  URL: "www.example.html"
}
var product1 = {
  image: "<img class='pic0' src='images/paperimg1.jpg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "And so Gomez, who on paper —an ex-Navy SEAL turned venture capitalist—looks like the perfect Republican, jumped in.",
  price: 2.00,
  URL: "www.example1.html"
}
var product2 = {
  image: "<img class='pic0' src='images/paperimg2.jpg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "A substance made from cellulose fibres derived from rags, wood, etc, often with other additives, and formed into flat thin sheets suitable for writing on.",
  price: 1.00,
  URL: "www.example2.html"
}
var product3 = {
  image: "<img class='pic0' src='images/paperimg3.jpg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "Meaning 'paper money' attested from 1722. As shortened form of newspaper, first attested 1640s. In plural, 'collection of papers to establish one's identity, credentials, etc.",
  price: 42.00,
  URL: "www.example3.html"
}
var product4 = {
  image: "<img class='pic0' src='images/paperimg4.jpg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "Material manufactured in thin sheets from the pulp of wood or other fibrous substances, used for writing, drawing, or printing on, or as wrapping material.",
  price: 225.00,
  URL: "www.example4.html"
}
var product5 = {
  image: "<img class='pic0' src='images/paperimg5.jpeg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "An essay or thesis, especially one read at an academic lecture or seminar or published in an academic journal.",
  price: 1.00,
  URL: "www.example5.html"
}
var product6 = {
  image: "<img class='pic0' src='images/paperimg6.jpeg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "A substance made from wood pulp, rags, straw, or other fibrous material, usually in thin sheets, used to bear writing or printing, for wrapping things, etc.",
  price: 12.00,
  URL: "www.example6.html"
}
var product7 = {
  image: "<img class='pic0' src='images/paperimg7.jpg' alt='' width='189px' height='200px'>",
  name: "White Paper",
  description: "The Dictionary of American Slang, Fourth Edition by Barbara Ann Kipfer, PhD. and Robert L. Chapman, Ph.D. Copyright (C) 2007 by HarperCollins Publishers.",
  price: 15.00,
  URL: "www.example7.html"
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
  reamInput1Price = myProducts[1].price * reamInput1;
  console.log("price:", reamInput1Price);

  var reamInput2 = document.getElementById("reamInput2").value;
  console.log("input", reamInput2);
  reamInput2Price = myProducts[2].price * reamInput2;
  console.log("price:", reamInput2Price);

  var reamInput3 = document.getElementById("reamInput3").value;
  console.log("input", reamInput3);
  reamInput3Price = myProducts[3].price * reamInput3;
  console.log("price:", reamInput3Price);

  var reamInput4 = document.getElementById("reamInput4").value;
  console.log("input", reamInput4);
  reamInput4Price = myProducts[4].price * reamInput4;
  console.log("price:", reamInput4Price);

  var reamInput5 = document.getElementById("reamInput5").value;
  console.log("input", reamInput5);
  reamInput5Price = myProducts[5].price * reamInput5;
  console.log("price:", reamInput5Price);

  var reamInput6 = document.getElementById("reamInput6").value;
  console.log("input", reamInput6);
  reamInput6Price = myProducts[6].price * reamInput6;
  console.log("price:", reamInput6Price);

  var reamInput7 = document.getElementById("reamInput7").value;
  console.log("input", reamInput7);
  reamInput7Price = myProducts[7].price * reamInput7;
  console.log("price:", reamInput7Price);

  finalTotal = reamInput0Price + reamInput1Price + reamInput2Price + reamInput3Price + reamInput4Price + reamInput5Price + reamInput6Price + reamInput7Price;
  console.log("finalTotal:", finalTotal);

  var finalTotalOutPut = document.getElementById("total");
  finalTotalOutPut.innerHTML = "$" + finalTotal + ".00";
};


//-- LOOP THROUGH THE ARRAY --//
for (var i = 0; i < myProducts.length; i++) {

  // IMAGE //
  var imgSelect = document.getElementsByClassName("img" + i);
  imgSelect[0].innerHTML = myProducts[i].image;

  // NAME //
  var nameSelect = document.getElementsByClassName("productName" + i);
  nameSelect[0].innerHTML = myProducts[i].name;
  
  // DESCRIPTION //
  var descriptionSelect = document.getElementsByClassName("productDescription" + i);
  descriptionSelect[0].innerHTML = myProducts[i].description;
  
  // PRICE //
  var productSelect = document.getElementsByClassName("productPrice" + i);
  productSelect[0].innerHTML = "$" + myProducts[i].price + ".00";

  // URL //
  var urlSelect = document.getElementsByClassName("productURL" + i);
  urlSelect[0].innerHTML = myProducts[i].URL;

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











