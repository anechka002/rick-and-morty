import { Link } from "react-router"
import type { CharacterType } from "../api/characterApi.type"
import { PATH } from "../../../common/routing/Routing"

type Props = {
  data: CharacterType
}

export const CharacterCard = ({data}: Props) => {
  return (
    <Link to={`${PATH.CHARACTER.replace(':id', String(data.id))}`}>
      <div className='flex flex-col items-center flex-1/5 aspect-square p-2.5 w-[300px] bg-slate-700 rounded'>
        <div className='text-slate-50 font-bold text-[32px] mb-2.5 block text-center hover:no-underline'>{data.name}</div>
        <img src={data.image} alt={`${data.name} avatar`} />
      </div>
    </Link>
  )
}