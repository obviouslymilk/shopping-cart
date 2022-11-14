export default function Product({ thumbnail, title, price, id,  quantity, onDelete, onAdd, onRemove }) {
    return <div>
        <img src={thumbnail} alt={title} width={100} height={100} />
        <div>
            {title}
            <div>
                <h4>{price}</h4>
                <div><button data-id={id} onClick={onRemove} disabled={quantity < 2 ? true : false}>-</button>{quantity}<button data-id={id} onClick={onAdd}>+</button></div>
            </div>
        </div>
        <button data-id={id} onClick={onDelete}>Delete</button>
    </div>
}