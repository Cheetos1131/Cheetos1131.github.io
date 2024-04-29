window.setInterval(timer, 60000);
function timer() {
    alert("You have spent too much time here, goodbye.");
    alert("You Will Be Sent Somewhere Else.")
    //kickOut();
    //Bye bye
    winOpen();
}
let open1;
let open2 = "https://Cheetos1131.github.io/index.html";

function kickOut() {
    //window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";

}

function winOpen() {
    open1 = window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0");
    setTimeout(winClose, 12000);
}

function winClose() {
    open1.close();
}