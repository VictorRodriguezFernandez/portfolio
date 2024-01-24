let menuVisible = false;
//hide or show menu
function showHideMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

//hide menu when the option was picked
function select(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//apply skills animation
function efectoSkills(){
    var skills = document.getElementById("skills");
    var dist_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(dist_skills >= 300){
        let habilidades = document.getElementsByClassName("progress");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("c");
        habilidades[4].classList.add("git");
        
        habilidades[5].classList.add("comunication");
        habilidades[6].classList.add("teamwork");
        habilidades[7].classList.add("empathy");
        habilidades[8].classList.add("leadership");
        habilidades[9].classList.add("growth");
    }
}

window.onscroll = function(){
    efectoSkills();
}