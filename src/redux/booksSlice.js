import { createSlice } from '@reduxjs/toolkit'

const booksSlice = createSlice({
	name: 'books',
	initialState: {
		books: [
			{
				id: 2,
				title: 'The Book of Five Rings',
				author: 'Miyamoto Musashi',
				publishYear: 1643,
				pagesTotal: 110,
			},
			{
				id: 1,
				title: 'The Book of Five Rings',
				author: 'Miyamoto Musashi',
				publishYear: 1643,
				pagesTotal: 110,
			},
			{
				id: 3,
				title: 'The Book of Five Rings',
				author: 'Miyamoto Musashi',
				publishYear: 1643,
				pagesTotal: 110,
			},
		],
	},
	reducers: {
		addBook(state, action) {
			state.books.push(action.payload)
		},
	},
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer
