import "./form-input.css"

type FormInputProps = {
  label: string
  value: string | number
  updateValue(value: unknown): void
  placeholder?: string
}

export const FormInput = ({label, value, updateValue, placeholder }: FormInputProps) => {
  return (
    <div className="form-input">
      <label htmlFor={label}>{label}</label>
      <input 
        type="text" 
        value={value} 
        onChange={event => updateValue(event.target.value)} id={label} 
        placeholder={placeholder}/>
    </div>
  )
}