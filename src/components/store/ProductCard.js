export default function ProductCard({ image, title, price }) {
    return <article className="product-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <h4>{price}</h4>
        <button>Add to Cart</button>
    </article>
}