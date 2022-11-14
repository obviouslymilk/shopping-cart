import QuantityController from "../../utils/QuantityController";

export default function Product({ thumbnail, title, price, id,  quantity, onDelete, onAdd, onRemove }) {
    return <div>
        <img src={thumbnail} alt={title} width={100} height={100} />
        <div>
            {title}
            <div>
                <h4>{price}</h4>
                <QuantityController onRemove={onRemove} onAdd={onAdd} id={id} quantity={quantity} key={id} />
            </div>
        </div>
        <button data-id={id} onClick={onDelete}>Delete</button>
    </div>
}