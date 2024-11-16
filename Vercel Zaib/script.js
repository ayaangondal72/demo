mybody.addEventListener("mousemove",(e)=>{
    let percentage = (e.clientX/mybody.offsetWidth) * 100
    let percentage2 = (e.clientY/mybody.offsetHeight) * 100

    spann.style.top = `${percentage2}%`
    spann.style.left = `${percentage}%`
    spann.style.display = "block" 
});
mybody.addEventListener("keydown",(e)=>{
    if(e.key == "b"){
        spann.style.backgroundColor = "blue"
        spann.style.boxShadow = "0 0 20px blue, 0 0 40px blue, 0 0 60px blue"
    }
    else if(e.key == "r"){
        spann.style.backgroundColor = "red"
        spann.style.boxShadow = "0 0 20px red, 0 0 40px red, 0 0 60px red"

    }
    else if(e.key == "p"){
        spann.style.backgroundColor = "purple"
        spann.style.boxShadow = "0 0 20px purple, 0 0 40px purple, 0 0 60px purple"

    }
    else if(e.key == "v"){
        spann.style.backgroundColor = "violet"
        spann.style.boxShadow = "0 0 20px violet, 0 0 40px violet, 0 0 60px violet"

    }
    else if(e.key == "c"){
        spann.style.backgroundColor = "crimson"
        spann.style.boxShadow = "0 0 20px crimson, 0 0 40px crimson, 0 0 60px crimson"

    }
    else if(e.key == "s"){
        spann.style.backgroundColor = "skyblue"
        spann.style.boxShadow = "0 0 20px skyblue, 0 0 40px skyblue, 0 0 60px skyblue"

    }
    else if(e.key == "l"){
        spann.style.backgroundColor = "lightseagreen"
        spann.style.boxShadow = "0 0 20px lightseagreen, 0 0 40px lightseagreen, 0 0 60px lightseagreen"

    }
    else if(e.key == "a"){
        hoverhead.innerText = "Ayaan"
    }
    else if(e.key == "z"){
        hoverhead.innerText = "Zaib computer center"
    }
    
})

hoverParagraph.addEventListener('mouseenter', () => {
    spann.style.width = "70px" // Enlarge the cursor on hover
    spann.style.height = "70px" // Enlarge the cursor on hover
    spann.style.backgroundColor = "skyblue"
    spann.style.boxShadow = "0 0 20px skyblue, 0 0 40px skyblue, 0 0 60px skyblue"
});

hoverParagraph.addEventListener('mouseleave', () => {
    spann.style.width = "20px" // Reset the cursor size
    spann.style.height = "20px" // Reset the cursor size
    spann.style.backgroundColor = "crimson"
    spann.style.boxShadow = "0 0 20px crimson, 0 0 40px crimson, 0 0 60px crimson"
});
// hoverhead.addEventListener('mouseenter', () => {
//     spann.style.width = "70px" // Enlarge the cursor on hover
//     spann.style.height = "70px" // Enlarge the cursor on hover
//     spann.style.backgroundColor = "lightseagreen"
//     spann.style.boxShadow = "0 0 20px lightseagreen, 0 0 40px lightseagreen, 0 0 60px lightseagreen"
// });

// hoverhead.addEventListener('mouseleave', () => {
//     spann.style.width = "30px" // Reset the cursor size
//     spann.style.height = "30px" // Reset the cursor size
//     spann.style.backgroundColor = "crimson"
//     spann.style.boxShadow = "0 0 20px crimson, 0 0 40px crimson, 0 0 60px crimson"
// });

// sub.addEventListener('mouseenter', () => {
//     spann.style.width = "70px" // Enlarge the cursor on hover
//     spann.style.height = "70px" // Enlarge the cursor on hover
//     spann.style.backgroundColor = "skyblue"
//     spann.style.boxShadow = "0 0 20px skyblue, 0 0 40px skyblue, 0 0 60px skyblue"
// });

// sub.addEventListener('mouseleave', () => {
//     spann.style.width = "30px" // Reset the cursor size
//     spann.style.height = "30px" // Reset the cursor size
//     spann.style.backgroundColor = "crimson"
//     spann.style.boxShadow = "0 0 20px crimson, 0 0 40px crimson, 0 0 60px crimson"
// });




//SECTION 2 : menu bar

function abc(){
    i.innerText == "o" ? i.innerText = "" : i.innerText = ""
    menu.classList.toggle("show")
    
    h1.style.display = "block"
    menu.classList.toggle('hidden'); // Toggle hidden class

    
}
function def(){
    toggleBtn.addEventListener('click', () => {
       
    });
    
}



