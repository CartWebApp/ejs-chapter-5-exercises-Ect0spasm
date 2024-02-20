require('./includes/scripts.js') // include the scripts used by the chapter

function dominantDirection(text) {
  let tally = countBy(text, characters => {
    let script = characterScript(characters.codePointAt(0));
    return script ? script.direction : "none";
  }
    ).filter(({name}) => name != "none");
    
    if (tally.length == 0) return "ltr";
    return tally.reduce((a, b) => a.count > b.count ? a : b).name;
    // Your code here.
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl