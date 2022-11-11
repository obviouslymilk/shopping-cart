export default function DescItem({ icon, title, value }) {
    return <div>
        <img src={icon} alt={title} />
        <h3>{value}</h3>
        <h5>{title}</h5>
    </div>
}