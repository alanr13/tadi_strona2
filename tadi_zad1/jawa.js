function zmienOpis()
{
    document.getElementById('nav5').style.display = "none";
    document.getElementById('nav4').style.display = "none";
    document.getElementById('nav3').style.display = "none";
    document.getElementById('nav2').style.display = "none";
    document.getElementById('nav').style.display = "inline";
}

function zmienOpis2()
{
    document.getElementById('nav5').style.display = "none";
    document.getElementById('nav4').style.display = "none";
    document.getElementById('nav3').style.display = "none";
    document.getElementById('nav').style.display = "none";
    document.getElementById('nav2').style.display = "inline";
}

function zmienOpis3()
{
    document.getElementById('nav5').style.display = "none";
    document.getElementById('nav4').style.display = "none";
    document.getElementById('nav2').style.display = "none";
    document.getElementById('nav').style.display = "none";
    document.getElementById('nav3').style.display = "inline";
}

function zmienOpis4()
{
    document.getElementById('nav5').style.display = "none";
    document.getElementById('nav3').style.display = "none";
    document.getElementById('nav2').style.display = "none";
    document.getElementById('nav').style.display = "none";
    document.getElementById('nav4').style.display = "inline";
}

function zmienOpis5()
{
    document.getElementById('nav4').style.display = "none";
    document.getElementById('nav3').style.display = "none";
    document.getElementById('nav2').style.display = "none";
    document.getElementById('nav').style.display = "none";
    document.getElementById('nav5').style.display = "inline";
}


function zmienImg(img) {
    const obraz = document.getElementById('zmiana')
    obraz.src = img
}

let zmiana = 0
function polubZmien() {
    zmiana++
    const polub = document.getElementById("polub")
    if (zmiana % 2 == 0) {
        polub.src = "icon-off.png"
    } else {
        polub.src = "icon-on.png"
    }
}