import cakes from "../cakes";
import { makeAutoObservable } from "mobx";
import slugify from 'react-slugify';

class CakeStore {
    cakes = cakes;

    constructor() {
        //when data is updated the components will be rerendered 
        makeAutoObservable(this);
    }
    handleDelete = (cakeId) => {
        const updatedCakes = this.cakes.filter(cake => cake.id !== cakeId);
        this.cakes = updatedCakes;
    };

    cakeCreate = (newCake) => {
        newCake.id = this.cakes.length + 1;
        newCake.slug = slugify(newCake.name)
        this.cakes.push(newCake);
    };
}

const cakeStore = new CakeStore();
export default cakeStore;