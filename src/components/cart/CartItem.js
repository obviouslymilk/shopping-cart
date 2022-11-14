export default function Product({ thumbnail, title, price, id,  quantity, onDelete }) {
    return <div>
        <img src={thumbnail} alt={title} width={100} height={100} />
        <div>
            {title}
            <div>
                <h4>{price}</h4>
                <div>{quantity}</div>
            </div>
        </div>
        <button data-id={id} onClick={onDelete}>Delete</button>
    </div>
}