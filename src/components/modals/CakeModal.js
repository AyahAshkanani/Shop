import Modal from "react-modal";
//styles
import { CreateButtonStyled } from "../../styles";
//state
import { useState } from "react";
import cakeStore from "../../stores/cakeStore";

const CakeModal = (props) => {
    const [cake, setCake] = useState({
        name: "",
        price: 0,
        description: "",
        image: "",
    });

    const handleChange = (event) => {
        setCake({ ...cake, [event.target.name]: event.target.value });
        console.log(cake);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        cakeStore.cakeCreate(cake);
        props.closeModal();
    };
    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                contentLabel="cake Modal"
            >
                <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <div className="col-6">
                            <label>Name</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="name"
                            />
                        </div>
                        <div className="col-6">
                            <label>Price</label>
                            <input
                                className="form-control"
                                type="number"
                                min="1"
                                onChange={handleChange}
                                name="price"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={handleChange}
                            name="description"
                        />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={handleChange}
                            name="image"
                        />
                    </div>
                    <CreateButtonStyled> Add </CreateButtonStyled>
                </form>
            </Modal>
        </div>
    );
};

export default CakeModal;