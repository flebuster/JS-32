import logo from '../img/logo.svg';
import '../styles/main.scss';
import regeneratorRuntime from "regenerator-runtime";
import loadLists from "./utils/getData"
import { displayItems } from './components/displayItems';     
import { filteredItems } from './components/filterItemsed';


  let itemsList = [];
document.addEventListener('DOMContentLoaded', async () => {
    const serchBar = document.getElementById('search-bar');
itemsList = await loadLists(itemsList);
  
    
    serchBar.addEventListener('keyup', (e) => {
        filteredItems(e, itemsList);
    
        
    })
    
    loadLists(itemsList);
       
})
