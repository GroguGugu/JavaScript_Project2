const sizeUpBtn = document.querySelector('.sizeUp')
const sizeDownBtn = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const p = document.querySelector('p')

let number = 36

const sizeUp = () => {
    if (number >= 70) return
	number += 5
	p.style.fontSize = number + 'px'
}

const sizeDown = () => {
	if (number <= 21) return
	number -= 5
	p.style.fontSize = number + 'px'
}

const changeColor = () => {

    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    
    // p.style.color = 'rgb(' + r + ',' + g + ','+ b +')'
    p.style.color = `rgb(${r}, ${g}, ${b})`
}

sizeUpBtn.addEventListener('click', sizeUp)
sizeDownBtn.addEventListener('click', sizeDown)
colorBtn.addEventListener('click', changeColor)
