
import {avena, harina, arroz, arverja} from './datas_bromatologia.js';
import {Cerdo, pollo, res, frijol} from './datas_bromatologia.js';
import {leche, Crema, yogurt, lentejas}  from './datas_bromatologia.js';
import {sardinas, Salmón, MojarraFresca} from './datas_bromatologia.js';
import { manzana, mango, papa } from './datas_bromatologia.js';
import {matriz_video_proteinas, Guayaba, Aceitunas, Platano, matriz_video_carbohidratos, matriz_video_lipidos} from './datas_bromatologia.js';



function Perfil(){
    let perfil = document.querySelector("#perfil");

    let div = '<div class="menu">'+     
        '<img class="logo" src="https://raw.githubusercontent.com/CMiranda14/img_aps/405fb7cbd67362ed30a64f0ca7747deebf078260/Logo.svg"></img>'+

        `<div class="busqueda" id="mheader">
            <h1 class="lupa">🔍︎
                <ul>
                    <li id="proteinas_frutas2" >Frutas y Verduras</li>
                </ul>     
            </h1>
        </div>`+

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


    `<div class="caja_proteinas_FruVerd" id="caja_proteinas_FruVerd2">
                        <h1 class="boton_cerrar_caja_FruVerd" id="boton_cerrar_caja_FruVerd2">←</h1>
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
                        </div>`+

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
                <iframe class="video_sintesis_proteinas" width="573" height="262" src="https://www.youtube.com/embed/MimSVw7tJHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                    <img class="imgArroz" src="https://github.com/maria4Q/APS/blob/main/trigo.png?raw=true"></img>
                    <h1 class="title_cereales">CEREALES</h1>
                        <br> <br> <br> <br>
                    <h1 class="title_cereales">HARINAS Y </h1>
                        <br> <br> <br> <br>
                    <h1 class="title_cereales">PASTAS</h1>



                    <div class="Avena">
                        <img class="imgCerd" src="https://github.com/maria4Q/APS/blob/main/Avena.png?raw=true"></img>
                        <h1 class="ti">`+avena[0].nombre+`</h1>
                        <img class="calorias" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                        <p class="kcal">`+avena[0].calorias+`</p>
                        <img class="lb" src="https://github.com/maria4Q/APS/blob/main/pesaM.png?raw=true"></img>
                        <p class="peso">`+avena[0].libras+`</p>
                        
                        <img class="pr" src="https://github.com/maria4Q/APS/blob/main/PorteinasAvena.png?raw=true"></img>
                        <p class="pr-text">`+avena[0].proteina+`</p>
                        <p class="text">Proteinas</p>
                        
                        <div class="div-lip">
                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/lipidosAvena.png?raw=true"></img>
                            <p class="pr-text">`+avena[0].lipidos+`</p>
                            <p class="text">Lípidos</p>
                        </div>
                        <div class="div-carb">
                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbohidratosAvena.png?raw=true"></img>
                            <p class="pr-text">`+avena[0].carbohidratos+`</p>
                            <p class="text">Carbohidratos</p>
                        </div>

                        <p class="text-vit">Vitaminas</p>

                        <div class="vitaminas-Az">
                            <p>`+avena[0].vitaminas+`</p>
                            <p>`+avena[0].vitamina2+`</p>
                            <p>`+avena[0].vitamina3+`</p>
                            <p>`+avena[0].vitamina4+`</p>
                            <p>`+avena[0].vitamina5+`</p>
                            <p>`+avena[0].vitamina6+`</p>
                        </div>
                    </div>

                    
                    <div class="harina">
                        <img class="imgCerd" src="https://raw.githubusercontent.com/maria4Q/APS/a4b4eecf93b6081bfe48e5092c1e22e9e8586ba4/harina.svg"></img>
                        <h1 class="ti">`+harina[0].nombre+`</h1>
                        <img class="calorias" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                        <p class="kcal">`+harina[0].calorias+`</p>
                        <img class="lb" src="https://github.com/maria4Q/APS/blob/main/PesaAmarilla.png?raw=true"></img>
                        <p class="peso">`+harina[0].libras+`</p>
                
                        <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                        <p class="pr-text">`+harina[0].proteina+`</p>
                        <p class="text">Proteinas</p>
               
                        <div class="div-lip">
                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                            <p class="pr-text">`+harina[0].lipidos+`</p>
                            <p class="text">Lípidos</p>
                        </div>

                        <div class="div-carb">
                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbo.png?raw=true"></img>
                            <p class="pr-text">`+harina[0].carbohidratos+`</p>
                            <p class="text">Carbohidratos</p>
                        </div>

                        <p class="text-vit">Vitaminas</p>
             

                        <div class="vitaminas-Ama">
                            <p>`+harina[0].vitamina1+`</p>
                            <p>`+harina[0].vitamina2+`</p>
                            <p>`+harina[0].vitamina3+`</p>
                        </div>
                    </div>

                    <div class="arroz">
                                <img class="imgpollo" src="https://raw.githubusercontent.com/maria4Q/APS/e839b1e2701e5e3ff5ebbf7d708274883c160a19/arroz.svg"></img>
                                <img class="imgpollo-2" src="https://github.com/maria4Q/APS/blob/main/arroz.png?raw=true"></img>
                                <h1 class="title-arroz">`+arroz[0].nombre+`</h1>
                                <img class="calorias_pollo" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                                <p class="Kcal_P">`+arroz[0].calorias+`</p>
                                <img class="lb-p" src="https://raw.githubusercontent.com/maria4Q/APS/faa6b49c5d54b53f0530ef658a4c08b848ec2e87/lb.svg"></img>
                                <p class="peso-p">`+arroz[0].libras+`</p>

                        
                                <div class="div-proteinas">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/Prote%C3%ADnas.png?raw=true"></img>
                                    <p class="pr-text">`+arroz[0].proteina+`</p>
                                    <p class="text">Proteinas</p>
                                </div>

                                <div class="div-lipidos">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/L%C3%ADpidos.png?raw=true"></img>
                                    <p class="pr-text">`+arroz[0].lipidos+`</p>
                                    <p class="text">Lípidos</p>
                                </div>

                                
                                <div class="div-carbohidratos">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbohidratos.png?raw=true"></img>
                                    <p class="pr-text">`+arroz[0].carbohidratos+`</p>
                                    <p class="text">Carbohidratos</p>
                                </div>

                                <p class="text-vtm">Vitaminas</p>

                                <div class="vitaminas-P">
                                    <p>`+arroz[0].vitamina1+`</p>
                                    <p>`+arroz[0].vitamina2+`</p>
                                    <p>`+arroz[0].vitamina3+`</p>
                                    <p>`+arroz[0].vitamina4+`</p>
                                    <p>`+arroz[0].vitamina5+`</p>
                                    <p>`+arroz[0].vitamina6+`</p>
                                </div>
                            </div>


                </div>


                <div class="caja_video_frutas" id="caja_video_frutas">
                    <h1 class="boton_cerrar_frutas" id="boton_cerrar_frutas">←</h1>
                    <img class="imgfruits" src="https://raw.githubusercontent.com/maria4Q/APS/6b8d5499b1a43297cc2d41cb431450b8d274885b/fruits.svg"></img>
                    <h1 class="title_frutas">FRUTAS Y</h1>
                    <br> <br> <br> <br>
                    <h1 class="title_frutas">VERDURAS</h1>
            
                    <div class="manzana">
                        <img class="imgCerd" src="https://raw.githubusercontent.com/maria4Q/APS/4747b1cc2daed0877a394d2e6e90c261f9ac6ef3/manzana.svg"></img>
                        <h1 class="ti">`+manzana[0].nombre+`</h1>
                        <img class="calorias" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                        <p class="kcal">`+manzana[0].calorias+`</p>
                        <img class="lb" src="https://github.com/maria4Q/APS/blob/main/pesaM.png?raw=true"></img>
                        <p class="peso">`+manzana[0].libras+`</p>
                        
                        <img class="pr" src="https://github.com/maria4Q/APS/blob/main/ProteinasManzana.png?raw=true"></img>
                        <p class="pr-text">`+manzana[0].proteina+`</p>
                        <p class="text">Proteinas</p>
                        
                        <div class="div-lip">
                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/lipidosManzanas.png?raw=true"></img>
                            <p class="pr-text">`+manzana[0].lipidos+`</p>
                            <p class="text">Lípidos</p>
                        </div>
                        <div class="div-carb">
                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbohidratosPapa.png?raw=true"></img>
                            <p class="pr-text">`+manzana[0].carbohidratos+`</p>
                            <p class="text">Carbohidratos</p>
                        </div>

                        <p class="text-vit">Vitaminas</p>

                        <div class="vitaminas-Az">
                            <p>`+manzana[0].vitaminas+`</p>
                            <p>`+manzana[0].vitamina2+`</p>
                            <p>`+manzana[0].vitamina3+`</p>
                            <p>`+manzana[0].vitamina4+`</p>
                        </div>
                    </div>

                    
                    <div class="mango">
                        <img class="imgCerd" src="https://raw.githubusercontent.com/maria4Q/APS/b7de19b138236b8b032c497baa40f23fa66e7677/mango.svg"></img>
                        <h1 class="ti">`+mango[0].nombre+`</h1>
                        <img class="calorias" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                        <p class="kcal">`+mango[0].calorias+`</p>
                        <img class="lb" src="https://github.com/maria4Q/APS/blob/main/PesaAmarilla.png?raw=true"></img>
                        <p class="peso">`+mango[0].libras+`</p>
                
                        <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                        <p class="pr-text">`+mango[0].proteina+`</p>
                        <p class="text">Proteinas</p>
               
                        <div class="div-lip">
                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                            <p class="pr-text">`+mango[0].lipidos+`</p>
                            <p class="text">Lípidos</p>
                        </div>

                        <div class="div-carb">
                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbo.png?raw=true"></img>
                            <p class="pr-text">`+mango[0].carbohidratos+`</p>
                            <p class="text">Carbohidratos</p>
                        </div>

                        <p class="text-vit">Vitaminas</p>
             

                        <div class="vitaminas-Ama">
                            <p>`+mango[0].vitamina1+`</p>
                            <p>`+mango[0].vitamina2+`</p>
                            <p>`+mango[0].vitamina3+`</p>
                            <p>`+mango[0].vitamina4+`</p>
                            <p>`+mango[0].vitamina5+`</p>
                        </div>
                    </div>

                    <div class="papa">
                                <img class="imgpollo" src="https://raw.githubusercontent.com/maria4Q/APS/7af67662b5af3ec80a4fc532d5b81c1d86ee4575/papa.svg"></img>
                                <img class="imgpollo-2" src="https://github.com/maria4Q/APS/blob/main/papaphone.png?raw=true"></img>
                                <h1 class="title-Po">`+papa[0].nombre+`</h1>
                                <img class="calorias_pollo" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                                <p class="Kcal_P">`+papa[0].calorias+`</p>
                                <img class="lb-p" src="https://raw.githubusercontent.com/maria4Q/APS/faa6b49c5d54b53f0530ef658a4c08b848ec2e87/lb.svg"></img>
                                <p class="peso-p">`+papa[0].libras+`</p>

                        
                                <div class="div-proteinas">
                                    <img class="pr" src="https://raw.githubusercontent.com/maria4Q/APS/7b0ae97c31abc9d0bc06cc2685500bf4100480d0/proteinasPapa.svg"></img>
                                    <p class="pr-text">`+papa[0].proteina+`</p>
                                    <p class="text">Proteinas</p>
                                </div>

                                <div class="div-lipidos">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/lipidosPapa.png?raw=true"></img>
                                    <p class="pr-text">`+papa[0].lipidos+`</p>
                                    <p class="text">Lípidos</p>
                                </div>

                                
                                <div class="div-carbohidratos">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbohidratosPapa.png?raw=true"></img>
                                    <p class="pr-text">`+papa[0].carbohidratos+`</p>
                                    <p class="text">Carbohidratos</p>
                                </div>

                                <p class="text-vtm">Vitaminas</p>

                                <div class="vitaminas-P">
                                    <p>`+papa[0].vitamina1+`</p>
                                    <p>`+papa[0].vitamina2+`</p>
                                    <p>`+papa[0].vitamina3+`</p>
                                    <p>`+papa[0].vitamina4+`</p>
                                    <p>`+papa[0].vitamina5+`</p>
                                    <p>`+papa[0].vitamina6+`</p>
                                </div>
                            </div>
                </div>

                <div class="caja_video_legumbres" id="caja_video_legumbres">
                    <h1 class="boton_cerrar_legumbres" id="boton_cerrar_legumbres">←</h1>
                    <h1 class="title_legumbres">LEGUMBRES</h1>
                    <img class="imgLegumbres" src="https://raw.githubusercontent.com/maria4Q/APS/d6fa595c801b4dae77a95b526bff61b34491742f/legumbre.svg"></img>
            
                    <div class="arveja">
                        <img class="imgCerd" src="https://raw.githubusercontent.com/maria4Q/APS/595d2414ebc1754b9693d2b7e70e311bcee33695/Arveja.svg"></img>
                        <h1 class="ti">`+arverja[0].nombre+`</h1>
                        <img class="calorias" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                        <p class="kcal">`+arverja[0].calorias+`</p>
                        <img class="lb" src="https://github.com/maria4Q/APS/blob/main/pesaM.png?raw=true"></img>
                        <p class="peso">`+arverja[0].libras+`</p>
                        
                        <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                        <p class="pr-text">`+arverja[0].proteina+`</p>
                        <p class="text">Proteinas</p>
                        
                        <div class="div-lip">
                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                            <p class="pr-text">`+arverja[0].lipidos+`</p>
                            <p class="text">Lípidos</p>
                        </div>
                        <div class="div-carb">
                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbo.png?raw=true"></img>
                            <p class="pr-text">`+arverja[0].carbohidratos+`</p>
                            <p class="text">Carbohidratos</p>
                        </div>

                        <p class="text-vit">Vitaminas</p>

                        <div class="vitaminas-Az">
                            <p>`+arverja[0].vitamina1+`</p>
                            <p>`+arverja[0].vitamina2+`</p>
                            <p>`+arverja[0].vitamina3+`</p>
                            <p>`+arverja[0].vitamina4+`</p>
                        </div>
                    </div>

                    
                    <div class="harina">
                        <img class="imgCerd" src="https://raw.githubusercontent.com/maria4Q/APS/39ff530eb4304c88f46ef1a8a78593d4319d248e/frijol.svg"></img>
                        <h1 class="ti">`+frijol[0].nombre+`</h1>
                        <img class="calorias" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                        <p class="kcal">`+frijol[0].calorias+`</p>
                        <img class="lb" src="https://github.com/maria4Q/APS/blob/main/PesaAmarilla.png?raw=true"></img>
                        <p class="peso">`+frijol[0].libras+`</p>
                
                        <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                        <p class="pr-text">`+frijol[0].proteina+`</p>
                        <p class="text">Proteinas</p>
               
                        <div class="div-lip">
                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                            <p class="pr-text">`+frijol[0].lipidos+`</p>
                            <p class="text">Lípidos</p>
                        </div>

                        <div class="div-carb">
                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbo.png?raw=true"></img>
                            <p class="pr-text">`+frijol[0].carbohidratos+`</p>
                            <p class="text">Carbohidratos</p>
                        </div>

                        <p class="text-vit">Vitaminas</p>
             

                        <div class="vitaminas-Ama">
                            <p>`+frijol[0].vitamina1+`</p>
                            <p>`+frijol[0].vitamina2+`</p>
                            <p>`+frijol[0].vitamina3+`</p>
                            <p>`+frijol[0].vitamina4+`</p>
                            <p>`+frijol[0].vitamina5+`</p>
                        </div>
                    </div>

                    <div class="lentejas">
                                <img class="imgpollo" src="https://raw.githubusercontent.com/maria4Q/APS/67489bd5f53bbcc1f64678504760bed1c6c7f4e6/lenteja.svg"></img>
                                <img class="imgpollo-2" src="https://raw.githubusercontent.com/maria4Q/APS/d6fa595c801b4dae77a95b526bff61b34491742f/lenteja.svg"></img>
                                <h1 class="title-Po">`+lentejas[0].nombre+`</h1>
                                <img class="calorias_pollo" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                                <p class="Kcal_P">`+lentejas[0].calorias+`</p>
                                <img class="lb-p" src="https://raw.githubusercontent.com/maria4Q/APS/faa6b49c5d54b53f0530ef658a4c08b848ec2e87/lb.svg"></img>
                                <p class="peso-p">`+lentejas[0].libras+`</p>

                        
                                <div class="div-proteinas">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                                    <p class="pr-text">`+lentejas[0].proteina+`</p>
                                    <p class="text">Proteinas</p>
                                </div>

                                <div class="div-lipidos">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                                    <p class="pr-text">`+lentejas[0].lipidos+`</p>
                                    <p class="text">Lípidos</p>
                                </div>

                                
                                <div class="div-carbohidratos">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                                    <p class="pr-text">`+lentejas[0].carbohidratos+`</p>
                                    <p class="text">Carbohidratos</p>
                                </div>

                                <p class="text-vtm">Vitaminas</p>

                                <div class="vitaminas-P">
                                    <p>`+lentejas[0].vitamina1+`</p>
                                    <p>`+lentejas[0].vitamina2+`</p>
                                    <p>`+lentejas[0].vitamina3+`</p>
                                    <p>`+lentejas[0].vitamina4+`</p>
                                    <p>`+lentejas[0].vitamina5+`</p>
                                    <p>`+lentejas[0].vitamina6+`</p>
                                </div>
                            </div>

























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
                        <img class="proteinas_pescado" id="proteinas_pescado" src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/4877c4bbc8128d827454db186b06a7d09c77bbc0/Group%2014.svg"></img>
                        <img class="proteinas_frutas" id="proteinas_frutas" src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/4877c4bbc8128d827454db186b06a7d09c77bbc0/Group%2016.svg"></img>



                        <div class="caja_video_proteinas" id="caja_video_proteinas">
                        <h1 class="boton_cerrar_video_proteinas" id="boton_cerrar_video_proteinas">X</h1>
                        <iframe class="video_sintesis_proteinas" width="573" height="262" src="https://www.youtube.com/embed/hzEWebkU5ls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                            <img class="carne" src="https://raw.githubusercontent.com/maria4Q/APS/5191924bc62f3786da3f1781190928e464a1a62b/carne.svg"></img>
                            <h1 class="title_carne">CARNES</h1>
                            
                            <div class="cerdo">
                                <img class="imgCerd" src="https://raw.githubusercontent.com/maria4Q/APS/990dced6fc0a56edd3d3a080679c79c2fae8700a/imCarne.svg"></img>
                                <h1 class="ti">`+Cerdo[0].nombre+`</h1>
                                <img class="calorias" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                                <p class="kcal">`+Cerdo[0].calorias+`</p>
                                <img class="lb" src="https://raw.githubusercontent.com/maria4Q/APS/faa6b49c5d54b53f0530ef658a4c08b848ec2e87/lb.svg"></img>
                                <p class="peso">`+Cerdo[0].libras+`</p>
                                
                                <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                                <p class="pr-text">`+Cerdo[0].proteina+`</p>
                                <p class="text">Proteinas</p>
                                
                                <div class="div-lip">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                                    <p class="pr-text">`+Cerdo[0].lipidos+`</p>
                                    <p class="text">Lípidos</p>
                                </div>
                                <div class="div-carb">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbo.png?raw=true"></img>
                                    <p class="pr-text">`+Cerdo[0].carbohidratos+`</p>
                                    <p class="text">Carbohidratos</p>
                                </div>

                                <p class="text-vit">Vitaminas</p>
            
                                <div class="vitaminas">
                                    <p>`+Cerdo[0].vitaminas+`</p>
                                    <p>`+Cerdo[0].vitamina2+`</p>
                                    <p>`+Cerdo[0].vitamina3+`</p>
                                    <p>`+Cerdo[0].vitamina4+`</p>
                                    <p>`+Cerdo[0].vitamina5+`</p>
                                    <p>`+Cerdo[0].vitamina6+`</p>
                                </div>
                            </div>


                            <div class="res">
                                <img class="imgCerd" src="https://raw.githubusercontent.com/maria4Q/APS/39ae1d7c40ad3721b79861fc46a7b83249dce05d/res.svg"></img>
                                <h1 class="ti">`+res[0].nombre+`</h1>
                                <img class="calorias" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                                <p class="kcal">`+res[0].calorias+`</p>
                                <img class="lb" src="https://github.com/maria4Q/APS/blob/main/PesaAmarilla.png?raw=true"></img>
                                <p class="peso">`+res[0].libras+`</p>
                            
                                <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                                <p class="pr-text">`+res[0].proteina+`</p>
                                <p class="text">Proteinas</p>
                           
                                <div class="div-lip">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                                    <p class="pr-text">`+res[0].lipidos+`</p>
                                    <p class="text">Lípidos</p>
                                </div>

                                <div class="div-carb">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbo.png?raw=true"></img>
                                    <p class="pr-text">`+res[0].carbohidratos+`</p>
                                    <p class="text">Carbohidratos</p>
                                </div>

                                <p class="text-vit">Vitaminas</p>
                         

                                <div class="vitaminas">
                                    <p>`+res[0].vitamina+`</p>
                                    <p>`+res[0].vitamina1+`</p>
                                    <p>`+res[0].vitamina2+`</p>
                                    <p>`+res[0].vitamina3+`</p>
                                    <p>`+res[0].vitamina4+`</p>
                                    <p>`+res[0].vitamina5+`</p>
                                </div>
                           </div>


                
                            <div class="pollo">
                                <img class="imgpollo" src="https://raw.githubusercontent.com/maria4Q/APS/3c2bd6a3ec571080855705e68e2cce131d53b42d/pollo.svg"></img>
                                <img class="imgpollo-2" src="https://raw.githubusercontent.com/maria4Q/APS/a80b03b3e8531f15afda30af60382a470e68d9d3/polloSmall.svg"></img>
                                <h1 class="title-Po">`+pollo[0].nombre+`</h1>
                                <img class="calorias_pollo" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                                <p class="Kcal_P">`+pollo[0].calorias+`</p>
                                <img class="lb-p" src="https://github.com/maria4Q/APS/blob/main/pesaM.png?raw=true"></img>
                                <p class="peso-p">`+pollo[0].libras+`</p>

                        
                                <div class="div-proteinas">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                                    <p class="pr-text">`+pollo[0].proteina+`</p>
                                    <p class="text">Proteinas</p>
                                </div>

                                <div class="div-lipidos">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                                    <p class="pr-text">`+pollo[0].lipidos+`</p>
                                    <p class="text">Lípidos</p>
                                </div>

                                
                                <div class="div-carbohidratos">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbo.png?raw=true"></img>
                                    <p class="pr-text">`+pollo[0].carbohidratos+`</p>
                                    <p class="text">Carbohidratos</p>
                                </div>

                                <p class="text-vtm">Vitaminas</p>

                                <div class="vitaminas-AzP">
                                    <p>`+res[0].vitamina+`</p>
                                    <p>`+res[0].vitamina1+`</p>
                                    <p>`+res[0].vitamina2+`</p>
                                    <p>`+res[0].vitamina3+`</p>
                                    <p>`+res[0].vitamina4+`</p>
                                    <p>`+res[0].vitamina5+`</p>
                                </div>
                            </div>

                        </div>

                        <div class="caja_proteinas_lacteos" id="caja_proteinas_lacteos">
                            <h1 class="boton_cerrar_caja_lacteos" id="boton_cerrar_caja_lacteos">←</h1>
                            <img class="img-leche" src="https://raw.githubusercontent.com/maria4Q/APS/4126cf7706ccab6a4c6ee4e2532ecf1e1b45db32/milk.svg"></img>
                            <h1 class="title_leche">LÁCTEOS Y</h1>
                            <br>
                            <br>
                            <br>
                            <br>
                            <h1 class="title_leche">DERIVADOS</h1>

                            <div class="leche">
                            <img class="imgCerd" src="https://raw.githubusercontent.com/maria4Q/APS/e1a8803ef808ef2162f9cebb96b9217673116667/LecheP.svg"></img>
                            <h1 class="ti">`+leche[0].nombre+`</h1>
                            <img class="calorias" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                            <p class="kcal">`+leche[0].calorias+`</p>
                            <img class="lb" src="https://raw.githubusercontent.com/maria4Q/APS/faa6b49c5d54b53f0530ef658a4c08b848ec2e87/lb.svg"></img>
                            <p class="peso">`+leche[0].libras+`</p>


                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                            <p class="pr-text">`+leche[0].proteina+`</p>
                            <p class="text">Proteinas</p>
                    
                            <div class="div-lip">
                                <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                                <p class="pr-text">`+leche[0].lipidos+`</p>
                                <p class="text">Lípidos</p>
                            </div>

                            <div class="div-carb">
                                <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbo.png?raw=true"></img>
                                <p class="pr-text">`+leche[0].carbohidratos+`</p>
                                <p class="text">Carbohidratos</p>
                            </div>

                               
                            <p class="text-vit">Vitaminas</p>
                     

                            <div class="vitaminas">
                                <p>`+leche[0].vitamina1+`</p>
                                <p>`+leche[0].vitamina2+`</p>
                                <p>`+leche[0].vitamina3+`</p>
                                <p>`+leche[0].vitamina4+`</p>
                                <p>`+leche[0].vitamina5+`</p>  
                            </div>

                        </div>

                        <div class="crema">
                            <img class="imgCerd" src="https://raw.githubusercontent.com/maria4Q/APS/9cdf824c9b8ef0be703ad7d6bddf09192c425979/crema.svg"></img>
                            <h1 class="ti">`+Crema[0].nombre+`</h1>
                            <img class="calorias" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                            <p class="kcal">`+Crema[0].calorias+`</p>
                            <img class="lb" src="https://github.com/maria4Q/APS/blob/main/pesaM.png?raw=true"></img>
                            <p class="peso">`+Crema[0].libras+`</p>


                            <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                            <p class="pr-text">`+Crema[0].proteina+`</p>
                            <p class="text">Proteinas</p>

                            <div class="div-lip">
                                <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                                <p class="pr-text">`+Crema[0].lipidos+`</p>
                                <p class="text">Lípidos</p>
                            </div>

                            <div class="div-carb">
                                <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbo.png?raw=true"></img>
                                <p class="pr-text">`+Crema[0].carbohidratos+`</p>
                                <p class="text">Carbohidratos</p>
                            </div>

                            <p class="text-vit">Vitaminas</p>
                     

                            <div class="vitaminas">
                                <p>`+Crema[0].vitamina1+`</p>
                                <p>`+Crema[0].vitamina2+`</p>
                                <p>`+Crema[0].vitamina3+`</p>
                                <p>`+Crema[0].vitamina4+`</p>
                                <p>`+Crema[0].vitamina5+`</p>
                                <p>`+Crema[0].vitamina6+`</p>
                            </div>

                        </div>

                        <div class="yogurt">
                            <img class="imgpollo" src="https://raw.githubusercontent.com/maria4Q/APS/148ffa55e34384fe9964ac41d4db4f68948de3d8/yogurt.svg"></img>
                            <img class="imgpollo-2" src="https://github.com/maria4Q/APS/blob/main/yogurt.png?raw=true"></img>
                            <h1 class="title-Po">`+yogurt[0].nombre+`</h1>
                        
                            <img class="calorias_pollo" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                            <p class="Kcal_P">`+yogurt[0].calorias+`</p>
                            <img class="lb-p" src="https://github.com/maria4Q/APS/blob/main/PesaAmarilla.png?raw=true"></img>
                            <p class="peso-p">`+yogurt[0].libras+`</p>

                            <div class="div-proteinas">
                                <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                                <p class="pr-text">`+yogurt[0].proteina+`</p>
                                <p class="text">Proteinas</p>
                            </div>

                            <div class="div-lipidos">
                                <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                                <p class="pr-text">`+yogurt[0].lipidos+`</p>
                                <p class="text">Lípidos</p>
                            </div>

                            <div class="div-carbohidratos">
                                <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                                <p class="pr-text">`+yogurt[0].carbohidratos+`</p>
                                <p class="text">Carbohidratos</p>
                            </div>

                            <p class="text-vtm">Vitaminas</p>

                            <div class="vitaminas-P">
                                <p>`+yogurt[0].vitamina1+`</p>
                                <p>`+yogurt[0].vitamina2+`</p>
                                <p>`+yogurt[0].vitamina3+`</p>
                                <p>`+yogurt[0].vitamina4+`</p>
                                <p>`+yogurt[0].vitamina5+`</p>
                            </div>
                        </div>  
                    </div>
                    
                    
                    <div class="caja_proteinas_pescados" id="caja_proteinas_pescados">
                            <h1 class="boton_cerrar_caja_pescados" id="boton_cerrar_caja_pescados">←</h1>
                            <img class="pescado" src="https://raw.githubusercontent.com/maria4Q/APS/0062882e7a8c53f61a8ddc3a7b1464f25443a79e/pez.svg"></img>
                            <h1 class="title_pescado">PESCADOS</h1>
                            
                            <div class="cerdo">
                             <img class="imgCerd" src="https://github.com/maria4Q/APS/blob/main/sardinas.png?raw=true"></img>
                             <h1 class="ti">`+sardinas[0].nombre+`</h1>
                             <img class="calorias" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                             <p class="kcal">`+sardinas[0].calorias+`</p>
                             <img class="lb" src="https://github.com/maria4Q/APS/blob/main/pesaM.png?raw=true"></img>
                             <p class="peso">`+sardinas[0].libras+`</p>
                             
                             <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                             <p class="pr-text">`+sardinas[0].proteina+`</p>
                             <p class="text">Proteinas</p>
                            
                             <div class="div-lip">
                                <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                                <p class="pr-text">`+sardinas[0].lipidos+`</p>
                                <p class="text">Lípidos</p>
                             </div>

                             <div class="div-carb">
                                <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbo.png?raw=true"></img>
                                <p class="pr-text">`+sardinas[0].carbohidratos+`</p>
                                <p class="text">Carbohidratos</p>
                             </div>

                             <p class="text-vit">Vitaminas</p>
                          
                            
                             <div class="vitaminas-Az">
                                <p>`+sardinas[0].vitamina1+`</p>
                                <p>`+sardinas[0].vitamina2+`</p>
                                <p>`+sardinas[0].vitamina3+`</p>
                                <p>`+sardinas[0].vitamina4+`</p>
                                <p>`+sardinas[0].vitamina5+`</p>
                             </div>

                            </div>



                            <div class="res">
                                <img class="imgCerd" src="https://github.com/maria4Q/APS/blob/main/salmon.png?raw=true"></img>
                                <h1 class="ti">`+Salmón[0].nombre+`</h1>
                                <img class="calorias" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                                <p class="kcal">`+Salmón[0].calorias+`</p>
                                <img class="lb" src="https://github.com/maria4Q/APS/blob/main/PesaAmarilla.png?raw=true"></img>
                                <p class="peso">`+Salmón[0].libras+`</p>
                            
                                <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                                <p class="pr-text">`+Salmón[0].proteina+`</p>
                                <p class="text">Proteinas</p>
                           
                                <div class="div-lip">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                                    <p class="pr-text">`+Salmón[0].lipidos+`</p>
                                    <p class="text">Lípidos</p>
                                </div>

                                <div class="div-carb">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/carbo.png?raw=true"></img>
                                    <p class="pr-text">`+Salmón[0].carbohidratos+`</p>
                                    <p class="text">Carbohidratos</p>
                                </div>

                                <p class="text-vit">Vitaminas</p>
                         

                                <div class="vitaminas-Ama">
                                    <p>`+Salmón[0].vitamina1+`</p>
                                    <p>`+Salmón[0].vitamina2+`</p>
                                    <p>`+Salmón[0].vitamina3+`</p>
                                    <p>`+Salmón[0].vitamina4+`</p>
                                    <p>`+Salmón[0].vitamina5+`</p>
                                    <p>`+Salmón[0].vitamina6+`</p>
                                </div>
                           </div>


                
                            <div class="pollo">
                                <img class="imgpollo" src="https://github.com/maria4Q/APS/blob/main/mojarraPC.png?raw=true"></img>
                                <img class="imgpollo-2" src="https://github.com/maria4Q/APS/blob/main/mojarra.png?raw=true"></img>
                                <h1 class="title-Po">`+MojarraFresca[0].nombre+`</h1>
                                <img class="calorias_pollo" src="https://raw.githubusercontent.com/maria4Q/APS/db24cbf45740e95c02ace9939e10e1cae003de47/calorias.svg"></img>
                                <p class="Kcal_P">`+MojarraFresca[0].calorias+`</p>
                                <img class="lb-p" src="https://raw.githubusercontent.com/maria4Q/APS/faa6b49c5d54b53f0530ef658a4c08b848ec2e87/lb.svg"></img>
                                <p class="peso-p">`+MojarraFresca[0].libras+`</p>

                        
                                <div class="div-proteinas">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/proteina.png?raw=true"></img>
                                    <p class="pr-text">`+MojarraFresca[0].proteina+`</p>
                                    <p class="text">Proteinas</p>
                                </div>

                                <div class="div-lipidos">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                                    <p class="pr-text">`+MojarraFresca[0].lipidos+`</p>
                                    <p class="text">Lípidos</p>
                                </div>

                                
                                <div class="div-carbohidratos">
                                    <img class="pr" src="https://github.com/maria4Q/APS/blob/main/li.png?raw=true"></img>
                                    <p class="pr-text">`+MojarraFresca[0].carbohidratos+`</p>
                                    <p class="text">Carbohidratos</p>
                                </div>

                                <p class="text-vtm">Vitaminas</p>

                                <div class="vitaminas-P">
                                    <p>`+MojarraFresca[0].vitamina+`</p>
                                    <p>`+MojarraFresca[0].vitamina1+`</p>
                                    <p>`+MojarraFresca[0].vitamina2+`</p>
                                    <p>`+MojarraFresca[0].vitamina3+`</p>
                                    <p>`+MojarraFresca[0].vitamina4+`</p>
                                    <p>`+MojarraFresca[0].vitamina5+`</p>
                                </div>
                            </div>
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



    let div3 = `<div class="caja_wireframes4" id="caja_wireframes4">
        <img class="capa7" src="https://raw.githubusercontent.com/CMiranda14/img_aps_prote-nas/4877c4bbc8128d827454db186b06a7d09c77bbc0/Capa%207.svg"></img>
        <h1 class="title_proteinas">Lípidos</h1>
        <img class="video_lipidos" id="video_lipidos" src="https://raw.githubusercontent.com/CMiranda14/img_aps_lipidos/658a099b81072a448742fb58ce0550a555673244/Group%2027.svg"></img>
        <h1 class="categorias_proteinas">CATEGORÍAS</h1>
        <img class="lipidos_aceites" id="lipidos_aceites"  src="https://raw.githubusercontent.com/CMiranda14/img_aps_lipidos/658a099b81072a448742fb58ce0550a555673244/aceites%20y%20grasas.svg"></img>
        <img class="lipidos_frutas" id="lipidos_frutas"  src="https://raw.githubusercontent.com/CMiranda14/img_aps_lipidos/658a099b81072a448742fb58ce0550a555673244/Frutas%20y%20verduras.svg"></img>


        <div class="caja_video_lipidos" id="caja_video_lipidos">
        <h1 class="boton_cerrar_video_lipidos" id="boton_cerrar_video_lipidos">X</h1>

        <div class="preguntas_proteinas">
        <iframe class="video_sintesis_proteinas" width="573" height="262" src="https://www.youtube.com/embed/JTV7Hf6CQ5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h1 class="title_cajavideo_lipidos">`+matriz_video_lipidos[0].titulo+`</h1>
                <h1 class="texto_cajavideo_lipidos">`+matriz_video_lipidos[0].texto+`</h1>
                <h1 class="texto_cajavideo_lipidos1">`+matriz_video_lipidos[0].texto2+`</h1>
                <h1 class="texto_cajavideo_lipidos2">`+matriz_video_lipidos[0].texto3+`</h1>
                <img class="img_lipidos" src="https://raw.githubusercontent.com/CMiranda14/img_aps_lipidos/181a5837eef7b798dd5fa9b6cc227eee6414c3ce/fats.svg"></img>

                <div class="pregunta1CarbL">
                    <img src="https://raw.githubusercontent.com/CMiranda14/img_aps_lipidos/8d20b1b91487d5e69344a17e1e64b3cf525e8c10/Group%2028.svg"></img>
                    <h1>`+matriz_video_lipidos[1].titulo+`</h1>
                    <p>`+matriz_video_lipidos[1].texto+`</p>
                </div>
                <div class="pregunta2CarbL">
                <img src="https://raw.githubusercontent.com/CMiranda14/img_aps_lipidos/8d20b1b91487d5e69344a17e1e64b3cf525e8c10/Group%2029.svg"></img>
                <h1>`+matriz_video_lipidos[2].titulo+`</h1>
                <p>`+matriz_video_lipidos[2].texto+`</p>
                </div>
                <div class="pregunta3CarbL">
                <img src="https://raw.githubusercontent.com/CMiranda14/img_aps_lipidos/8d20b1b91487d5e69344a17e1e64b3cf525e8c10/Group%2030.svg"></img>
                <h1>`+matriz_video_lipidos[3].titulo+`</h1>
                <p>`+matriz_video_lipidos[3].texto+`</p>
                </div>
                <div class="pregunta4CarbL">
                <img src="https://raw.githubusercontent.com/CMiranda14/img_aps_lipidos/8d20b1b91487d5e69344a17e1e64b3cf525e8c10/Group%2031.svg"></img>
                <h1>`+matriz_video_lipidos[4].titulo+`</h1>
                <p>`+matriz_video_lipidos[4].texto+`</p>
                </div>
                </div>
        </div>

        <div class="caja_aceites_lipidos" id="caja_aceites_lipidos">
        <h1 class="boton_cerrar_aceites_lipidos" id="boton_cerrar_aceites_lipidos">←</h1>
        </div>

        <div class="caja_lfrutasverd" id="caja_lfrutasverd">
        <h1 class="boton_cerrar_frutas_lipidos" id="boton_cerrar_frutas_lipidos">←</h1>
        </div>

    </div>`;

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
    if (x.style.display = "none") {
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
    if (x.style.display = "none") {
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
    if (x.style.display = "none") {
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
    if (x.style.display = "none") {
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
    if (x.style.display = "none") {
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
    if (x.style.display = "none") {
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
    if (x.style.display = "none") {
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

function activar_caja_pescado() {
    var x = document.getElementById("caja_proteinas_pescados");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

proteinas_pescado.addEventListener('click' ,activar_caja_pescado);

function desactivar_caja_pescado() {
    var x = document.getElementById("caja_proteinas_pescados");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

boton_cerrar_caja_pescados.addEventListener('click' ,desactivar_caja_pescado);

/***************************************************************************/

function activar_caja_FrutasVerduras() {
    var x = document.getElementById("caja_proteinas_FruVerd");
    if (x.style.display = "none") {
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

function activar_caja_FrutasVerduras2() {
    var x = document.getElementById("caja_proteinas_FruVerd2");
    if (x.style.display = "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

proteinas_frutas2.addEventListener('click' ,activar_caja_FrutasVerduras2);

function desactivar_caja_FrutasVerduras2() {
    var x = document.getElementById("caja_proteinas_FruVerd2");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

boton_cerrar_caja_FruVerd2.addEventListener('click' ,desactivar_caja_FrutasVerduras2);

/***************************************************************************/
/*--------------------------------------------------------*/
/*-----------------Activaciones Caja Lipidos------------*/

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

/****************************************************************/
function activar_video_lipidos() {
    var x = document.getElementById("caja_video_lipidos");
    if (x.style.display = "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

video_lipidos.addEventListener('click' ,activar_video_lipidos);

function desactivar_video_lipidos() {
    var x = document.getElementById("caja_video_lipidos");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

boton_cerrar_video_lipidos.addEventListener('click' ,desactivar_video_lipidos);

/****************************************************************/
function activar_aceites_lipidos() {
    var x = document.getElementById("caja_aceites_lipidos");
    if (x.style.display = "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

lipidos_aceites.addEventListener('click' ,activar_aceites_lipidos);

function desactivar_aceites_lipidos() {
    var x = document.getElementById("caja_aceites_lipidos");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

boton_cerrar_aceites_lipidos.addEventListener('click' ,desactivar_aceites_lipidos);

/****************************************************************/
function activar_frutas_lipidos() {
    var x = document.getElementById("caja_lfrutasverd");
    if (x.style.display = "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

lipidos_frutas.addEventListener('click' ,activar_frutas_lipidos);

function desactivar_frutas_lipidos() {
    var x = document.getElementById("caja_lfrutasverd");
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

boton_cerrar_frutas_lipidos.addEventListener('click' ,desactivar_frutas_lipidos);


/****************************************************************/

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
/****************************************************************/
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
