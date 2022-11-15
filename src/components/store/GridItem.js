import { Link } from "react-router-dom";

export default function GridItem({ image, title, price, id, onAdd }) {
  
    return <article className="grid-item">
        <Link to={`/product/${id}`}><img src={image} alt={title}/></Link>
        <h3>{title}</h3>
        <h4>${price}</h4>
        <button data-id={id} onClick={onAdd}>Add to Cart</button>
    </article>
}