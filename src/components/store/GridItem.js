import { Link } from "react-router-dom";

export default function GridItem({ image, title, price, id }) {
  
    return <article className="product-card">
        <Link to={`/product/${id}`}><img src={image} alt={title} width={200} height={200} /></Link>
        <h3>{title}</h3>
        <h4>{price}</h4>
        <button>Add to Cart</button>
    </article>
}