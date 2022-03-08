import { App } from './App.js';
import api from './helpers/api.js'

document.addEventListener('DOMContentLoaded', App);
window.addEventListener('hashchange',()=>{
    api.page=1;
    App()
} )