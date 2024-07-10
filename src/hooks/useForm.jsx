import { useState } from 'react'

const useForm = () => {
  const [formState, setFormState] = useState({})

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setFormState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleResetForm = () => setFormState({})

  return {
    ...formState,
    formState,
    handleInputChange,
    handleResetForm
  }
}

export default useForm
