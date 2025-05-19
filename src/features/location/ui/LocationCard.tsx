import type { LocationType } from "../../character/api/characterApi.type"

type Props = {
  item: LocationType
}

export const LocationCard = ({item}: Props) => {

  return (
    <div>
      <ul className="list-disc pl-5 border-b border-gray-400 py-4">
        <li className="">Название локации: <span className="font-bold">{item.name}</span> </li>
        <li>Тип локации: <span className="font-bold">{item.type}</span> </li>
        <li>Измерение, в котором находится местоположение: <span className="font-bold">{item.dimension}</span> </li>
        <li>Количество персонажей, которых видели в данной локации: <span className="font-bold">{item.residents.length || 0}</span> </li>
      </ul>
    </div>
  )
}
