export function ProductCard(props){

    let { name, price , url_image, discount } = props;
    
    let originalPrice= '';
    if(!url_image) url_image='https://dummyimage.com/250x300/fff/333&text=no+image';
    if(discount !== 0 ) {
        originalPrice = '$'+price;
        price = Math.round(price - price * discount/100);            
    } 
    return `
        <div class="product-card">
            <div class="product-img center">
                <img class="product-img" src="${url_image}" >
            </div>
            <div class="product-name">
                <h3 class="orange"> ${name}</h3>
            </div>
            <div class="product-price center">
                
                <p class="price skyblue"> $ ${price}</p>
                <p class="original-price"> ${originalPrice}</p> 
                <i class="fa-solid fa-cart-arrow-down"></i>
            </div>
            
        </div>
    `
}