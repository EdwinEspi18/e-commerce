import { useState } from 'react'

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)
  const reset = () => {
    setValues(initialState)
  }
  const handleChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value })
  }

  return [values, handleChange, reset]
}

export default useForm
