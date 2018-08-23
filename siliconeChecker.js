// ==UserScript==
// @name         Silicone Checker
// @namespace    http://tampermonkey.net/
// @version      0.11
// @description  check for ingredients including the suffix 'methicone' on the Ulta website
// @author       github.com/lshapz
// @match        https://www.ulta.com/*
// @license      MIT
// ==/UserScript==

let ingredientParent = document.querySelectorAll('.ProductDetail__ingredients')
let nameDiv = document.querySelectorAll('.ProductMainSection__productName')

let interval = setInterval(()=>{
    console.log(interval)
    if (ingredientParent.length >= 1) {
       clearInterval(interval)
       check()
    } else if (nameDiv.length >= 1) {
      clearInterval(interval)
      nameDiv[0].setAttribute('style', 'background-color:#fdd');
    }
}, 500)


function check(){
     var ingredientsDiv = document.querySelectorAll('.ProductDetail__ingredients .ProductDetail__productContent')[0];
     console.log(ingredientsDiv)
     if (ingredientsDiv.innerText.includes('methicone')) {
         ingredientsDiv.classList.add('in');
         ingredientsDiv.setAttribute('style', 'height:auto!important;background-color:red;');
         nameDiv[0].setAttribute('style', 'background-color:red');
     }
}

