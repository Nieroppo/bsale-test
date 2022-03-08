export async function ajax(props){
    let {url, cbSuccess} = props;

    await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err => {
        let message = err.statusText || "Ocurrio un error"
        if(err.status === 404 && !document.getElementById("products").innerHTML){
            document.getElementById("products").innerHTML=`
            <div class="message orange">
                <p> Producto no encontrado </p>
            </div>
            
        `;
         
        }else if(!err.status ===404){
            document.getElementById("products").innerHTML=`
            <div class="alert">
                <p> ERROR ${err.status}: ${err.message} </p>
            </div>
        `;
        }
        
        document.querySelector(".loader").style.display="none";
    })
}