import { Route, Routes } from "react-router"
import { HomePage } from "../../pages/HomePage/HomePage"
import { CharacterPage } from "../../pages/CharacterPage/CharacterPage"
import { LocationPage } from "../../pages/LocationPage/LocationPage"
import { EpisodePage } from "../../pages/EpisodePage/EpisodePage"

export const PATH = {
  HOME: "/",
  CHARACTERS: "/characters",
  LOCATIONS: "/locations",
  EPISODES: "/episodes",
  NOTFOUND: '*',
} as const

export const Routing = () => {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<HomePage/>}/>
      <Route path={PATH.CHARACTERS} element={<CharacterPage/>}/>
      <Route path={PATH.LOCATIONS} element={<LocationPage/>}/>
      <Route path={PATH.EPISODES} element={<EpisodePage/>}/>
    </Routes>
  )
}
