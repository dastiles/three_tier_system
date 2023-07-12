'use client'

import Image from 'next/image'
import React from 'react'
import Header from './Header'
import Container from '../Container'

const WhatWeWant = () => {
    return (
        <Container>
            <div className='px-10 py-5'>
                <Header header='WHAT WE WANT' />
                <div className='flex flex-col-reverse md:flex-row gap-4 justify-between items-center my-4 md:my-0'>
                    <div className='tracking-wide text-neutral-600 text-md font-semibold'>
                        To provide for data protection with due regard to the Declaration of  Rights under the Constitution and the public and national interest; to establish a Cyber Security Centre and a Data Protection. In line with (ZITF) ZIMBABWE INTERANTIONAL TRADE FAIR 2023. We would like to share our security measures worldwide, which will flatten terrorism curve world wide.

                        Our solution is flexible for adoption and it is open for modification and can be integrated with any systems to safe guard government confidential data.

                    </div>
                    <Image
                        alt='court of arms'
                        src='/africa.png'
                        width={537}
                        height={405}
                        className='w-auto h-auto'

                    />
                </div>
            </div>
        </Container>
    )
}

export default WhatWeWant