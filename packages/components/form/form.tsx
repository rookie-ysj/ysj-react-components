import { CSSProperties, FormEvent, HTMLAttributes, ReactNode, useRef, useState } from 'react';
import FormContext from './formContext.ts';
import './index.css'

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  className?: string;
  style?: CSSProperties;
  onFinish?: (values: Record<string, any>) => void;
  onFinishFailed?: (errors: Record<string, any>) => void;
  initialValues?: Record<string, any>;
  children?: ReactNode
}

const Form = (props: FormProps) => {
  const {
    className,
    style,
    children,
    onFinish,
    onFinishFailed,
    initialValues,
  } = props

  const [values, setValues] = useState<Record<string, any>>(initialValues || {})
  const validatorMap = useRef(new Map<string, Function>())
  const errors = useRef<Record<string, any>>({})

  const onValueChange = (key: string, value: any) => {
    values[key] = value
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    for (const [key, callbackFunc] of validatorMap.current) {
      if (typeof callbackFunc === 'function') {
        errors.current[key] = callbackFunc()
      }
    }

    const errorList = Object.keys(errors.current).map(key => {
      return errors.current[key]
    }).filter(Boolean)

    if (errorList.length > 0) {
      onFinishFailed?.(errors.current)
    } else {
      onFinish?.(values)
    }
  }

  const handleValidateRegister = (name: string, cb: Function) => {
    validatorMap.current.set(name, cb)
  }

  return (
    <FormContext.Provider
      value={{
        onValueChange,
        values,
        setValues,
        validateRegister: handleValidateRegister,
      }}
    >
      <form className={className} style={style} onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  )
}

export default Form


