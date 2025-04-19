import { nanoid } from '@reduxjs/toolkit'
import { BsArrowLeft } from 'react-icons/bs'
import s from './AddBookForm.module.css'
import { Field, Formik, Form, ErrorMessage } from 'formik'
import Section from '../Section/Section'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { addBook } from '../../redux/booksSlice'

const AddBookForm = () => {
	const dispatch = useDispatch()

	const validationSchema = Yup.object({
		bookName: Yup.string().required('Required'),
		bookAuthor: Yup.string().required('Required'),
		bookYear: Yup.string().required('Required'),
		bookPage: Yup.number().required('Required'),
	})

	const initialValues = {
		bookName: '',
		bookAuthor: '',
		bookYear: '',
		bookPage: '',
	}

	const onFormSubmit = (values, action) => {
		dispatch(addBook({ ...values, id: crypto.randomUUID() }))
		action.resetForm()
	}

	const bookNameId = nanoid()
	const bookAuthorId = nanoid()
	const bookYearId = nanoid()
	const bookPageId = nanoid()

	return (
		<>
			<Section>
				<Link className={s.formBackBtn} to='/'>
					<BsArrowLeft color='#ff6b08' size={24} />
				</Link>
				<Formik
					initialValues={initialValues}
					onSubmit={onFormSubmit}
					validationSchema={validationSchema}
				>
					<Form className={s.form}>
						<div className={s.fieldsWrapper}>
							<div className={s.fieldWrapper}>
								<label htmlFor={bookNameId}>Назва книги</label>
								<Field
									className={s.field}
									type='text'
									name='bookName'
									id={bookNameId}
									placeholder='...'
								/>
								<ErrorMessage
									className={s.errorMessage}
									name='bookName'
									component={'span'}
								/>
							</div>
							<div className={s.fieldWrapper}>
								<label htmlFor={bookAuthorId}>Автор книги</label>
								<Field
									className={s.field}
									type='text'
									name='bookAuthor'
									id={bookAuthorId}
									placeholder='...'
								/>
								<ErrorMessage
									className={s.errorMessage}
									name='bookAuthor'
									component={'span'}
								/>
							</div>
							<div className={s.fieldWrapper}>
								<label htmlFor={bookYearId}>Рік випуску</label>
								<Field
									className={s.field}
									type='text'
									name='bookYear'
									id={bookYearId}
									placeholder='...'
								/>
								<ErrorMessage
									className={s.errorMessage}
									name='bookYear'
									component={'span'}
								/>
							</div>
							<div className={s.fieldWrapper}>
								<label htmlFor={bookPageId}>Кількість сторінок</label>
								<Field
									className={s.field}
									type='number'
									name='bookPage'
									id={bookPageId}
									placeholder='...'
								/>
								<ErrorMessage
									className={s.errorMessage}
									name='bookPage'
									component={'span'}
								/>
							</div>
						</div>
						<button className={s.addBookBtn} type='submit'>
							Додати
						</button>
					</Form>
				</Formik>
			</Section>
		</>
	)
}

export default AddBookForm
