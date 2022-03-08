export function SearchForm(){

    const d=document, 
     $searchForm= d.createElement('form'),
     $input =d.createElement('input'),
     $submit = d.createElement('button');

     $searchForm.classList.add('search-form');
     $input.name='search';
     $input.type='search';
     
     $input.placeholder='Buscar...';
     $submit.classList.add('btn-search');
     $submit.type='submit';
     $submit.innerHTML='<i class="fa-solid fa-magnifying-glass"></i>';  
     $searchForm.appendChild($input);
     $searchForm.appendChild($submit);

    d.addEventListener('submit', (e)=>{
        if(!e.target.matches('.search-form')) return false;
        e.preventDefault();
        localStorage.setItem("search", e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`;
    })


    return $searchForm;
}