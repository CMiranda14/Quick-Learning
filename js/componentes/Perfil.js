import {matriz_video_proteinas, Guayaba, Aceitunas, Platano, matriz_video_carbohidratos} from './datas_bromatologia.js';


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

    /***CAJA CARBOHIDRATOS***/
    let div1 = `<div class="caja_wireframes2" id="caja_wireframes2">
                <img class="capa7" src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/4877c4bbc8128d827454db186b06a7d09c77bbc0/Capa%207.svg"></img>
                <h1 class="title_carbohidratos">Carbohidratos</h1>
                <img class="video_carbohidratos" id="video_carbohidratos" src="https://raw.githubusercontent.com/CMiranda14/img_aps_carbohidratos/0fe5a4ba5a672bae7f30d427f82ae10b8add5374/Group%2021%20(2).svg"></img>
                <h1 class="categorias_carbohidratos">CATEGORÍAS</h1>
                <img class="carbohidratos_cereales" id="carbohidratos_cereales" src="https://raw.githubusercontent.com/CMiranda14/img_aps_carbohidratos/adbe1afa81689ecbcc7caa781c5360dec5ce1615/cereales.svg"></img>
                <img class="carbohidratos_frutas" id="carbohidratos_frutas" src="https://raw.githubusercontent.com/CMiranda14/img_aps_carbohidratos/00fbfe3b60e6028a09b324ac83d9e2071929af73/Frutas.svg"></img>
                <img class="carbohidratos_legumbres" id="carbohidratos_legumbres" src="https://raw.githubusercontent.com/CMiranda14/img_aps_carbohidratos/89e3d4f26bbde85b706d4a19980c3eee3cb1a1dc/legumbres.svg"></img>
                
                <div class="caja_video_carbohidratos" id="caja_video_carbohidratos">
                <h1 class="boton_cerrar_video_carbohidratos" id="boton_cerrar_video_carbohidratos">X</h1>
                <iframe class="video_sintesis_carbohidratos" width="573" height="262" src="https://www.youtube.com/embed/XPRSoH3yskw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h1 class="title_cajavideo_carbohidratos">`+matriz_video_carbohidratos[0].titulo+`</h1>
                <h1 class="texto_cajavideo_carbohidratos">`+matriz_video_carbohidratos[0].texto+`</h1>
                <img class="grupo17_video_carbohidratos" src="https://raw.githubusercontent.com/CMiranda14/img_aps_carbohidratos/8755cd074d0c138975a9c8f8a57c073d604515d1/Carbs.svg"></img>

                <div class="preguntas_proteinas">
                <div class="pregunta1Carb">
                    <img src="https://raw.githubusercontent.com/CMiranda14/img_aps_carbohidratos/d2dcac905bc4b9b826ae7c0ebad6e1dcec149f6c/Group%2022%20(2).svg"></img>
                    <h1>`+matriz_video_carbohidratos[1].titulo+`</h1>
                    <p>`+matriz_video_carbohidratos[1].texto+`</p>
                </div>
                <div class="pregunta2Carb">
                <img src="https://raw.githubusercontent.com/CMiranda14/img_aps_carbohidratos/d2dcac905bc4b9b826ae7c0ebad6e1dcec149f6c/Group%2023%20(2).svg"></img>
                <h1>`+matriz_video_carbohidratos[2].titulo+`</h1>
                <p>`+matriz_video_carbohidratos[2].texto+`</p>
                </div>
                <div class="pregunta3Carb">
                <img src="https://raw.githubusercontent.com/CMiranda14/img_aps_carbohidratos/d2dcac905bc4b9b826ae7c0ebad6e1dcec149f6c/Group%2024%20(1).svg"></img>
                <h1>`+matriz_video_carbohidratos[3].titulo+`</h1>
                <p>`+matriz_video_carbohidratos[3].texto+`</p>
                </div>
                <div class="pregunta4Carb">
                <img src="https://raw.githubusercontent.com/CMiranda14/img_aps_carbohidratos/d2dcac905bc4b9b826ae7c0ebad6e1dcec149f6c/Group%2026%20(1).svg"></img>
                <h1>`+matriz_video_carbohidratos[4].titulo+`</h1>
                <p>`+matriz_video_carbohidratos[4].texto+`</p>
                </div>
                </div>
                </div>

                <div class="caja_video_cerales" id="caja_video_cerales">
                <h1 class="boton_cerrar_cerales" id="boton_cerrar_cerales">←</h1>
                <h1 class="title_proteinas">celerales</h1>
                </div>

                <div class="caja_video_frutas" id="caja_video_frutas">
                <h1 class="boton_cerrar_frutas" id="boton_cerrar_frutas">←</h1>
                <h1 class="title_proteinas">FRUTAS</h1>
                </div>

                <div class="caja_video_legumbres" id="caja_video_legumbres">
                <h1 class="boton_cerrar_legumbres" id="boton_cerrar_legumbres">←</h1>
                <h1 class="title_proteinas">legumbres</h1>
                </div>

    </div>`;

    /***CAJA PROTEINAS***/
    let div2 = `<div class="caja_wireframes3" id="caja_wireframes3">
                        <img class="capa7" src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/4877c4bbc8128d827454db186b06a7d09c77bbc0/Capa%207.svg"></img>
                        <h1 class="title_proteinas">Proteínas</h1>
                        <img class="video_proteinas" id="video_proteinas" src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/4877c4bbc8128d827454db186b06a7d09c77bbc0/Conoce%20tu%20dietadestock%20(1).svg"></img>
                        <h1 class="categorias_proteinas">CATEGORÍAS</h1>
                        <img class="proteinas_carne" id="proteinas_carne" src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/4877c4bbc8128d827454db186b06a7d09c77bbc0/Group%2013.svg"></img>
                        <img class="proteinas_lacteos" id="proteinas_lacteos" src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/4877c4bbc8128d827454db186b06a7d09c77bbc0/Group%2015.svg"></img>
                        <img class="proteinas_pescado" src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/4877c4bbc8128d827454db186b06a7d09c77bbc0/Group%2014.svg"></img>
                        <img class="proteinas_frutas" id="proteinas_frutas" src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/4877c4bbc8128d827454db186b06a7d09c77bbc0/Group%2016.svg"></img>



                        <div class="caja_video_proteinas" id="caja_video_proteinas">
                        <h1 class="boton_cerrar_video_proteinas" id="boton_cerrar_video_proteinas">X</h1>
                        <iframe class="video_sintesis_proteinas" width="573" height="262" src="https://www.youtube.com/embed/XPRSoH3yskw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h1 class="title_cajavideo_proteinas">`+matriz_video_proteinas[0].titulo+`</h1>
                        <h1 class="texto_cajavideo_proteinas">`+matriz_video_proteinas[0].texto+`</h1>
                        <img class="grupo17_video" src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/354ee937964c3882be5fa1a438a9be142e0539d8/Group%2017.svg"></img>
                        <img class="grupo18_video" src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/354ee937964c3882be5fa1a438a9be142e0539d8/Group%2018.svg"></img>

                        <div class="preguntas_proteinas">
                            <div class="pregunta1">
                                <img src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/3f95545e53cadff70212251c73288f94a92e8000/Group%2019.svg"></img>
                                <h1>`+matriz_video_proteinas[1].titulo+`</h1>
                                <p>`+matriz_video_proteinas[1].texto+`</p>
                            </div>
                            <div class="pregunta2">
                            <img src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/90406d1433395e0da8ddc730b29142f5dc72b750/Group%2020.svg"></img>
                            <h1>`+matriz_video_proteinas[2].titulo+`</h1>
                            <p>`+matriz_video_proteinas[2].texto+`</p>
                            </div>
                            <div class="pregunta3">
                            <img src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/6878663ee7515678d142fe7b0c529af1c6d1f99a/Group%2021.svg"></img>
                            <h1>`+matriz_video_proteinas[3].titulo+`</h1>
                            <p>`+matriz_video_proteinas[3].texto+`</p>
                            </div>
                            <div class="pregunta4">
                            <img src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/6878663ee7515678d142fe7b0c529af1c6d1f99a/Group%2022.svg"></img>
                            <h1>`+matriz_video_proteinas[4].titulo+`</h1>
                            <p>`+matriz_video_proteinas[4].texto+`</p>
                            </div>
                            <div class="pregunta5">
                            <img src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/6878663ee7515678d142fe7b0c529af1c6d1f99a/Group%2023.svg"></img>
                            <h1>`+matriz_video_proteinas[5].titulo+`</h1>
                            <p>`+matriz_video_proteinas[5].texto+`</p>
                            </div>
                        </div>

                        </div>

                        <div class="caja_proteinas_carne" id="caja_proteinas_carne">
                        <h1 class="boton_cerrar_caja_carne" id="boton_cerrar_caja_carne">←</h1>
                        <h1 class="title_proteinas">Carnes</h1>
                        </div>

                        <div class="caja_proteinas_lacteos" id="caja_proteinas_lacteos">
                        <h1 class="boton_cerrar_caja_lacteos" id="boton_cerrar_caja_lacteos">←</h1>
                        <h1 class="title_proteinas">Lacteos</h1>
                        </div>

                        <div class="caja_proteinas_FruVerd" id="caja_proteinas_FruVerd">
                        <h1 class="boton_cerrar_caja_FruVerd" id="boton_cerrar_caja_FruVerd">←</h1>
                        <img class="logo_frutasyvegetales" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/bb92e1aaae6cc8f06d5c8ab37d9091708dfa0746/Group%2013%20(1).svg"></img>
                        <h1 class="title_proteinas_fruverd">FRUTAS Y VEGETALES</h1>

                            <div class="caja_guayaba">
                            <img class="Gimg1" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/3114dd64c0ad5d7b55cd1a50b6dcbc98292aa229/Group%2014%20(1).svg"></img>
                            <img class="Gimg2" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/3114dd64c0ad5d7b55cd1a50b6dcbc98292aa229/image%2037.svg"></img>
                            <img class="Gimg3" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/3114dd64c0ad5d7b55cd1a50b6dcbc98292aa229/Subtract.svg"></img>
                            <p class="titulo_guayaba">`+Guayaba[0].nombre+`</p>
                            <p class="gp2">`+Guayaba[0].calorias+`</p>
                            <p class="gp3">`+Guayaba[0].libras+`</p>
                            <img class="Gimg4" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/a5fb0ba5e21e1c741b2de3ed717a650d8ba23a6e/Group%2015%20(1).svg"></img>
                            <img class="Gimg5" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/a5fb0ba5e21e1c741b2de3ed717a650d8ba23a6e/Group%2016%20(1).svg"></img>
                            <img class="Gimg6" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/a5fb0ba5e21e1c741b2de3ed717a650d8ba23a6e/Group%2017%20(1).svg"></img>
                            <p class="gp4"><strong>`+Guayaba[0].proteina+`</strong> Proteína</p>
                            <p class="gp5"><strong>`+Guayaba[0].lipidos+`</strong> Lipidos</p>
                            <p class="gp6"><strong>`+Guayaba[0].carbohidratos+`</strong> Carbohidratos</p> 
                            <h1 class="GVit">Vitaminas</h1>
                            
                            <p class="gp7">`+Guayaba[0].vitaminas+`</p>
                            <p class="gp8"> `+Guayaba[0].vitamina2+`</p>
                            <p class="gp9"> `+Guayaba[0].vitamina3+`</p>
                            <p class="gp10"> `+Guayaba[0].vitamina4+`</p>
   
                            </div>

                          <div class="caja_Aceitunas">
                            <img class="Aceimg1" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/687d91aba65c0d434c3783ed858acc2b464ace56/Group%2018%20(1).svg"></img>
                            <img class="Aceimg2" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/3114dd64c0ad5d7b55cd1a50b6dcbc98292aa229/image%2037.svg"></img>
                            <img class="Aceimg3" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/687d91aba65c0d434c3783ed858acc2b464ace56/Subtract%20(1).svg"></img>
                            <p class="titulo_aceituna">`+Aceitunas[0].nombre+`</p>
                            <p class="Acep2">`+Aceitunas[0].calorias+`</p>
                            <p class="Acep3">`+Aceitunas[0].libras+`</p>
                            <img class="Aceimg4" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/81e199bbd4ef6502c278305ee12c5aa2fef7186e/Group%2019%20(1).svg"></img>
                            <img class="Aceimg5" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/81e199bbd4ef6502c278305ee12c5aa2fef7186e/Group%2022%20(1).svg"></img>
                            <img class="Aceimg6" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/81e199bbd4ef6502c278305ee12c5aa2fef7186e/Group%2021%20(1).svg"></img>
                            <p class="Acep4"><strong>`+Aceitunas[0].proteina+`</strong> Proteína</p>
                            <p class="Acep5"><strong>`+Aceitunas[0].lipidos+`</strong> Lipidos</p>
                            <p class="Acep6"><strong>`+Aceitunas[0].carbohidratos+`</strong> Carbohidratos</p>
                            <h1 class="AceVit">Vitaminas</h1>
                            
                            <p class="Acep7">`+Aceitunas[0].vitaminas+`</p>
                            <p class="Acep8"> `+Aceitunas[0].vitamina2+`</p>
        
                           </div>   
                           
                           <div class="caja_platano">
                            <img class="Aceimg1" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/415ba2aed28e31a6e4bcde0c30471e06d7733ec6/Group%2023%20(1).svg"></img>
                            <img class="Aceimg2" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/3114dd64c0ad5d7b55cd1a50b6dcbc98292aa229/image%2037.svg"></img>
                            <img class="Aceimg3" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/415ba2aed28e31a6e4bcde0c30471e06d7733ec6/Subtract%20(2).svg"></img>
                            <p class="titulo_aceituna">`+Platano[0].nombre+`</p>
                            <p class="Acep2">`+Platano[0].calorias+`</p>
                            <p class="Acep3">`+Platano[0].libras+`</p>
                            <img class="Aceimg4" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/fe72a2c6da371e85e2a8d993f9e63ee8dd369b2a/Group%2024.svg"></img>
                            <img class="Aceimg5" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/fe72a2c6da371e85e2a8d993f9e63ee8dd369b2a/Group%2025.svg"></img>
                            <img class="Aceimg6" src="https://raw.githubusercontent.com/CMiranda14/img_aps_frutasVegetaless/fe72a2c6da371e85e2a8d993f9e63ee8dd369b2a/Group%2026.svg"></img>
                            <p class="Acep4"><strong>`+Platano[0].proteina+`</strong> Proteína</p>
                            <p class="Acep5"><strong>`+Platano[0].lipidos+`</strong> Lipidos</p>
                            <p class="Acep6"><strong>`+Platano[0].carbohidratos+`</strong> Carbohidratos</p>
                            <h1 class="AceVit">Vitaminas</h1>
                            
                            <p class="plap7">`+Platano[0].vitaminas+`</p>
                            <p class="plap8"> `+Platano[0].vitamina2+`</p>
                            <p class="plap9"> `+Platano[0].vitamina3+`</p>
                            <p class="plap10"> `+Platano[0].vitamina4+`</p>
        
                           </div> 
                        </div>
                                
                </div>`
                
                ;



    let div3 = '<div class="caja_wireframes4" id="caja_wireframes4">'+'<h1 class="title1">'+'Lípidos'+'</h1>'+'</div>';
    let div4 = '<div class="caja_wireframes5" id="caja_wireframes5">'+'<h1 class="title1">'+'Vitaminas'+'</h1>'+'</div>';
    let div5 = '<div class="caja_wireframes6" id="caja_wireframes6">'+'<h1 class="title1">'+'By Quick Learning'+'</h1>'+'</div>';



    perfil.innerHTML = div + div1 + div2 + div3 + div4 + div5;
}

