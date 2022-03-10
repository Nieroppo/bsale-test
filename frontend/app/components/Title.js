import api from '../helpers/api.js';
import { Dropdown } from './Dropdown.js';

export function Title(){
    const $right = document.createElement('div'), $logo = document.createElement('div');
    $logo.classList.add('orange');
    $logo.classList.add('logo');
    $right.classList.add('header-right');   
    $right.appendChild($logo);
    $right.appendChild(Dropdown());
    $logo.innerHTML=`
        <a href="#/">${api.TITLE}</a>
        
    `
    return $right;
}