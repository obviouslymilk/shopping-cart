import GridItem from './GridItem';

export default function Grid({ data, onAdd }) {
    const products = data.map(p => {
        return <GridItem image={p.thumbnail} price={p.price} title={p.title} id={p.id} onAdd={onAdd} key={p.id} />
    })

    return <div className="products">
        {products}
    </div>
}