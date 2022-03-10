export function Dropdown(props){
    const $dropdown = document.createElement('div'),
     $dropdownBtn = document.createElement('button'),
     $dropdownContents = document.createElement('div');

    $dropdownBtn.classList.add('dropdown-btn');
    $dropdownContents.classList.add('dropdown-contents')
    $dropdownContents.id="dropdown-contents";
    $dropdown.classList.add("dropdown");
    $dropdown.appendChild($dropdownBtn);
    $dropdown.appendChild($dropdownContents);
    $dropdownBtn.innerHTML= `<div class ="l">CATEGORIAS <i class="fa-solid fa-angle-down"></i></div>
        <div class ="s"><i class="fa-solid fa-bars"></i></div>    
    `;
    return $dropdown;
}