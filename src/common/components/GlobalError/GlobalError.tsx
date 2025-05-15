import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { selectError, setAppError } from '../../../app/app-slice'

export const GlobalError = () => {
  const errorMessage = useAppSelector(selectError)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setAppError({error: null}))
    }
  }, [errorMessage])

  return <ToastContainer autoClose={3000} />
}
