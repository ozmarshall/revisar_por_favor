function capturador() { 

    const mkcard = document.getElementById("usuarios");
    console.log(mkcard);

    const formulario = document.querySelector("form"); 
    
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombree = this.querySelector("nombre_js");
        const apellido = this.querySelector("appe_js");
        const telef = this.querySelector("telefono_js");

        console.log(nombree.value);
        console.log(apellido.value);
        console.log(telef.value);

        const articulo = document.createElement('div');
        console.log("%O",articulo);

        articulo.innerHTML = `
             <p>${nombree.value}</p>
             <p>${apellido.value}</p>
             <p>${telef.value}</p>
        
        `;
        
        mkcard.appendChild(articulo);
    });

}
capturador();