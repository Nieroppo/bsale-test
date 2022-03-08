import api from '../helpers/api.js';
import { ajax } from '../helpers/ajax.js';
import { ProductCard } from './ProductCard.js';
export async function Router(){
    const d = document,
        w= window,
        $products = d.getElementById('products');

    let { hash } =location;
    console.log(hash);
    $products.innerHTML= null;

    if(!hash || hash === '#/'){

        await ajax({
            url: api.PRODUCTS,
            cbSuccess: (products) => {
                console.log(products);
                let html ="";
                products.rows.forEach((product) => html +=ProductCard(product));
                
                $products.innerHTML= html;
    
            }
        })

    }else if(hash.includes('#/search')){


        let query = localStorage.getItem("search");
        
        if(!query) return location.hash = '#/';
        await ajax({
            url: `${api.SEARCH}${query}/page/`,
            cbSuccess: (products) => {
                console.log(products);
                let html ="";
                if(products.message){
                    document.getElementById("products").innerHTML=`
                        <div class="message orange">
                            <p> Producto no encontrado </p>
                        </div>
                        
                    `;
                }else{
                    
                    products.rows.forEach((product) => html +=ProductCard(product));
                    
                    $products.innerHTML= html;
                }
                
    
            }
        })
    }

    d.querySelector(".loader").style.display="none";
    
}