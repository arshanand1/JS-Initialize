# Projects related to markdown

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1 solution

```javascript
console.log("arsh")
const buttons = document.querySelectorAll('.button');
document.querySelector('body');
// console.log(buttons);

// buttons ek node list hai toh nodelist ke saath mai forEach laga sakta hun

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      document.body.style.background = e.target.id;
    }
    if(e.target.id === 'blue'){
      document.body.style.background = e.target.id;
    }
    if(e.target.id === 'white'){
      document.body.style.background = e.target.id;
    }
    if(e.target.id === 'yellow'){
      document.body.style.background = e.target.id;
    }
    if(e.target.id === 'purple'){
      document.body.style.background = e.target.id;
    }
  });
});

```

## Project 2 solution

```javascript
const form = document.querySelector('form');
// this usecase will give you empty height
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid ${weight}`;
  }
  else{
    const bmi = (weight/(height*height/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```