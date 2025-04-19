import { nanoid } from '@reduxjs/toolkit'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import s from './Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
	const initialValues = {
		email: '',
		password: '',
	}

	const onFormSubmit = (value, action) => {
		console.log(value)
		action.resetForm()
	}

	const emailId = nanoid()
	const passwordId = nanoid()

	return (
		<div className={s.loginWrapper}>
			<div className={s.formWrapper}>
				<Formik initialValues={initialValues} onSubmit={onFormSubmit}>
					<Form className={s.form}>
						<button className={s.loginByGoogleBtn} type='button'>
							Google
						</button>
						<div className={s.formFieldWrapper}>
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
								<ErrorMessage name='email' component={'span'} />
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
								<ErrorMessage name='password' component={'span'} />
							</div>
							<button className={s.loginBtn} type='submit'>
								Увійти
							</button>
							<Link className={s.registerLink} to='/registration'>
								Реєстрація
							</Link>
						</div>
					</Form>
				</Formik>
			</div>
			<div className={s.loginInfo}>
				<span className={s.symbol}>“</span>
				<p className={s.loginTitle}>
					Книги — это корабли мысли, странствующие по волнам времени и бережно
					несущие свой драгоценный груз от поколения к поколению.
				</p>
				<span className={s.quoteAuthor}>Бэкон Ф.</span>
			</div>
		</div>
	)
}

export default Login
