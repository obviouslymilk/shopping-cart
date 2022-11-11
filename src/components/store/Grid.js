import ProductCard from './GridItem';

export default function Grid({ data }) {
    const products = data.map(p => {
        return <ProductCard image={p.thumbnail} price={p.price} title={p.title} id={p.id} key={p.id} />
    })

    return <div className="products">
        {products}
    </div>
}