class Mangas {
    constructor(){
        this.id = "";
        this.img = "";
        this.name = "";
        this.description = ""

    }

    //getter

    get id(){
        return this.id;
    }

    get img(){
        return this.img;
    }

    get name(){
        return this.name;
    }

    get description(){
        return this.description;
    }

    //setter

    set id(newId){
        if(typeof newId !== "number"){
            return new Error(`"${newId}" is not a value of type number `)
        };
    }

    set img(newImg){
        if(typeof newImg !== 'string'){
            return new Error(`"${newImg}" is not a value of type string`);
        }
        
    }

    set name(newName){
        if(typeof newName !== 'string'){
          return new Error(`"${newName}" is not a value of type string`);  
        }
        
    }

    set description(newDesc){
        if(typeof newDesc !== 'string'){
            return new Error(`"${newDesc}" is not a value of type string`);
        }
        
    }

   
}



export default Mangas;