function Perfil(){
    let perfil = document.querySelector("#perfil");

    let div = '<div class="menu">'+     
        '<img class="logo" src="https://raw.githubusercontent.com/CMiranda14/img_aps/405fb7cbd67362ed30a64f0ca7747deebf078260/Logo.svg"></img>'+
        '<a class="vinculos" href="#" id="Inicio">Incio</a>'+
        '<a class="vinculos" href="#" id="Carbohidratos">Carbohidratos</a>'+
        '<a class="vinculos" href="#" id="Proteínas">Proteínas</a>'+
        '<a class="vinculos" href="#" id="Lípidos">Lípidos </a>'+
        '<a class="vinculos" href="#" id="Vitaminas">Vitaminas</a>'+
        '<a class="vinculos1" href="#" id="By">By Quick Learning</a>'+
    '</div>'+
    '<img class="fondo_blanco" src="https://raw.githubusercontent.com/CMiranda14/img-aps-svg/fc8396483e4b514db42d7f59c0ecd7bc112e9bfe/fondo%20blanco.svg"></img>'+
    '<div class="caja_wireframes">'+
    '<img class="bio_hola" src="https://raw.githubusercontent.com/CMiranda14/img-aps-svg/f618c2a9669e41c7555435a6fe173ce80995ea85/Biohola.svg"></img>'+
    '<img class="bio_hola22" src="https://raw.githubusercontent.com/CMiranda14/img-aps-svg/8f62b13cd82612ac95924239d6a5c6a1621f9c72/Bio.svg"></img>'+

    '<h1 class="title">'+'Hola, xName'+'</h1>'+
    '<h1 class="title1">'+'CONOCE BIO FOOD'+'</h1>'+

    '<img class="bio_holaa" src="https://raw.githubusercontent.com/CMiranda14/img-aps-svg/bcab587be01655f4cc97941959361b74eecca54e/%C2%BFQu%C3%A9%20es%20bio%20food_que%20es%20bio.svg"></img>'+
    '<img class="bio_holab" src="https://raw.githubusercontent.com/CMiranda14/img-aps-svg/d8f1321588a2449110d38d79cebcced867c4115f/%C2%BFQui%C3%A9n%20es%20Bio_quie%20%20(1).svg"></img>'+
    '<img class="bio_holab2" src="https://raw.githubusercontent.com/CMiranda14/img-aps-svg/03d2557a788ab0e985b6e2a194b2b6abb40c38ab/%C2%BFQui%C3%A9n%20es%20bio_.svg"></img>'+
    '<img class="bio_holac" src="https://raw.githubusercontent.com/CMiranda14/img-aps-svg/0ed42cad7d2047cdbcdca181955ec247e72e4bb6/Nuestro%20objetivodestock.svg"></img>'+
    '<img class="bio_holad" src="https://raw.githubusercontent.com/CMiranda14/img-aps-svg/76ab15f67defda55681e42ccf87976c337fb56fa/Nuestro%20equipodestock.svg"></img>'+
    '<img class="bio_holad2" src="https://raw.githubusercontent.com/CMiranda14/img-aps-svg/399fc1064af1fccdefebfa72baf0c77706134695/Nuestro%20equipo.svg"></img>'+
    '<img class="bio_hola2" src="https://raw.githubusercontent.com/CMiranda14/img-aps-svg/a123f8341b36db32b8e737bf7541441d9228f69b/Conoce%20tu%20dietadestock.svg"></img>'+
    '<img class="bio_hola222" src="https://raw.githubusercontent.com/CMiranda14/img-aps-svg/35f760b22a1be9a5e5cf9cc3977e61b3a1f1c224/conoce%20tu%20dieta%20ideal%20(1).svg"></img>'+
    '<img class="bio_hola3" src="https://raw.githubusercontent.com/CMiranda14/img-aps-svg/4dac670d40d340a3e2335df5dfe964ab75a41b98/Pir%C3%A1mide.svg"></img>'+
    '<img class="bio_hola4" src="https://raw.githubusercontent.com/CMiranda14/img-aps-svg/d2d440d00d14e0e480af03add483b276e4a7bae0/calor%C3%ADas.svg"></img>'+
    '</div>';

    let div1 = '<div class="caja_wireframes2" id="caja_wireframes2">'+'<h1 class="title1">'+'Carbohidratos'+'</h1>'+'</div>';

    let div2 = '<div class="caja_wireframes3" id="caja_wireframes3">'+'<h1 class="title1">'+'Proteínas'+'</h1>'+'</div>';
    let div3 = '<div class="caja_wireframes4" id="caja_wireframes4">'+'<h1 class="title1">'+'Lípidos'+'</h1>'+'</div>';
    let div4 = '<div class="caja_wireframes5" id="caja_wireframes5">'+'<h1 class="title1">'+'Vitaminas'+'</h1>'+'</div>';
    let div5 = '<div class="caja_wireframes6" id="caja_wireframes6">'+'<h1 class="title1">'+'By Quick Learning'+'</h1>'+'</div>';



    perfil.innerHTML = div + div1 + div2 + div3 + div4 + div5;
}

