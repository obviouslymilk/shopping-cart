import { Link } from "react-router-dom";

const PurchaseDialog = ({image, name, price, onClose}) => {
    return <dialog id="purchase-dialog">
        <h3>Added!</h3>
        <div>
            <img id="purchased-image" src={image} alt={name} />
            <div id="purchased-info">
                <h3>{name}</h3>
                <h4>${price}</h4>
            </div>
        </div>
        <div id="purchased-buttons">
            <button id="continue" onClick={onClose}>Continue Shopping</button>
            <Link to="cart" id="purchased-cart"><button onClick={onClose}>Show my Cart</button></Link>
        </div>
    </dialog>
}

export default PurchaseDialog;