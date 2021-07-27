import { makeAutoObservable } from "mobx";
import axios from "axios";
import instance from "./instance";
import bakeryStore from "./bakeryStore";

class CakeStore {
    cakes = [];
    loading = true;


    constructor() {
        //when data is updated the components will be rerendered 
        makeAutoObservable(this);
    }
    fetchCakes = async () => {
        try {
          const response = await axios.get("http://localhost:8000/cakes");
          this.cakes = response.data;
          this.loading = false;
        } catch (error) {
          console.error("fetchCakes: ", error);
        }
      };
    handleDelete = async (cakeId) => {
        
        try{
          await instance.delete(`http://localhost:8000/cakes/${cakeId}`);
          bakeryStore.loading = true;
          const updatedCakes = this.cakes.filter((cake) => cake.id !== cakeId);

          this.cakes = updatedCakes;

        } catch (error) {
          console.error(error);
        }
    };
    
    cakeCreate = async (newCake, bakery) => {
      try{
        const formData = new FormData();
        for(const key in newCake) formData.append(key,newCake[key]);
        
        const response = await axios.post("http://localhost:8000/bakeries/${bakery.id}/cakes",formData);
        this.cakes.push(response.data);
        bakery.cakes.push({id: response.data.id });

      }catch(error){
        console.error(error);}
    };

    cakeUpdate = async (updateCake) => {
      try {
        const formData = new FormData();
        for(const key in updateCake) formData.append(key,updateCake[key]);
        const response = await axios.put(
          `http://localhost:8000/cakes/${updateCake.id}`,formData);

        const cake = this.cakes.find((cake) => cake.id === response.data.id);

        for(const key in cake) cake[key] = response.data[key];

      }
      catch (error) {
        console.error(error);
      }

    };
    getCakeById = (cakeId) =>
    this.cakes.find((cake) => cake.id === cakeId);
}

const cakeStore = new CakeStore();
cakeStore.fetchCakes();

export default cakeStore;