const htmlEl = document.documentElement;
const bodyEl = document.body;
const headEl = document.head;
console.log(htmlEl);
console.log(bodyEl);
console.log(headEl);
const elInput = document.querySelector(`#name-input`);
console.log(elInput);
const someText = document.querySelectorAll(`span[id="name-output"]`);
const titleH1 = document.querySelectorAll(`body > h1`);
if (document.getElementById('elInput').value !== '') {
    titleH1 === this.value
} else {
    titleH1.innerText = "Anonymous";
}        