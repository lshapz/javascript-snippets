const words = ["the", "a", "and", "I", "Im", "Id", "Ill", "Ive", "You", "Your", "Youre", "Youve", "Youd", "He", "Her", "She", "Him", "They", "Theyd", "Theyll", "Theyve", "Their", "We", "Us", "Our", "Me", "My", "Mine", "This", "That", "Here", "There", "Who", "What", "Where", "When", "Why", "How", "in", "on", "if", "of", "off", "or", "for", "from", "to", "go", "get", "got", "with", "out", "without", "over", "under", "up", "down", "like", "as", "at", "an", "know", "see", "seen", "been", "do", "dont", "can", "cant", "will", "wont"] 


words.forEach(word=>{
  setTimeout(3000) 
  var input =  document.getElementById('gameinput')
  input.value = word
  var evt = document.createEvent("KeyboardEvent");
  evt.initKeyboardEvent ("keyup", true, true, window,
                false, false, false, false,
                32, 32); 

  input.dispatchEvent(evt)

});


