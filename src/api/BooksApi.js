import axios from 'axios'

export const getBooks = (page) => {
    return axios.get(`https://gutendex.com/books/?page=${page}`)
}

export const getBook = (id) => {
    return axios.get(`https://gutendex.com/books/${id}`)
}











