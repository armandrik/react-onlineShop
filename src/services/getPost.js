import axios from 'axios'

export const getPost = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data
}