import { NavLink } from 'react-router'
import logo from '../../../assets/img/logo.png'
import { PATH } from '../../routing/Routing'
import { NavButton } from '../NavButton/NavButton'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectStatus } from '../../../app/app-slice'
import { BarLoader } from 'react-spinners'

export const Header = () => {

  const status = useAppSelector(selectStatus)

  return (
    <div className="">
      <div className='container ml-12 flex items-center gap-2.5 pb-1.5 pt-5  mb-2.5'>
        <NavLink to={PATH.HOME}>
          <img className='w-10 h-10' src={logo} alt="logotype" />
        </NavLink>

        <NavButton 
          className='text-[18px] underline mr-5 text-slate-800 hover:no-underline transition hover:text-slate-600' 
          to={PATH.HOME}
          >Home
        </NavButton>

        <NavButton 
          className='text-[18px] underline mr-5 text-slate-800 hover:no-underline transition hover:text-slate-600' 
          to={PATH.CHARACTERS}
          >Characters
        </NavButton>

        <NavButton 
          className='text-[18px] underline mr-5 text-slate-800 hover:no-underline transition hover:text-slate-600' 
          to={PATH.LOCATIONS}
          >Locations
        </NavButton>

        <NavButton 
          className='text-[18px] underline mr-5 text-slate-800 hover:no-underline transition hover:text-slate-600' 
          to={PATH.EPISODES}
          >Episodes
        </NavButton>
      </div>
      {status === 'loading' && <BarLoader color={'#1e293b'} width={1700} />}
    </div>
  )
}
