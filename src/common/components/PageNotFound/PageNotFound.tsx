import { Navigate } from 'react-router'
import { Button } from '../Button/Button'
import { PATH } from '../../routing/Routing'

export const PageNotFound = () => {

  const handleGoMainPage = () => {
    return <Navigate to={PATH.CHARACTERS}/>
  }

  return (
    <div className='flex flex-col items-center '>
      <h1 className='text-[250px] text-slate-700 font-bold'>404</h1>
      <h2 className='text-5xl uppercase text-slate-700 mb-2.5'>page not found</h2>
      <Button onClick={handleGoMainPage}>Go to main page</Button>
    </div>
  )
}
