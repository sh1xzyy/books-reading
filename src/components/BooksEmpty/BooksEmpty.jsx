import { MdMenuBook } from 'react-icons/md'
import { HiMiniArrowTurnDownRight } from 'react-icons/hi2'
import { RiFlagLine } from 'react-icons/ri'
import s from './BooksEmpty.module.css'

const BooksEmpty = () => {
	return (
		<div className={s.overlay}>
			<div className={s.modal}>
				<div className={s.steps}>
					<div className={s.step}>
						<h3 className={s.stepTitle}>Крок 1.</h3>
						<div className={s.stepContent}>
							<MdMenuBook color='#A6ABB9' size={22} />
							<div>
								<p className={s.stepMainText}>Створіть особисту бібліотеку</p>
								<div className={s.stepHint}>
									<HiMiniArrowTurnDownRight color='#ff6b08' size={12} />
									<p className={s.stepDescription}>
										Додайте до неї книжки, які маєте намір прочитати.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className={s.step}>
						<h3 className={s.stepTitle}>Крок 2.</h3>
						<div className={s.stepContent}>
							<RiFlagLine color='#A6ABB9' size={22} />
							<div>
								<p className={s.stepMainText}>
									Сформуйте своє перше тренування
								</p>
								<div className={s.stepHint}>
									<HiMiniArrowTurnDownRight color='#ff6b08' size={12} />
									<p className={s.stepDescription}>
										Визначте ціль, оберіть період, розпочинайте тренування.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button className={s.confirmBtn} type='submit'>
					Ok
				</button>
			</div>
		</div>
	)
}

export default BooksEmpty
