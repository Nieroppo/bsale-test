
export function dropdownContents(props){

    let { id, name } = props;
    name = name.toUpperCase();
    return `
        <a href="#/category/${id}">${name}</a>
    `
}