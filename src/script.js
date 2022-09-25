function random() {
    let heroes = {};
    let input = document.querySelectorAll('.images figure figcaption');
    let arr = Array.from(input);
    for (let index of arr) {
        let current = index.innerText;
        let figureStyle = index.parentElement.style.filter;
        if (figureStyle !== 'grayscale(1)') {
            heroes[current] = undefined;
        }
    }
    let keys = Object.keys(heroes);
    let randomHero = keys[Math.floor(Math.random() * keys.length)];
    alert(randomHero);
    removeFromPool(randomHero);
}

function removeFromPool(input) {
    input = document.getElementById(input)
    if (input.style.filter !== 'grayscale(1)') {
        input.style.filter = 'grayscale(1)';
    } else  {
        input.style.filter = '';
    }
}

function autoIDset () {
    let input = document.querySelectorAll('.images figure figcaption');
    let figcapArr = Array.from(input);
    for (let index of figcapArr) {
        let current = index.innerText;
        let parent = index.parentElement;
        parent.id = current
    }
}
function events() {
    let input = document.querySelectorAll('.images figure')
    console.log(input)
    for (i of input) {
       i.addEventListener('click', function() {
        removeFromPool(this.id);
       });
    }
}