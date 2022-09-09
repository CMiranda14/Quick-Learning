function home(){
    let main = document.getElementById("home-page");

    /**SECCIÓN UNO DEL PROYECTO BIO FOOD */

    let div =  '<section class="bg">' +

                    '<div class="shapeUp">' +
                        '<img src="https://raw.githubusercontent.com/maria4Q/APS/6265556c8c91f2c4464f0ecf1dfd06ebb1098868/shape.svg" class="ShapeUp">' +
                    '</div>' +

                    '<div class="carrete">' +
                        '<img src="https://raw.githubusercontent.com/maria4Q/APS/ef3b00150a5e2fae78e48b5f0912054e7aa14db9/foodRecurso.svg" class="logo">' +
                    '</div>' +

                    '<img src="https://raw.githubusercontent.com/maria4Q/APS/f1d795c79d966d6a4b40d755cea1308a31eae136/Next.svg" class="btn">' +

                    '<div class="ShapeDown">' +
                        '<img src="https://raw.githubusercontent.com/maria4Q/APS/3b6b3a33c87a73979ffd00afc9bb56449e75e4f6/Shape%20down.svg">' +
                    '</div>' +

                '</section>' +

     /**SECCIÓN DOS DEL PROYECTO BIO FOOD */

                '<section class="bg-2">' +
                    '<div class="ShapeDown">' +
                        '<img src="https://raw.githubusercontent.com/maria4Q/APS/6265556c8c91f2c4464f0ecf1dfd06ebb1098868/shape.svg">' +
                    '</div>' +


                    '<img src="https://raw.githubusercontent.com/maria4Q/APS/134b74cdce2dfe0b8e5b957bace503cca2b2505a/Presentaci%C3%B3nBio.svg" class="txt" >' +

                    '<div class="bio">' +
                        '<img src="https://raw.githubusercontent.com/maria4Q/APS/6f3274c497999e081997079205a5987e68ece689/bioF.svg" >' +
                    '</div>' +
                    '<a href="inicio_sesión.html" class="start">' + '<img src="https://raw.githubusercontent.com/maria4Q/APS/7e19296b4bddadf2f5602d096aa87fd4dddbb579/start.svg" >' + '</a>' +
                '</section>'

                


    main.innerHTML =  div; 
}
home()
