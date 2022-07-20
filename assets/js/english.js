document.getElementById("news").addEventListener("click", show_news);
document.getElementById("home").addEventListener("click", show_home);
document.getElementById("start").addEventListener("click", show_start);
document.getElementById("games").addEventListener("click", show_games);
home = document.getElementById("welcome");
news = document.getElementById("container-news");
start = document.getElementById("container-start");
games = document.getElementById("container-games");
function show_news(){
    home.style.display = "none";
    news.style.display = "block";
    start.style.display = "none";
    games.style.display = "none";
}
function show_home(){
    home.style.display = "block";
    news.style.display = "none";
    start.style.display = "none";
    games.style.display = "none";
}
function show_start(){
    news.style.display = "none";
    home.style.display = "none";
    start.style.display = "block";
    games.style.display = "none";
    boxes_start.style.display = "flex"
    unit1.style.display = "none"
}
function show_games(){
    news.style.display = "none";
    home.style.display = "none";
    start.style.display = "none";
    games.style.display = "block";

}
// start
document.getElementById("buttom-unit1").addEventListener("click", show_unit1);
boxes_start = document.getElementById("boxes-start");
unit1 = document.getElementById("unit1");
function show_unit1(){
    boxes_start.style.display = "none";
    unit1.style.display = "block"
}
