import { makeAutoObservable } from "mobx";
import slugify from 'react-slugify';
import axios from "axios";

class CakeStore {
    cakes = [];

    constructor() {
        //when data is updated the components will be rerendered 
        makeAutoObservable(this);
    }
    fetchCakes = async () => {
        try {
          const response = await axios.get("http://localhost:8000/cakes");
          this.cakes = response.data;
        console.log(this.cakes);
        } catch (error) {
          console.error("fetchCakes: ", error);
        }
      };
    handleDelete = async (cakeId) => {
        
        try{
          await axios.delete(`http://localhost:8000/cakes/${cakeId}`);
          const updatedCakes = this.cakes.filter((cake) => cake.id !== cakeId);

          this.cakes = updatedCakes;

        } catch (error) {
          console.error(error);
        }
    };

    cakeCreate = async (newCake) => {
      try{
        const response = await axios.post("http://localhost:8000/cakes",newCake);
        console.log(response);
        this.cakes.push(response.data);

      }catch(error){
        console.error(error);}
    };

    cakeUpdate = (updateCake) => {

      try {
        await axios.put(
          `http://localhost:8000/cakes/${updateCake.id}`,updateCake);
        const cake = this.cakes.find(
          (cake) => cake.id === updateCake.id
        );
        cake.name = updateCake.name;
        cake.price = updateCake.price;
        cake.description = updateCake.description;
        cake.image = updateCake.image;
        cake.slug = slugify(updateCake.name);
      }
      catch (error) {
        console.error(error);
      }

    };
}

const cakeStore = new CakeStore();
cakeStore.fetchCakes();

export default cakeStore;