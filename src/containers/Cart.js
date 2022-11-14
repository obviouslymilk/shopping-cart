import CartItem from '../components/cart/CartItem';

export default function Cart({ cart }) {
    const children = []
    for (const item of Object.entries(cart)) {
        const data = item[1].data
        console.log(item[1].quantity);
        children.push(<CartItem thumbnail={data.thumbnail} price={data.price} quantity={item[1].quantity} title={data.title} key={data.id} id={data.id} />)
    }

    return <div>
        {children}
    </div>
}