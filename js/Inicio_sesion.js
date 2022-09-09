function INICIO_SESION(){
    let inicio = document.querySelector("#sesion");


    let div = '<div class="Caja_shape_down">'+
                '<div>' + 
                    '<img class="shape_down" src="https://github.com/CMiranda14/img_aps/blob/main/Shape%20down-1.png?raw=true"></img>'+
                    '<img class="shape_down1" src="https://github.com/CMiranda14/img_aps/blob/main/Shape%20down.png?raw=true"></img>'+
                    
                    
              '</div>'+
              '<div>' + 
                    '<img class="fondo" src="https://github.com/CMiranda14/img_aps/blob/main/fondo%20Bio.png?raw=true"></img>'+
                    '<img class="cebolla" src="https://github.com/CMiranda14/img_aps/blob/main/cebolla%20arribaRecurso%207%201.png?raw=true"></img>'+
                    '<img class="papa" src="https://github.com/CMiranda14/img_aps/blob/main/papa%20arribaRecurso%208%201.png?raw=true"></img>'+
                    '<img class="bio" src="https://github.com/CMiranda14/img_aps/blob/main/mu%C3%B1eco%20arribaRecurso%209%201.png?raw=true"></img>'+
                    '<img class="fondo_verde" src="https://github.com/CMiranda14/img_aps/blob/main/fondo%20verde.png?raw=true">'+'<h2 class="title">'+'¿Cuàl es tu nombre?'+'</h2>'+'<Input class="entrada_text" type="text">'+'</Input>'+'<a class="bt_home" href="home.html">'+'→'+'</a>'+'</img>'+
                    '<img class="fondo_verde2" src="https://github.com/CMiranda14/img_aps/blob/main/fondo%20verde.png?raw=true">'+'<h2 class="title">'+'¿Cuàl es tu nombre?'+'</h2>'+'<Input class="entrada_text" type="text">'+'</Input>'+'<a class="bt_home" href="home.html">'+'→'+'</a>'+'</img>'+
                    
              '</div>'+
              '</div>'
              ;

    inicio.innerHTML= div;
}

INICIO_SESION()