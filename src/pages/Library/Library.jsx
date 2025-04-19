import { useState } from 'react'
import AddBookForm from '../../components/AddBookForm/AddBookForm'
// import BooksEmpty from '../../components/BooksEmpty/BooksEmpty'
import Container from '../../components/Container/Container'
import BooksList from '../../components/BooksList/BooksList'

const Library = () => {
	const [isEmpty, setIsEmpty] = useState(true)
	return (
		<>
			<Container>
				<AddBookForm />
				{/* {isEmpty ? <BooksEmpty /> : <BooksList />} */}
			</Container>
		</>
	)
}

export default Library
