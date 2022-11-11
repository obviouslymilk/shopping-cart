import DescItem from "./DescItem";

export default function Description({ ages, pieces, id }) {
    return <div>
        <DescItem title="Ages" value={ages + "+"} />
        <DescItem title="Pieces" value={pieces} />
        <DescItem title="Item" value={id} />
    </div>
}