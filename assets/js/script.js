//https://jsonplaceholder.typicode.com/posts (URL BASE)

// 1. Realizar un request (consulta) a la API usando async-await.
const getPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(url);
        const data = await response.json();

 //2. Mostrar el resultado del request en HTML (utilizar listas desordenadas para mostrar cada uno de los post).
        let lista = document.querySelector('#posts_data > ul');

        data.forEach((elemento)=>{
            lista.innerHTML += `<li>
                                    <p><strong>${elemento.title}</strong></p>
                                    <p>${elemento.body}</p>
                                    </br>
                              </li>`;
        });

    } 
   //3. Manejar los posibles errores con try-catch.
    catch(err) {
        console.log(err);
    }
    
}

//Evento de escucha que despliega las funciones
document.getElementById("btn").addEventListener("click", function( event ) {
    getPosts();
})