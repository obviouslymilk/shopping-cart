import CartItem from '../components/cart/CartItem';
import OrderSummary from '../components/cart/OrderSummary';
import '../styles/Cart.scss'

export default function Cart({ cart, onDelete, onAdd, onRemove }) {
    const children = []
    for (const item of Object.entries(cart)) {
        const data = item[1].data
        children.push(<CartItem
            thumbnail={data.thumbnail}
            price={data.price}
            quantity={item[1].quantity}
            title={data.title}
            key={data.id}
            id={data.id}
            onDelete={onDelete}
            onAdd={onAdd}
            onRemove={onRemove}
        />)
    }

    return <div id='cart'>
        <div id='cart-items'>{children}</div>
        <OrderSummary cart={cart} />
    </div>
}