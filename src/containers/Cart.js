import CartItem from '../components/cart/CartItem';

export default function Cart({ cart, onDelete }) {
    const children = []
    for (const item of Object.entries(cart)) {
        const data = item[1].data
        children.push(<CartItem thumbnail={data.thumbnail} price={data.price} quantity={item[1].quantity} title={data.title} key={data.id} id={data.id} onDelete={onDelete} />)
    }

    return <div>
        {children}
    </div>
}