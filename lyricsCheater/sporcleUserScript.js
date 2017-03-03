// ==UserScript==
// @name         Sporcle Lyrics Quiz Semi-Cheater
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  automatically populates a lyrics quiz on sporcle with 87 common words
// @author       lshapz
// @match        http://*/*
// @grant        none
// ==/UserScript==
if (document.querySelectorAll("a[href='/games/subcategory/lyrics']") && document.getElementById('gameinput')){


    window.addEventListener("onload",load);
    window.addEventListener("load",load,true);

 }

 function load(){
     sporcle();
 }


function sporcle(){
const words = ["the", "a", "and", "I", "is", "was", "am", "were", "are", "arent", "werent", "love", "Im", "Id", "Ill", "Ive", "You", "Your", "Youre", "Youve", "Youd", "He", "Her", "She", "Him", "They", "Theyd", "Theyll", "Theyve", "Their", "We", "Us", "Our", "Me", "My", "Mine", "This", "That", "Here", "There", "Who", "What", "Where", "When", "Why", "How", "in", "on", "if", "of", "off", "or", "for", "from", "to", "go", "get", "got", "with", "out", "without", "over", "under", "up", "down", "like", "as", "at", "an", "know", "see", "seen", "been", "do", "dont", "can", "cant", "will", "wont", "other", "not", "well", "just", "myself", "all", "it", "its"];


words.forEach(word=>{
  setTimeout(3000);
  var input =  document.getElementById('gameinput');
  input.value = word;
  var evt = document.createEvent("KeyboardEvent");
  evt.initKeyboardEvent ("keyup", true, true, window,
                false, false, false, false,
                32, 32); 

  input.dispatchEvent(evt);

});}


//https://greasyfork.org/en/scripts/24883-sporcle-lyrics-quiz-semi-cheater