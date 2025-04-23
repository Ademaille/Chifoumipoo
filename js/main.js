const pfc = [
    { name: "feuille", image: "feuille.jpg" },
    { name: "ciseau", image: "ciseau.jpg" },
    { name: "pierre", image: "pierre.jpg" }
]

// Ajout de l'event click pour afficher l'image 

const Allimg = document.querySelectorAll("#image-gauche, #image-droite")
Allimg.forEach((button) => {

    button.addEventListener("click", (event) => {

        let imgAlea = Math.floor(Math.random() * (2 + 1))
        console.log(imgAlea)
        console.log(pfc[imgAlea].image)
        event.target.style.backgroundImage = `url("../images/${pfc[imgAlea].image}")`;

        event.target.nextElementSibling.textContent = pfc[imgAlea].name
        if (event.target.parentElement) {
            event.target.parentElement.style.backgroundColor = "black";
        }
       
    })
    
})