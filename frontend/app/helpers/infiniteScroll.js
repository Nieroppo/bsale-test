import api from "./api.js";
import { ProductCard } from '../components/ProductCard.js'
import { ajax } from "./ajax.js";



export async function InfiniteScroll(){
    const d = document,
     w = window;

    let verfication = true;
    
    w.addEventListener('scroll', async (e) => {
        let{ scrollTop, clientHeight, scrollHeight } = d.documentElement,
        { hash } =w.location;

        
        let query = localStorage.getItem('search'),
        apiURL;

        if(scrollTop + clientHeight >= scrollHeight && verfication){
            
            verfication = false;
            api.page++;  
            
            if(!hash || hash === '#/'){
                apiURL=`${api.PRODUCTS}${api.page}`
            }else if(hash.includes('#/search')){
                apiURL=`${api.SEARCH}${query}/page/${api.page}`
            }
            
            await ajax({
                url: apiURL,
                cbSuccess: (products) =>{
                    
                    if(products.message) return false;
                    let html ='';                    
                    products.rows.forEach((product) =>(html += ProductCard(product)));
                    d.getElementById('products').insertAdjacentHTML('beforeend', html);
                    verfication = true;
                    
                } 
                

            })

        }
    })
}