import { useEffect, useState } from 'react'

const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm)
  const [formValidation, setFormValidation] = useState({})

  useEffect(() => {
    createValidators()
  }, [formState])

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({ ...formState, [name]: value })
  }

  const onResetForm = () => setFormState(initialForm)

  const createValidators = () => {
    const formCheckedValues = Object.fromEntries(
      Object.entries(formValidations).map(([formField, [fn, errorMessage]]) => {
        const isValid = fn(formState[formField])
        return [`${formField}Valid`, isValid ? null : errorMessage]
      })
    )
    setFormValidation(formCheckedValues)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation
  }
}

export default useForm
