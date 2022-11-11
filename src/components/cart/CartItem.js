export default function Product({ image, title, price, quantity }) {
    return <div>
        <img src={image} alt={title} />
        <div>
            {title}
            <div>
                {price}
                {/** QUANTITY BUTTONS */}
            </div>
        </div>
        {/** REMOIVE BUTTON */}
    </div>
}