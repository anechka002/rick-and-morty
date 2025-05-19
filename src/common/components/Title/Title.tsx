type Props = {
  children: React.ReactNode;
}

export const Title = ({children}: Props) => {
  return (
    <>
      <h1 className="m-0 text-slate-800 font-extrabold text-8xl text-center pt-12 mb-5">{children}</h1>
    </>
  )
}
