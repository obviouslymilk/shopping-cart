const QuantityController = ({onRemove, onAdd, quantity, id}) => {
    return <div className="quantity-controller"><button className="left" data-id={id} onClick={onRemove} disabled={quantity < 2 ? true : false}>-</button><p>{quantity}</p><button className="right" data-id={id} onClick={onAdd}>+</button></div>
}

export default QuantityController;