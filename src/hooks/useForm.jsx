import { useEffect, useMemo, useState } from 'react'

const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm)
  const [formValidation, setFormValidation] = useState({})

  useEffect(() => {
    createValidators()
  }, [formState])

  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])

  const isValidForm = useMemo(() => {
    return Object.values(formValidation).every((value) => value === null)
  }, [formValidation])

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
    ...formValidation,
    isValidForm
  }
}

export default useForm
