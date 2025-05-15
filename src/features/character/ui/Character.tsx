import type { CharacterType } from "../api/characterApi.type"

type Props = {
  item: CharacterType
}

export const Character = ({item}: Props) => {
  return (
    <div className='p-2.5 w-[300px] bg-slate-700 rounded'>
      <div className='text-slate-50 font-bold text-[32px] mb-2.5 block text-center hover:no-underline'>{item.name}</div>
      <img src={item.image} alt={`${item.name} avatar`} />
    </div>
  )
}
