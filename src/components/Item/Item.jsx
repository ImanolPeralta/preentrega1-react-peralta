import { Link } from "react-router-dom";
import "../Item/Item.css";

const Item = ({ id, name, price, stock, description, image }) => {
    return (
        <div className="item-card">
            <img src={image} alt={name} className="item-image" />
            <div className="item-details">
                <h2 className="item-name">{name}</h2>
                <p className="item-price">Precio: <span>${price}</span></p>
                <p className="item-stock">Stock: {stock}</p>
                <p className="item-description">{description}</p>
                <button className="item-button">
                    <Link to={`/item/${id}`} className='Option'>Ver detalle +</Link>
                </button>
            </div>
        </div>
    );
};

export default Item;
