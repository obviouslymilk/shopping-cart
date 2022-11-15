import Grid from "../components/store/Grid";
import '../styles/Store.scss'

export default function Store({ data, onAdd }) {

    return <>
        <Grid data={data} onAdd={onAdd} />
    </>
}