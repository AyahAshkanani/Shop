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

    cakeUpdate = (updateCake) => {
        const cake = this.cakes.find((cake) => cake.id === updateCake.id);
        cake.name = updateCake.name;
        cake.price = updateCake.price;
        cake.description = updateCake.description;
        cake.image = updateCake.image;

        cake.slug = slugify(updateCake.name);
    };
}

const cakeStore = new CakeStore();
export default cakeStore;