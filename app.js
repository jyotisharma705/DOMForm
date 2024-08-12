const form = document.querySelector('#form');
const input = document.querySelector('#cat-name');
const list = document.querySelector('#cat-list');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const catName = input.value;
    const newLi = document.createElement("LI");

    newLi.innerText = catName;
    console.log(newLi);
    list.append(newLi);
    input.value = "";
    //form.reset();

})

list.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.removeEventListener();
})