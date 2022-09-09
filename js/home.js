function home(){
    let main = document.getElementById("root");

    let div =  '<section class="bg">' +
    '<a href="inicio_sesión.html">Ingresar</a>'+
                    '<div class="shapeUp">' +
                        '<img src="https://raw.githubusercontent.com/maria4Q/APS/6265556c8c91f2c4464f0ecf1dfd06ebb1098868/shape.svg" class="ShapeUp">' +
                    '</div>' +

                    '<div class="carrete">' +
                        '<img src="https://raw.githubusercontent.com/maria4Q/APS/1de2b5cb167e3d49e26a9e9202bd6aa2a648bb30/Elipses.svg" class="circle1">' +
                        '<img src="https://raw.githubusercontent.com/maria4Q/APS/77778251525c4931fdd2634cfa6cca31816c7dfa/logo.svg" class="logo">' +
                        '<img src="https://raw.githubusercontent.com/maria4Q/APS/1de2b5cb167e3d49e26a9e9202bd6aa2a648bb30/Elipses.svg" class="circles">' +
                    '</div>' +

                    '<img src="https://raw.githubusercontent.com/maria4Q/APS/f1d795c79d966d6a4b40d755cea1308a31eae136/Next.svg" class="btn">' +

                    '<div class="ShapeDown">' +
                        '<img src="https://github.com/maria4Q/APS/blob/main/shapeD.png?raw=true">' +
                    '</div>' +

                '</section>';


    main.innerHTML =  div; 
}
home()

