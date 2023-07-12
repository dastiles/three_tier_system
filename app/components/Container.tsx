'use client'

interface ContainerProps {
    children: React.ReactNode
}

import Image from 'next/image'
import React from 'react'

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className='relative min-h-[100vh]'>
            <Image
                alt='left-top-ring'
                src='/ring1.png'
                width={30}
                height={40}
                className='w-auto h-auto absolute top-0 left-0'
            />
            <Image
                alt='right-top-ring'
                src='/ring2.png'
                width={30}
                height={40}
                className='w-auto h-auto absolute top-0 right-0'
            />
            <Image
                alt='left-botton-ring'
                src='/ring3.png'
                width={30}
                height={40}
                className='w-auto h-auto absolute bottom-0 left-0'
            />
            <Image
                alt='right-botton-ring'
                src='/ring4.png'
                width={30}
                height={40}
                className='w-auto h-auto absolute bottom-0 right-0'
            />
            {children}
        </div>
    )
}

export default Container