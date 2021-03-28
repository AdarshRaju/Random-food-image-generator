const img = document.createElement('img')
const button = document.createElement('button')
button.innerHTML = "Radomize"
document.body.appendChild(button)
fetch('https://foodish-api.herokuapp.com/api/').then(ht => ht.json()).then((json) => {
    
img.setAttribute('src',json.image)
img.setAttribute('alt', "sdf")
img.setAttribute('class', 'fetch_img')
document.body.appendChild(img)
}
)

button.addEventListener('click', () => {
    fetch('https://foodish-api.herokuapp.com/api/').then(ht => ht.json()).then((json) => {
    
img.setAttribute('src',json.image)
img.setAttribute('alt', "sdf")
img.setAttribute('class', 'fetch_img')
document.body.appendChild(img)
}
)
})
