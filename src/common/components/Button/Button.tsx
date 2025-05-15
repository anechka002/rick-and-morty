import type { ComponentProps } from "react"

type Props = ComponentProps<"button">

export const Button = ({ children, disabled, onClick, ...rest }: Props) => {
  return (
    <button 
      className={`m-2.5 p-2.5 text-2xl w-[200px] rounded border border-solid transition-colors ease-in-out duration-300 text-center 
      ${disabled ? 'bg-slate-200/60 text-slate-700/60 cursor-not-allowed' : 'bg-slate-800 text-slate-50 hover:bg-slate-50 hover:text-slate-800'}`}
      onClick={onClick} 
      disabled={disabled} 
      {...rest}
    >
      {children}
    </button>
  )
}
