export class HeshStorage {
    addValue(key, value){
        this[`${key}`] = value;
    }

    getValue(key){
        return this[`${key}`]; 
    }

    deleteValue(key){
        if(this[`${key}`]){
            delete this[`${key}`];
            return true;
        }
        else{
            return false;
        }
    }

    getKeys(){
        let arrayOfkeys = [];
        for(let key in this){
            arrayOfkeys.push(key);
        }
        return arrayOfkeys;
    }
}