Perfil()



function activar_desactivar() {
    var x = document.getElementById("caja_wireframes2");
    var x1 = document.getElementById("caja_wireframes3");
    var x2 = document.getElementById("caja_wireframes4");
    var x3 = document.getElementById("caja_wireframes5");
    var x4 = document.getElementById("caja_wireframes6");
    if (x.style.display = "block") {
        x1.style.display = "none"
        x2.style.display = "none"
        x3.style.display = "none"
        x4.style.display = "none";
    } 
}

Carbohidratos.addEventListener('click' ,activar_desactivar);


function activar_desactivar1() {
    var x = document.getElementById("caja_wireframes2");
    var x1 = document.getElementById("caja_wireframes3");
    var x2 = document.getElementById("caja_wireframes4");
    var x3 = document.getElementById("caja_wireframes5");
    var x4 = document.getElementById("caja_wireframes6");
    if (x.style.display = "none") {
        x1.style.display = "none"
        x2.style.display = "none"
        x3.style.display = "none"
        x4.style.display = "none";
    } 
}

Inicio.addEventListener('click' ,activar_desactivar1);


function activar_desactivar2() {
    var x = document.getElementById("caja_wireframes3");
    var x1 = document.getElementById("caja_wireframes2");
    var x2 = document.getElementById("caja_wireframes4");
    var x3 = document.getElementById("caja_wireframes5");
    var x4 = document.getElementById("caja_wireframes6");
    if (x.style.display = "block") {
        x1.style.display = "none"
        x2.style.display = "none"
        x3.style.display = "none"
        x4.style.display = "none";
    } 
}

Proteínas.addEventListener('click' ,activar_desactivar2);


function activar_desactivar3() {
    var x = document.getElementById("caja_wireframes4");
    var x1 = document.getElementById("caja_wireframes2");
    var x2 = document.getElementById("caja_wireframes3");
    var x3 = document.getElementById("caja_wireframes5");
    var x4 = document.getElementById("caja_wireframes6");
    if (x.style.display = "block") {
        x1.style.display = "none"
        x2.style.display = "none"
        x3.style.display = "none"
        x4.style.display = "none";
    } 
}

Lípidos.addEventListener('click' ,activar_desactivar3);

function activar_desactivar4() {
    var x = document.getElementById("caja_wireframes5");
    var x1 = document.getElementById("caja_wireframes2");
    var x2 = document.getElementById("caja_wireframes3");
    var x3 = document.getElementById("caja_wireframes4");
    var x4 = document.getElementById("caja_wireframes6");
    if (x.style.display = "block") {
        x1.style.display = "none"
        x2.style.display = "none"
        x3.style.display = "none"
        x4.style.display = "none";
    } 
}

Vitaminas.addEventListener('click' ,activar_desactivar4);

function activar_desactivar5() {
    var x = document.getElementById("caja_wireframes6");
    var x1 = document.getElementById("caja_wireframes2");
    var x2 = document.getElementById("caja_wireframes3");
    var x3 = document.getElementById("caja_wireframes4");
    var x4 = document.getElementById("caja_wireframes5");
    if (x.style.display = "block") {
        x1.style.display = "none"
        x2.style.display = "none"
        x3.style.display = "none"
        x4.style.display = "none";
    } 
}

By.addEventListener('click' ,activar_desactivar5);
