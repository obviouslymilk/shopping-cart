import QuantityController from "../../utils/QuantityController";

export default function Product({ thumbnail, title, price, id,  quantity, onDelete, onAdd, onRemove }) {
    return <div className="cart-item">
        <img src={thumbnail} alt={title}/>
        <div className="cart-item-info">
            <h3>{title}</h3>
            <div className="cart-item-price">
                <h4>${price}</h4>
                <QuantityController onRemove={onRemove} onAdd={onAdd} id={id} quantity={quantity} key={id} />
            </div>
        </div>
        <button className="delete" data-id={id} onClick={onDelete}>D</button>
    </div>
}