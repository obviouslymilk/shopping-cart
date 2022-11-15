import Grid from "../components/store/Grid";

export default function Store({ data, onAdd }) {

    return <>
        <Grid data={data} onAdd={onAdd} />
    </>
}