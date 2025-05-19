import { Route, Routes } from "react-router"
import { HomePage } from "../../pages/HomePage/HomePage"
import { CharacterPage } from "../../pages/CharacterPage/CharacterPage"
import { LocationPage } from "../../pages/LocationPage/LocationPage"
import { EpisodePage } from "../../pages/EpisodePage/EpisodePage"
import { CharacterItem } from "../../features/character/ui/CharacterItem"
import { PageNotFound } from "../components/PageNotFound/PageNotFound"

export const PATH = {
  HOME: "/",
  CHARACTERS: "/characters",
  CHARACTER: "/character/:id",
  LOCATIONS: "/locations",
  EPISODES: "/episodes",
  NOTFOUND: '*',
} as const

export const Routing = () => {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<HomePage/>}/>
      <Route path={PATH.CHARACTERS} element={<CharacterPage/>}/>
      <Route path={PATH.CHARACTER} element={<CharacterItem/>}/>
      <Route path={PATH.LOCATIONS} element={<LocationPage/>}/>
      <Route path={PATH.EPISODES} element={<EpisodePage/>}/>
      <Route path={PATH.NOTFOUND} element={<PageNotFound />} />
    </Routes>
  )
}
