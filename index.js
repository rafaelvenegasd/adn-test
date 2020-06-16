
$("body").click(function(event) {
    animateRandom(event.target);
});

function animateRandom (element){
    let arrFunctions = [`animate({opacity: '0.4'}, "slow")`, `slideUp("slow")`, `css("background-color", "orange")`];
        random = Math.floor(Math.random()*(arrFunctions.length));
        functionSelected = arrFunctions[random];
        $(element).functionSelected;
        console.log(element , functionSelected);
}
