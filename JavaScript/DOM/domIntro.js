console.log("Hi from JS");
console.log(window);
console.log(window.history);
console.log(window.navigator);
console.log(window.screen.height);

// ----------DOM-------
console.log("-----------------------");
console.log(window.document);

// document.getElementById("i1").innerHTML = "Stop laughing";
document.getElementById("i1").style.color = "red";
// document.getElementById();
// document.getElementsByClassName();
// document.querySelector();
// document.querySelectorAll();

let elements = document.getElementsByClassName("div1");
// document.getElementsByClassName returns an  HTMLCollection of Element objects, which is like an array.
console.log(elements);

// elements[1].style.color = "yellow";
// elements[2].style.color = "yellow";
// elements[3].style.color = "yellow";
// elements[4].style.color = "yellow";
// elements[5].style.color = "yellow";

for (let i = 0; i <= 5; i++) {
  if (i % 2 == 0) {
    elements[i].style.color = "yellow";
  } else {
    elements[i].style.color = "red";
  }
}

document.querySelector("#i1").innerHTML = "Text added by query selector";
document.querySelector(".div1").innerHTML = "Text added by class name";
