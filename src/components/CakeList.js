//MobX
import cakeStore from "../stores/cakeStore";
import { observer } from "mobx-react";

//components
import CakeItem from "./CakeItem"
import SearchBar from "./SearchBar";
import CakeModal from "./modals/CakeModal";
import authStore from "../stores/authStore";
//styles
import { ListWrapper, AiFillPlusCircleStyled } from "../styles";

//useState
import { useState } from "react";

const CakeList = () => {

    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const cakeList = cakeStore.cakes.filter((cake) => cake.name.toLowerCase().includes(query.toLowerCase()))
        .map((cake) => (
            <CakeItem cake={cake} key={cake.id} />
        ));
    return (
        <div>
            <SearchBar setQuery={setQuery} />
        { authStore.user &&<AiFillPlusCircleStyled size="3em" onClick={openModal} />}
            <CakeModal isOpen={isOpen} closeModal={closeModal} />
            <ListWrapper>{cakeList}</ListWrapper>
        </div>
    );
};
export default observer(CakeList);

