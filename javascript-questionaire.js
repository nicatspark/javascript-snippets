
// What is an array?


































// What is an object?


































// What is a Map?


































// What is a function?


































// Is a string an object?


































// How can we create an object?


































// a) Is this valid code?

function add(a, b) {
    b = b ?? a;
    return a + square(b)

    function square(b) {
        return b*b
    }
}


// b) Would any of this lines work?

console.log(square(5))
console.log(add.square(5))
console.log(add().square(5))
console.log(add(5).square(5))



















// c) is there a better way of refactoring first line in function?

function add(a, b) {
    b = b ?? a; // <- this ?
    return a + square(b)

    function square(b) {
        return b*b
    }
}































// Would it be valid we removed b in the inner argument?

function add(a, b) {
    return a + square()

    function square() { // <- b removed, ok ?
        return b*b
    }
}

































// What does "hoisting" mean in a javascript context?


































// Is there a difference between these two functions?

function add() {
    return a+b
}

const add = (a, b) => a + b



































// What does the console.log return?
function getStarWarsCharacter() {
  return 
    {
        character: 'Chewbacka',
        cast: 'John Doe',
    }
}

console.log(getStarWarsCharacter())


































//-----------------------------------------------------
// What does myVar contain on each line?
const myVar = document.getElementById('app')
const myVar = !document.getElementById('app')
const myVar = !!document.getElementById('app')


































// What does the below lines do?

const myVar = !!document.getElementById('app')
const result = myVar || 'Some text'


































// How to add selected class

<div class="todo">First todo</div>
<div class="todo">Second todo</div>
<div class="todo selected">Third todo</div>

function setFirstToSelected(){
    const todo = document.querySelector('.todo');
    ...?
}
setFirstToSelected()


































// Finish function

<div class="todo">First todo</div>
<div class="todo">Second todo</div>
<div class="todo selected">Third todo</div>

function clearAllPreviouslySelected(){
    ...?
}

function setFirstToSelected(){
    ...?
}

clearAllPreviouslySelected()
setFirstToSelected()


































// What does this do?

let x;

(async function () {
    const result = await (
      await fetch('https://jsonplaceholder.typicode.com/todos')
    ).json();
    x = result.slice(0, 10);
  })();