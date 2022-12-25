const containerEl = document.querySelector(".container");
const copyEl = document.querySelector(".copied")

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container")
generateColors();

function generateColors(){
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode
        colorContainerEl.addEventListener("click", (e)=>{
            navigator.clipboard.writeText(e.target.innerText);
            colorContainerEls.forEach((colorContainerInEl)=>{
                colorContainerInEl.style.border = "none"
            })
            e.target.style.border = "solid 5px green"
            copyEl.style.top = "0px"
            setTimeout(function(){
                copyEl.style.top = "-100px"
            }, 1000);
        })
    });
}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}