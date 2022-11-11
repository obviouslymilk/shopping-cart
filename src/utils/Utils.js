export function findById(data, id) {
    const v = data.find(value => {
        return value.id === Number.parseInt(id) ? value : null
    })

    return v;
}