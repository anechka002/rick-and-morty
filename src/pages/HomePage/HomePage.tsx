import { PATH } from "../../common/routing/Routing"
import { NavButton } from "../../common/components/NavButton/NavButton"
import backgroundImage from '../../assets/img/bg.jpg'
import { Title } from "../../common/components/Title/Title"

export const HomePage = () => {
  return (
    <div 
      className="bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage:  `linear-gradient(to bottom, rgba(241, 245, 249, 1), rgba(229, 231, 235, 0.2)), url(${backgroundImage})` }}
    >
      <Title>The Rick and Morty</Title>
      <div className="flex justify-center mt-6">
        <NavButton 
          className="m-2.5 p-2.5 bg-slate-800 text-slate-50 text-2xl w-[200px] rounded border border-solid border-slate-800 transition-colors ease-in-out hover:bg-slate-50 hover:text-slate-800" 
          to={PATH.CHARACTERS}
          >Characters
        </NavButton>

        <NavButton 
          className="m-2.5 p-2.5 bg-slate-800 text-slate-50 text-2xl w-[200px] rounded border border-solid border-slate-800 transition-colors ease-in-out hover:bg-slate-50 hover:text-slate-800" 
          to={PATH.LOCATIONS}
          >Locations
        </NavButton>

        <NavButton 
          className="m-2.5 p-2.5 bg-slate-800 text-slate-50 text-2xl w-[200px] rounded border border-solid border-slate-800 transition-colors ease-in-out hover:bg-slate-50 hover:text-slate-800" 
          to={PATH.EPISODES}
          >Episodes
        </NavButton>

      </div>
    </div>
  )
}
