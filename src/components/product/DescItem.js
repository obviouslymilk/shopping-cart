export default function DescItem({ icon, title, value }) {
    return <div className="description-item">
        <img src={icon} alt={title} />
        <h3>{value}</h3>
        <h5>{title}</h5>
    </div>
}