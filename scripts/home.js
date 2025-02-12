//Header SCROLL EFFECT

const header = document.querySelector("header");
window.addEventListener("scroll", () => {

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    // .scrollHeight -> retorna altura do conteúdo do body
    // .innerHeight -> retorna oq pode ser visto/viewport
    const scrolled = window.scrollY; //Verifica oq já foi scrollado.

    if(Math.ceil(scrolled) >= 180){
        header.classList.add("header-scroll"); 
    }else{
        header.classList.remove("header-scroll"); 
    }

})

//Header SEARCH BUTTON

const search = document.getElementById("i-search")

search.addEventListener("click", () => {

    //Remove elements #logo & #share
    const logo = document.getElementById("logo");
    const share = document.getElementById("i-share");

    logo.classList.add("hidden");
    share.classList.add("hidden");

    const hiddenClass = document.querySelectorAll(".hidden");
    hiddenClass.forEach(Element => {
        Element.style.display = "none";
    })

    //Create SEARCH INPUT Element

    header.insertAdjacentHTML("beforeend", `
        <div id="search"> 
            <input type="text">
            <button id="search-button">x</button>
        </div>
    `);

    const searchClass = document.getElementById("search");
    searchClass.classList.add("search");

    const searchB = document.getElementById("search-button");

    searchB.addEventListener("click", () => {
        logo.classList.remove("hidden");
        share.classList.remove("hidden");
    })

    
})

//Nav-bar BUTTON

const home = document.getElementById("home");

home.addEventListener("click", () => {
    window.location.href = "/.";
})
