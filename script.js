function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")


    if(html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png")
    }else{
        img.setAttribute("src", "./assets/avatar.png")
    }
}


function toggleMode() {
    const body = document.body;
    body.classList.toggle("light");

    // Salva o tema no localStorage
    if (body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        
    } else {
        localStorage.setItem("theme", "dark");
        
    }

    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")


    if(html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png")
    }else{
        img.setAttribute("src", "./assets/avatar.png")
    }
}

// Aplica o tema salvo ao carregar a página
function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
    }
}

// Chama a função ao carregar a página
applySavedTheme();


