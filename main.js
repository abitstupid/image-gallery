// themes section
const themes = document.getElementById("themes");
const viewer = document.getElementById("viewer");
const fullImg = document.querySelector(".full-img");
const thumbBar = document.getElementById("thumb-bar");
const themeBtns = document.getElementsByClassName("theme-btn");
// const themeContainer = document.querySelector(".theme-container");

// creating theme buttons
const themesList = ["glassmorphism" , "light" , "dark" , "retro"];

for (const theme of themesList) {
    const newTheme = document.createElement("div");
    newTheme.setAttribute("id", theme);
    newTheme.setAttribute("class", "theme-btn pointer");
    newTheme.setAttribute("data-theme", theme);

    const themeIcon = document.createElement("img");
    themeIcon.setAttribute("id" , `${theme}-icon`);
    themeIcon.setAttribute("src" , `assets/${theme}.svg`);
    
    themes.appendChild(newTheme);
    newTheme.appendChild(themeIcon);

}

// theme functionality

let style = localStorage.getItem('style');
if (style == null) {
    setTheme('glassmorphism');
} else {
    setTheme(style);
}

for (let themeBtn of themeBtns) {
    themeBtn.addEventListener('click', function () {
        let datasetTheme = this.dataset.theme;
        setTheme(datasetTheme);
    })
}

function setTheme(datasetTheme) {
    if (datasetTheme == 'glassmorphism') {
        document.getElementById('switcher-id').href = 'css/root.css';

    } else if (datasetTheme == 'light') {
        document.getElementById('switcher-id').href = 'css/light.css';
        
        document.getElementById("glassmorphism-icon").setAttribute("src" , "assets/glassmorphism-light.svg");
        document.getElementById("light-icon").setAttribute("src" , "assets/light-light.svg");
        document.getElementById("dark-icon").setAttribute("src" , "assets/dark-light.svg");
        document.getElementById("retro-icon").setAttribute("src" , "assets/retro-light.svg");

    } else if (datasetTheme == 'dark') {
        document.getElementById('switcher-id').href = 'css/dark.css';

        document.getElementById("glassmorphism-icon").setAttribute("src" , "assets/glassmorphism.svg");
        document.getElementById("light-icon").setAttribute("src" , "assets/light.svg");
        document.getElementById("dark-icon").setAttribute("src" , "assets/dark.svg");
        document.getElementById("retro-icon").setAttribute("src" , "assets/retro.svg");

    } else if (datasetTheme == 'retro') {
        document.getElementById('switcher-id').href = 'css/retro.css';

        document.getElementById("glassmorphism-icon").setAttribute("src" , "assets/glassmorphism-light.svg");
        document.getElementById("light-icon").setAttribute("src" , "assets/light-light.svg");
        document.getElementById("dark-icon").setAttribute("src" , "assets/dark-light.svg");
        document.getElementById("retro-icon").setAttribute("src" , "assets/retro-light.svg");

        // themes.style.height = "340px";
        // const changeBgBtn = document.createElement("div");
        // changeBgBtn.setAttribute("id" , "change-bg");
        // changeBgBtn.style.width = "3rem";
        // changeBgBtn.style.height = "50px";

        // themeContainer.appendChild(changeBgBtn);
        // themeContainer.style.gap = "10px";
    
    }
    localStorage.setItem('style', datasetTheme);
}

// thumbBar 
const images = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg","image7.svg","image8.svg","image9.jpg","image10.jpg", "image11.svg" ,"image12.jpg" , "image13.jpg"];

for (const image of images) {
    const thumbImgContainer = document.createElement("div");
    thumbImgContainer.setAttribute("class","thumb-img-container pointer");

    thumbBar.appendChild(thumbImgContainer);

    const newImage = document.createElement("img");
    newImage.setAttribute("src", `assets/${image}`);
    newImage.setAttribute("class", `${image} thumb-img`);
    newImage.style.border = "1px solid #404040";

    thumbImgContainer.appendChild(newImage);

    newImage.addEventListener("click", (e) =>{
        fullImg.src = e.target.src;
    })
}





