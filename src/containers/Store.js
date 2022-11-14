import Grid from "../components/store/Grid";

export default function Store({ data, onAdd }) {

    return <>
        <h1>Store</h1>
        <Grid data={data} onAdd={onAdd} />
    </>
}