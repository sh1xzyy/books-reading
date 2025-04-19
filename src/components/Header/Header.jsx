import { Link, NavLink } from 'react-router-dom'
import { MdMenuBook } from 'react-icons/md'
import { PiHouseLineBold } from 'react-icons/pi'
import s from './Header.module.css'
import clsx from 'clsx'

const Header = () => {
	const setActive = ({ isActive }) => clsx(s.navLinkItem, isActive && s.active)

	return (
		<>
			<header className={s.header}>
				<div className={s.container}>
					<Link className={s.logo} to='/'>
						BR
					</Link>
					<div className={s.userDesktopInfo}>
						<span className={s.shortName}>M</span>
						<span className={s.userName}>Martha Stewart</span>
					</div>
					<nav className={s.nav}>
						<ul className={s.navLinks}>
							<li className={s.navLinkItem}>
								<NavLink to='/statistics' className={setActive}>
									<MdMenuBook color='#A6ABB9' size={22} />
								</NavLink>
							</li>
							<li className={s.navLinkItem}>
								<NavLink to='/' className={setActive}>
									<PiHouseLineBold color='#A6ABB9' size={20} />
								</NavLink>
							</li>
						</ul>
						<div className={s.userInfo}>
							<span className={s.shortName}>M</span>
						</div>
						<p className={s.logout}>Выход</p>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header
