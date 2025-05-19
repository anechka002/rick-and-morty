import type { EpisodeType } from "../../character/api/characterApi.type"

type Props = {
  item: EpisodeType
}

export const EpisodeCard = ({item}: Props) => {
  return (
    <div>
      <ul className="list-disc pl-5 border-b border-gray-400 py-4">
        <li className="">Эпизод: <span className="font-bold">{item.episode}</span> </li>
        <li>Название эпизода: <span className="font-bold">{item.name}</span> </li>
        <li>Дата выхода эпизода в эфир: <span className="font-bold">{item.air_date}</span> </li>
        <li>Список персонажей, которые были замечены в эпизоде: <span className="font-bold">{item.characters.length || 0}</span> </li>
      </ul>
    </div>
  )
}
