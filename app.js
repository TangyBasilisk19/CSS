//ALL OF THIS IS HARD TO READ IT IS MESSY

const start = document.querySelector('#start-button')
const body = document.querySelector('body')
const containerItem = document.querySelector('.container-items')
const item = document.querySelector('.text')
const text = document.querySelector('.head')
const textContainer = document.querySelector('.text-container')
const pageHeader = document.querySelector('.page-header')
const link = document.querySelectorAll('.link')


start.addEventListener('click', () => {
    setTimeout(() => {
        start.classList.add('none')
        containerItem.classList.remove('none')
        containerItem.classList.add('show')
        containerItem.classList.add('show')
        setTimeout(() => {
            text.classList.remove('none')
        }, 200)
        setTimeout(() => {
            containerItem.classList.add('background')
        }, 200)
    }, 100)
})

containerItem.addEventListener('click', (e) => {
    setTimeout(() => {
        item.classList.toggle('image')
        item.classList.toggle('none')
        containerItem.classList.toggle('blur')
        pageHeader.classList.toggle('blur')
        for (let links of link) {
            links.classList.add('disable')
        }
        setTimeout(() => {
            item.classList.toggle('visible')
        }, 150)
    }, 100)
})
body.addEventListener('dblclick', (e) => {
    setTimeout(() => {
        item.classList.remove('image')
        item.classList.add('none')
        containerItem.classList.remove('blur')
        for (let links of link) {
            links.classList.remove('disable')
        }
        pageHeader.classList.remove('blur')

        setTimeout(() => {
            item.classList.remove('visible')
        }, 150)
    }, 100)
})

item.addEventListener('click', () => {
    setTimeout(() => {
        item.classList.add('visible')
        containerItem.classList.add('blur')
    }, 200)

})
