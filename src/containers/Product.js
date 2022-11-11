
import Description from '../components/product/Description';

export default function Product({ image, title, price, ages, pieces, id }) {
    return <div>
        <div>
            <img src={image} alt={title} />
            <Description ages={ages} pieces={pieces} id={id} />
        </div>
        <div>
            <h1>{title}</h1>
            <h3>{price}</h3>
            <button>Add to Cart</button>
        </div>
    </div>
}