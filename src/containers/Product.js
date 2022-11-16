
import { useParams } from 'react-router-dom';
import { findById } from '../utils/Utils';
import Description from '../components/product/Description';
import '../styles/Product.scss';
import QuantityController from '../utils/QuantityController'

export default function Product({ data, onAdd, onRemove, cart }) {

    const { id } = useParams();

    const product = findById(data, id);

    const { thumbnail, title, ages, pieces, price } = product;

    return <div className='product'>
        <div className='desc'>
            <img src={thumbnail} alt={title}/>
        </div>
        <div className='info'>
            <h1>{title}</h1>
            <h3>${price}</h3>
            <QuantityController id={id} onAdd={onAdd} onRemove={onRemove} quantity={cart[id]?.quantity || 0} />
            <Description ages={ages} pieces={pieces} id={id} />
            <button data-id={id} onClick={onAdd}>Add to Cart</button>
        </div>
    </div>
}