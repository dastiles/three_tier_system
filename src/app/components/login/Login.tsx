'use client'
import Image from 'next/image'
import { useCallback, useState, useEffect } from 'react'
import Input from '../inputs/Input'
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { BsKeyFill } from 'react-icons/bs'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [variant, setVariant] = useState(false)
    const session = useSession()
    const router = useRouter()


    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/home')
        }
    }, [session?.status, router])
    const { register, handleSubmit, formState: { errors, }, } = useForm<FieldValues>({
        defaultValues: {
            fullname: '',
            email: '',
            password: ''
        }
    })

    const toggleVariant = useCallback(() => {
        setVariant((value) => !value)
    }, [])
    const onSubmit: SubmitHandler<FieldValues> = data => {
        setIsLoading(true);
        console.log(data)
        if (variant) {
            axios.post('/api/register', data)
                .then(() => signIn('credentials', {
                    ...data,
                    redirect: false
                }))
                .catch(() => toast.error('Something Went Wrong'))
                .finally(() => {

                    setIsLoading(false)
                })
        }

        if (!variant) {
            signIn('credentials', {
                ...data,
                redirect: false
            }).then((callback) => {
                if (callback?.error) {
                    toast.error('Invalid credentials')
                }

                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in')
                    router.push('/home')
                }
            }).finally(() => setIsLoading(false))
        }
    }
    return (
        <div className='h-full bg-neutral-100 flex justify-center items-center'>
            <div className='flex flex-col items-center justify-center w-[60vw] md:w-[40vw] lg:w-[25vw]'>
                <Image
                    alt='logo'
                    src='/logo.png'
                    height={80}
                    width={80}
                    className='w-auto h-auto'
                />
                <div className='my-2 tracking-wide text-sm md:text-md font-semibold text-center'>
                    Zimbabwe Digital Passport Command Center
                </div>
                <div className='w-full flex flex-col gap-2 mt-2'>
                    {variant && (
                        <Input input_type='text' id='Fullname' icon={AiOutlineUser} register={register} errors={errors} required disabled={isLoading} />
                    )}

                    <Input input_type='email' id='Email' icon={AiOutlineMail} register={register} errors={errors} required disabled={isLoading} />
                    <Input input_type='password' id='Password' icon={BsKeyFill} register={register} errors={errors} required disabled={isLoading} />
                </div>
                <button onClick={handleSubmit(onSubmit)} className='w-full text-white bg-blue-700 mt-2 py-2 font-bold disabled:cursor-not-allowed disabled:opacity-70' disabled={isLoading}>{variant ? 'Sign up' : 'Sign in'}</button>
                <div
                    onClick={toggleVariant}
                    className='text-blue-700 text-sm font-semibold cursor-pointer mt-2'>
                    {variant ? 'Already have an account?' : "New user does not have an account?"}

                </div>
            </div>

        </div>
    )
}

export default Login