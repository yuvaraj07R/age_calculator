var bday = document.getElementById("1day")
var cday = document.getElementById("2day")
var tday = document.getElementById("result")

function total ()
{
    var Bday = Number(bday.value)
    var Cday = Number(cday.value)
    var Tday = Cday-Bday
    tday.textContent = "Your Age is : " + Tday


}