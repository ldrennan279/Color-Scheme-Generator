const container = document.getElementById("container")

container.innerHTML = `
    <header class="header">
        <h3 class="heading">Colour Generator</h3>
        <input type="color" class="color" id="userColor">
        <select name="Colour Scheme" id="colorSchemeDropDown">
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
        <div id="section1">
        </div>
        <div id="section2">      
        </div>
    </main>
`

const userColor = document.getElementById("userColor")
const colorSchemeDropDown = document.getElementById("colorSchemeDropDown")
const getColorSchemeBtn = document.getElementById("get-color-scheme-btn")
const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")
let colorSeleceted = ""
let colorScheme = ""
let colorDataRec = ""

getColorSchemeBtn.addEventListener("click",function(){
    colorSeleceted = userColor.value.slice(1)
    colorScheme = colorSchemeDropDown.options[colorSchemeDropDown.selectedIndex].text
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSeleceted}&mode=${colorScheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            let colorsHtml = ''
            let hexHtml = ''
            for (let color of data.colors){
                colorsHtml += `
                    <div class="colorWindow" style="background-color:${color.hex.value}" ">
                    </div>
                `
                hexHtml += `
                    <div class="rgb-info" id="rgbInfo">
                        <p id="colorData">${color.hex.value}</p>
                    </div>
                `
            }
            section1.innerHTML = colorsHtml
            section2.innerHTML = hexHtml
        }) 
        
})





