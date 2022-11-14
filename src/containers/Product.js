
import { useParams } from 'react-router-dom';
import { findById } from '../utils/Utils';
import Description from '../components/product/Description';

export default function Product({ data, onAdd }) {

    const { id } = useParams();

    const product = findById(data, id);

    const { thumbnail, title, ages, pieces, price } = product;

    return <div>
        <div>
            <img src={thumbnail} alt={title} width={100} height={100} />
            <Description ages={ages} pieces={pieces} id={id} />
        </div>
        <div>
            <h1>{title}</h1>
            <h3>{price}</h3>
            <button data-id={id} onClick={onAdd}>Add to Cart</button>
        </div>
    </div>
}