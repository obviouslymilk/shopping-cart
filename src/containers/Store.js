import Products from "../components/store/Grid";

export default function Store({ data }) {

    return <>
        <h1>Store</h1>
        <Products data={data} />
    </>
}