const QuantityController = ({onRemove, onAdd, quantity, id}) => {
    return <div><button data-id={id} onClick={onRemove} disabled={quantity < 2 ? true : false}>-</button>{quantity}<button data-id={id} onClick={onAdd}>+</button></div>
}

export default QuantityController;