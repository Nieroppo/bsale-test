
const URL_BASE = 'https://vp-bsale-test-api.herokuapp.com/api',
      PRODUCTS=`${URL_BASE}/products/page/`,      
      SEARCH  =`${URL_BASE}/products/search/`,
      CATEGORIES =`${URL_BASE}/categories/`,
      PRODUCTSBYCATEGORIES =`${URL_BASE}/products/category/`,
      TITLE= `Bsale Test`;
      
let page =1;  

export default{
    URL_BASE,    
    PRODUCTS,
    SEARCH,
    PRODUCTSBYCATEGORIES,
    CATEGORIES,
    TITLE,
    page
};