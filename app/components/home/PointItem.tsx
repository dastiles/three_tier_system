'use client'

interface PointItemProps {
    label: string
}

import React from 'react'

const PointItem: React.FC<PointItemProps> = ({
    label
}) => {
    return (
        <div className='flex items-center gap-4'>
            <div className='bg-blue-800 w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] rounded-full'></div>
            <p className='tracking-wide text-neutral-600 lg:text-md text-sm font-semibold'>{label}</p>
        </div>
    )
}

export default PointItem