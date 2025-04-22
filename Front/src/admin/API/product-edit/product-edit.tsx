
export default async function productEdit(token: string, id: number, name: string, price: number) {
    const response = await fetch(`https://tarkhine-app.onrender.com/api/v1/admin/products/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        method: 'PUT',
        body: JSON.stringify({
            name,
            description: ' ',
            price : +price
        })

    })

    return response.json()
}
