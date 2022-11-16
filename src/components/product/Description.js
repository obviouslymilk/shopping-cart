import DescItem from "./DescItem";
import idIcon from '../../assets/id.svg';
import ageIcon from '../../assets/age.svg';
import pieceIcon from '../../assets/piece.svg';

export default function Description({ ages, pieces, id }) {
    return <div className="description">
        <DescItem icon={ageIcon} title="Ages" value={ages + "+"} />
        <DescItem icon={pieceIcon} title="Pieces" value={pieces} />
        <DescItem icon={idIcon} title="Item" value={id} />
    </div>
}