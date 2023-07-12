'use client'
import { IconType } from "react-icons"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
    id: string
    input_type: string
    icon: IconType
    disabled?: boolean
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    input_type,
    icon: Icon,
    disabled,
    required,
    register,
    errors,
}) => {
    return (
        <div className='relative w-full '>
            <input type={input_type} placeholder={id} className={`w-full bg-white py-2 pl-7 font-light outline-none border-2 disabled:cursor-not-allowed disabled:opacity-70
            ${errors[id.toLowerCase()] ? "border-rose-500" : 'border-neutral-400'}
            ${errors[id.toLowerCase()] ? "focus:border-rose-500" : 'focus:border-neutral-400'}
            `}
                disabled={disabled}
                {...register(id.toLowerCase(), { required })}


            />
            <Icon size={20} className={`absolute top-[0.7rem] left-1 
            ${errors[id.toLowerCase()] ? 'text-rose-500' : 'text-neutral-400'}
            `} />
        </div>
    )
}

export default Input