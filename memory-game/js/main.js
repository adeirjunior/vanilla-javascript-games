document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [{
            name: 'apple',
            img: 'images/apple.png'
        },
        {
            name: 'apple',
            img: 'images/apple.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'cat black',
            img: 'images/cat-black.png'
        },
        {
            name: 'cat black',
            img: 'images/cat-black.png'
        },
        {
            name: 'iron man',
            img: 'images/iron-man.png'
        },
        {
            name: 'iron man',
            img: 'images/iron-man.png'
        },
        {
            name: 'skull',
            img: 'images/skull.png'
        },
        {
            name: 'skull',
            img: 'images/skull.png'
        },
        {
            name: 'super man',
            img: 'images/super-man.jpg'
        },
        {
            name: 'super man',
            img: 'images/super-man.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const body = document.querySelector('body');
    const grid = document.querySelector('.grid');
    const life = document.querySelector('#life');
    const lifes = document.querySelector('#lifes');
    let hearts = 3;
    lifes.textContent = hearts;
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    const btn = document.createElement('button')
    btn.style.cursor = 'pointer'
    btn.addEventListener('click',()=> location.reload())
    btn.append('Restart')

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('data-id', i)
            card.setAttribute('src',cardArray[i].img)
            grid.appendChild(card)
            setTimeout(()=>{
                card.setAttribute('class', 'handle')
                card.setAttribute('src', 'images/black.jpg')
                card.addEventListener('click', flipCard)
                grid.appendChild(card)
            },1000)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/black.jpg')
            cards[optionTwoId].setAttribute('src', 'images/black.jpg')
            alert('You have clicked the same image!')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cards[optionOneId].removeAttribute('class')
            cards[optionTwoId].removeAttribute('class')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/black.jpg')
            cards[optionTwoId].setAttribute('src', 'images/black.jpg')
            alert("That's wrong")
            hearts--;
            lifes.textContent = hearts;
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            grid.remove()
            life.innerText = 'You have finished! Congratulations!'
            body.appendChild(btn)
        }
        if (hearts === 0) {
            grid.remove()
            life.innerHTML = 'You have losed, try again!'
            body.appendChild(btn)
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 250)
        }
    }

    createBoard()
})