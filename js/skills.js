document.getElementById("NavigationBar").style.position = 'fixed';

document.getElementById("home").addEventListener("mouseover", function() {
    this.style.backgroundColor = "cornflowerblue";
});
document.getElementById("home").addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

document.getElementById("skills").addEventListener("mouseover", function() {
    this.style.backgroundColor = "cornflowerblue";
});
document.getElementById("skills").addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

document.getElementById("education").addEventListener("mouseover", function() {
    this.style.backgroundColor = "cornflowerblue";
});
document.getElementById("education").addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

document.getElementById("contact").addEventListener("mouseover", function() {
    this.style.backgroundColor = "cornflowerblue";
});
document.getElementById("contact").addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

document.getElementById("form").addEventListener("mouseover", function() {
    this.style.backgroundColor = "cornflowerblue";
});
document.getElementById("form").addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
});

document.getElementById("NavigationBar").style.position = 'fixed';

var counter = 0;

imgClickAndChange.onclick = function(){
    if(counter == 0){
        document.getElementById("imgClickAndChange").src = "../img/usagent.jpg";
        counter++;
    }
    else if(counter == 1){
        document.getElementById("imgClickAndChange").src = "../img/Sailor Mars.jpg";
        counter++;
    }
    else if(counter == 2){
        document.getElementById("imgClickAndChange").src = "../img/cosmic.jpg";
        counter++;
    }
    else if(counter == 3){
        document.getElementById("imgClickAndChange").src = "../img/subway.jpg";
        counter++;
    }
    else if(counter == 4){
        document.getElementById("imgClickAndChange").src = "../img/Gameboy.jpg";
        counter = 0;
    }
};