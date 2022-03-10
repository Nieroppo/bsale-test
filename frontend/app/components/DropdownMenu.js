import api from '../helpers/api.js';
import { ajax } from '../helpers/ajax.js';
import { dropdownContents } from '../components/DropdwonContent.js';

export function dropdownMenu(){
    const d = document,
    $dropdownCont = d.getElementById('dropdown-contents');

    ajax({
        url: api.CATEGORIES,
        cbSuccess: (caterogies) => {
            console.log(caterogies);
            let html ="";
            caterogies.rows.forEach((caterogies) => html +=dropdownContents(caterogies));
            
            $dropdownCont.innerHTML= html;

        }
    })

}