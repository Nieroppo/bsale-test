
import { Header } from './components/Header.js'; 
import { Loader } from './components/Loader.js';
import { Products } from './components/Products.js'; 
import { Router } from './components/Router.js'; 
import { InfiniteScroll } from './helpers/infiniteScroll.js';
export function App(){
    const $root =document.getElementById('root');
     $root.innerHTML =null;
     $root.appendChild(Header());
     $root.appendChild(Products());
     $root.appendChild(Loader());

     Router();
     InfiniteScroll();
}