Perfil()


/*-----------------Activaciones Caja Carbohidratos------------*/

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

/*----------------------------------------------------------------*/

function activar_video_carbohidratos() {
    var x = document.getElementById("caja_video_carbohidratos");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

video_carbohidratos.addEventListener('click' ,activar_video_carbohidratos);

function desactivar_video_carbohidratos() {
    var x = document.getElementById("caja_video_carbohidratos");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

boton_cerrar_video_carbohidratos.addEventListener('click' ,desactivar_video_carbohidratos);

/*----------------------------------------------------------------*/

function activar_cereales() {
    var x = document.getElementById("caja_video_cerales");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

carbohidratos_cereales.addEventListener('click' ,activar_cereales);

function desactivar_cereales() {
    var x = document.getElementById("caja_video_cerales");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

boton_cerrar_cerales.addEventListener('click' ,desactivar_cereales);

/*----------------------------------------------------------------*/

function activar_Frutas2() {
    var x = document.getElementById("caja_video_frutas");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

carbohidratos_frutas.addEventListener('click' ,activar_Frutas2);

function desactivar_Frutas2() {
    var x = document.getElementById("caja_video_frutas");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

boton_cerrar_frutas.addEventListener('click' ,desactivar_Frutas2);

/*----------------------------------------------------------------*/

function activar_legumbres() {
    var x = document.getElementById("caja_video_legumbres");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

carbohidratos_legumbres.addEventListener('click' ,activar_legumbres);

function desactivar_legumbres() {
    var x = document.getElementById("caja_video_legumbres");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

boton_cerrar_legumbres.addEventListener('click' ,desactivar_legumbres);


/*--------------------------------------------------------*/
/*-----------------Activaciones Caja Proteinas------------*/
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



function activar_video_proteinas() {
    var x = document.getElementById("caja_video_proteinas");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

video_proteinas.addEventListener('click' ,activar_video_proteinas);

function desactivar_video_proteinas() {
    var x = document.getElementById("caja_video_proteinas");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

boton_cerrar_video_proteinas.addEventListener('click' ,desactivar_video_proteinas);

/*----------------------------------------------------------------*/

function activar_caja_carnes() {
    var x = document.getElementById("caja_proteinas_carne");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

proteinas_carne.addEventListener('click' ,activar_caja_carnes);

function desactivar_caja_carnes() {
    var x = document.getElementById("caja_proteinas_carne");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

boton_cerrar_caja_carne.addEventListener('click' ,desactivar_caja_carnes);

/*----------------------------------------------------------------*/

function activar_caja_lacteos() {
    var x = document.getElementById("caja_proteinas_lacteos");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

proteinas_lacteos.addEventListener('click' ,activar_caja_lacteos);

function desactivar_caja_lacteos() {
    var x = document.getElementById("caja_proteinas_lacteos");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

boton_cerrar_caja_lacteos.addEventListener('click' ,desactivar_caja_lacteos);

/*----------------------------------------------------------------*/

function activar_caja_FrutasVerduras() {
    var x = document.getElementById("caja_proteinas_FruVerd");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

proteinas_frutas.addEventListener('click' ,activar_caja_FrutasVerduras);

function desactivar_caja_FrutasVerduras() {
    var x = document.getElementById("caja_proteinas_FruVerd");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

boton_cerrar_caja_FruVerd.addEventListener('click' ,desactivar_caja_FrutasVerduras);

/***************************************************************************/

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