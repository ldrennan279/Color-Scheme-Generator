const container = document.getElementById("container")
let color = document.getElementById("color")




container.innerHTML = `
    <header class="header">
        <input type="color" class="color" id="color">
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
            <div class="colorWindow" id="colorDisplay1"></div>
            <div class="colorWindow" id="colorDisplay2"></div>
            <div class="colorWindow" id="colorDisplay3"></div>
            <div class="colorWindow" id="colorDisplay4"></div>
            <div class="colorWindow" id="colorDisplay5"></div>
        </div>
        <div class="section2">
            <div class="rgb-info"><p id="rgb1"></p></div>
            <div class="rgb-info"><p id="rgb2"></p></div>
            <div class="rgb-info"><p id="rgb3"></p></div>
            <div class="rgb-info"><p id="rgb4"></p></div>
            <div class="rgb-info"><p id="rgb4"></p></div>
        </div>
    </main>
`