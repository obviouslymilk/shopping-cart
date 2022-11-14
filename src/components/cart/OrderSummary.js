import { Link } from "react-router-dom";

const OrderSummary = ({ cart }) => {
    let sum = 0
    let quantity = 0;
    for (const item of Object.entries(cart)) {
        const data = item[1].data;
        sum += (data.price * item[1].quantity);
        quantity += item[1].quantity;
    }
    return <div>
        <h3>${sum} ({quantity} items)</h3>
        <Link to="/checkout"><button disabled={quantity === 0 ? true : false}>Checkout</button></Link>
    </div>
}

export default OrderSummary;