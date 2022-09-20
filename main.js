const container = document.getElementById("container")

container.innerHTML = `
    <header class="header">
        <input type="color" class="color" id="userColor">
        <select name="Colour Scheme" class="colorSchemeDropDown">
            <option value="monochrome">monochrome</option>
            <option value="monochrome-dark">monochrome-dark</option>
            <option value="monochrome-light">monochrome-light</option>
            <option value="analogic">analogic</option>
            <option value="complement">complement</option>
            <option value="analogic-complement">analogic-complement</option>
            <option value="triad">triad</option>
            <option value="quad">quad</option>
        </select>
        <button id="get-color-scheme-btn" class="getColorSchemebtn">Get color scheme</button>
    </header>

    <main class="mainSection">
        <div class="section1">
            <div class="colorWindow color1" id="colorDisplay1"></div>
            <div class="colorWindow color2" id="colorDisplay2"></div>
            <div class="colorWindow color3" id="colorDisplay3"></div>
            <div class="colorWindow color4" id="colorDisplay4"></div>
            <div class="colorWindow color5" id="colorDisplay5"></div>
        </div>
        <div class="section2">
            <div class="rgb-info"><p id="rgb1">#FFCA29</p></div>
            <div class="rgb-info"><p id="rgb2">#23AEE1</p></div>
            <div class="rgb-info"><p id="rgb3">#009726</p></div>
            <div class="rgb-info"><p id="rgb4">#6E0047</p></div>
            <div class="rgb-info"><p id="rgb4">#00104C</p></div>
        </div>
    </main>
`

const userColor = document.getElementById("userColor")
let color = ""
let choices = "monochrome"

const rgb1 = document.getElementById("rgb1")
const rgb2 = document.getElementById("rgb2")
const rgb3 = document.getElementById("rgb3")
const rgb4 = document.getElementById("rgb4")
const rgb5 = document.getElementById("rgb5")
const colorDisplay1 = document.getElementById("colorDisplay1")
const colorDisplay2 = document.getElementById("colorDisplay2")
const colorDisplay3 = document.getElementById("colorDisplay3")
const colorDisplay4 = document.getElementById("colorDisplay4")
const colorDisplay5 = document.getElementById("colorDisplay5")

userColor.addEventListener("change", function(){
    color = userColor.value
    rgb1.innerText = `${color.toUpperCase()}`
    colorDisplay1.style.backgroundColor = color
})

fetch("https://www.thecolorapi.com/scheme?color + choices")
    .then(res => res.json())
    .then(data => console.log(data))




