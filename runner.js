window.setInterval(timer, 60000);
function timer() {
    alert("You have spent too much time here, goodbye.");
    alert("You Will Be Sent Somewhere Else.")
    kickOut();
    //Bye bye
}

function kickOut() {
    window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";

}