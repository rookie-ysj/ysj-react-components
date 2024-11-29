import { FC, HTMLInputTypeAttribute } from 'react';
import { useControllableValue } from 'ahooks';

interface BaseInputProps {
  onChange?: (value: string) => void
  defaultValue?: string
  value?: string
  type?: HTMLInputTypeAttribute
  disabled?: boolean
  maxLength?: number
}

interface InputProps extends BaseInputProps {
}

const Input: FC<InputProps> = (props) => {
  const {
    value: propValue,
    defaultValue,
    onChange,
  } = props

  const [value, setValue] = useControllableValue({
    value: propValue,
    defaultValue,
    onChange
  })

  return (
    <input value={value} onChange={setValue} {...props}/>
  )
}

export default Input