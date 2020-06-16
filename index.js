
$("body").click(function(event) {
    animateRandom(event.target);
});

function overshadow(element){
    $(element).animate({opacity: '0.4'}, "slow");
}

function slideUp(element){
    $(element).slideUp("slow");
}

function changeColor(element){
    let arrColors = ['orange', 'green', 'pink', 'purple', 'cyan'];
    arrColors = arrColors.sort(function() {return Math.random() - 0.5}); // more random 
    random = Math.floor(Math.random()*(arrColors.length));
    colorRandom = arrColors[random];
    $(element).css("background-color", colorRandom);
}

function move(element){
    $(element).animate({height: '400px', opacity: '0.4'}, "slow");
    $(element).animate({height: '50px', opacity: '0.4'}, "slow");
    $(element).animate({width: '0px', opacity: '0.8'}, "slow");
}

function restart(){
    location.reload();
}

function animateRandom (element){
    let arrFunctions = [overshadow, slideUp, changeColor, move, restart]; // array of all the animations
    arrFunctions = arrFunctions.sort(function() {return Math.random() - 0.5}); // more random 
    random = Math.floor(Math.random()*(arrFunctions.length));
    functionSelected = arrFunctions[random];
    functionSelected(element);
}
