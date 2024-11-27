import { FC } from 'react';
import { useControllableValue } from 'ahooks';

interface BaseInputProps {
  onChange?: (value: string) => void
  defaultValue?: string
  value?: string
}

interface InputProps extends BaseInputProps {
}

const Input: FC<InputProps> = (props) => {
  const {
    value: propValue,
    defaultValue,
    onChange
  } = props

  const [value, setValue] = useControllableValue({
    value: propValue,
    defaultValue,
    onChange
  })

  return (
    <input value={value} onChange={setValue}/>
  )
}

export default Input