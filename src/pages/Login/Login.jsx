import { nanoid } from '@reduxjs/toolkit'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import s from './Login.module.css'
import { Link } from 'react-router-dom'
import * as Yup from "yup"

const Login = () => {
	const initialValues = {
		email: '',
		password: '',
	}

	const validationSchema = Yup.object({
		email: Yup.string().required(),
		password: Yup.string().min(8, "Min 8 letter").max(32, "Max 32 letter").required()
	})

	const onFormSubmit = (value, action) => {
		console.log(value)
		action.resetForm()
	}

	const emailId = nanoid()
	const passwordId = nanoid()

	return (
	<div className={s.container}>
		<div className={s.loginWrapper}>
			<div className={s.formWrapper}>
				<Formik initialValues={initialValues} onSubmit={onFormSubmit} validationSchema={validationSchema}>
					<Form className={s.loginForm}>
						<button className={s.googleButton} type='button'>
							Google
						</button>
						<div className={s.fields}>
							<div className={s.fieldWrapper}>
								<label htmlFor={emailId}>
									Електронна адреса <sup>*</sup>
								</label>
								<Field
									className={s.field}
									name='email'
									type='email'
									placeholder='your@email.com'
									id={emailId}
								/>
								<ErrorMessage className={s.error} name='email' component={'span'} />
							</div>
							<div className={s.fieldWrapper}>
								<label htmlFor={passwordId}>
									Пароль
									<sup>*</sup>
								</label>
								<Field
									className={s.field}
									name='password'
									type='password'
									placeholder='Пароль'
									id={passwordId}
								/>
								<ErrorMessage className={s.error} name='password' component={'span'} />
							</div>
						</div>
							<button className={s.loginButton} type='submit'>
								Увійти
							</button>
							<Link className={s.registerLink} to='/registration'>
								Реєстрація
							</Link>
					</Form>
				</Formik>
			</div>
			<div className={s.loginQuote}>
				<span className={s.quoteMark}>“</span>
				<p className={s.quoteText}>
					Книги — это корабли мысли, странствующие по волнам времени и бережно
					несущие свой драгоценный груз от поколения к поколению.
				</p>
				<span className={s.quoteAuthor}>Бэкон Ф.</span>
			</div>
			</div>
		</div>
	)
}

export default Login
