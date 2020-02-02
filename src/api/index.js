import axios from 'axios'

const endpoints = {
    products: `http://www.mocky.io/v2/5c3e15e63500006e003e9795`
}
export const getProducts = async () => {
    const products = await axios.get(endpoints.products)
    return products.data
}