const upto_25 = document.querySelector('.upto_25')
const upto_40 = document.querySelector('.upto_40')
const others = document.querySelector('.others')

const url = 'https://dummyjson.com/users'

fetch(url).then(res => res.json()).then(data => {
    data.users.forEach(user => {
        if(user.age <= 25) {
            let card = createUserCard(user)
            upto_25.appendChild(card)
        } else if(user.age <= 40) {
            let card = createUserCard(user)
            upto_40.appendChild(card)
        } else {
            let card = createUserCard(user)
            others.appendChild(card)
        }
    });
})

function createUserCard(user) {
    const card = document.createElement('div')
    const name = document.createElement('h2')
    const ageWrapper = document.createElement('div')
    const span_1 = document.createElement('span')
    const span_2 = document.createElement('span')

    ageWrapper.classList.add('ageWrapper')
    card.classList.add('card')
    card.id = user.id
    name.innerText = `${user.firstName} ${user.lastName}`
    span_1.innerText = 'Age'
    span_2.innerText = user.age
    ageWrapper.append(span_1,span_2)
    card.append(name,ageWrapper)

    return card
}