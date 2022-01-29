import Mangas from '../main/mangas_class.js';
import {objetsMangas} from '../main/data.js';

let sld = document.querySelector('.slide'); 
let ctn = document.querySelector('.info');

let mangas = new Mangas;
let random;


const searchBar = document.getElementById('searchBar')
 
// console.log(searchBar)


searchBar.addEventListener('keyup', (e) =>{
    const searchedLetters = e.target.value;
    const list_mangas = document.querySelectorAll('.list_mangas')
    console.log(searchedLetters)
    // console.log(list_mangas)
    searchMangas(searchedLetters, list_mangas)

}) 
const searchMangas = (letters, el) =>{
    if(letters.length > 2){
        for(let i = 0; i < el.length; i++){
            if(el[i].textContent.toLowerCase().includes(letters)){
                el[i].style.display = "block";
            }else{
                el[i].style.display = "none"
            }
        }
    }
}



const persoMangas = () => {
   
    objetsMangas.forEach(function(key){
        mangas.description = key.description;
        mangas.name = key.name;
        mangas.img = key.img;

        
        
        ctn.innerHTML += `
        <article > 
            <div class='list_mangas'>
                <h2 class='animals'>${key.name}</h2>
                <div>
                    <img src='${key.img}'/>
                </div>
                <p>${key.description}</p>
            </div>
        </article>
         `
})

}



persoMangas()


function slide (){
    random = Math.floor(Math.random()*25);
    objetsMangas.forEach(function(key){
        mangas.id = key.id;
        mangas.img = key.img

        if(random === key.id){
            // console.log(key.id)
            sld.innerHTML = 
            `
            <img class = "slideImg" src="${key.img}" alt="" srcset="">
                
            `
            
        }

        
 
});
setTimeout(() => {
    slide()
}, 10000); 
    
}

slide()  