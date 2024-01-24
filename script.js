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
        let skills = document.getElementsByClassName("progress");
        skills[0].classList.add("javascript");
        skills[1].classList.add("htmlcss");
        skills[2].classList.add("java");
        skills[3].classList.add("c");
        skills[4].classList.add("git");
        
        skills[5].classList.add("comunication");
        skills[6].classList.add("teamwork");
        skills[7].classList.add("empathy");
        skills[8].classList.add("leadership");
        skills[9].classList.add("growth");
    }
}

window.onscroll = function(){
    efectoSkills();
}