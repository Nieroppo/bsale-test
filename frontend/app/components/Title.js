import api from '../helpers/api.js';

export function Title(){
    const $h1 = document.createElement('div');
    $h1.classList.add('orange');
    $h1.classList.add('logo')    
    $h1.innerHTML=`
        <a href="#/">${api.TITLE}</a>
        
    `
    return $h1;
}