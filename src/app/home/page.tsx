'use client'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Navbar from '../components/nav/Navbar'
import Container from '../components/Container'
import Intro from '../components/home/Intro'
import MindGear from '../components/home/MindGear'
import Header from '../components/home/Header'
import ProblemStatement from '../components/home/ProblemStatemen'
import PointItem from '../components/home/PointItem'
import WhatWeWant from '../components/home/WhatWeWant'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <MindGear />
            <ProblemStatement />
            <Container>
                <div className='px-10'>
                    <Header header='THREE TIER INTERFACE' />
                    <div className='flex flex-col-reverse lg:flex-row gap-4 justify-between lg:items-center my-4 md:my-10'>
                        <div className='flex flex-col justify-between lg:h-[40vh] gap-4'>
                            <PointItem label='Its Impossible to hack' />
                            <PointItem label='Data does not leak simply' />
                        </div>
                        <Image
                            alt='court of arms'
                            src='/laptop.jpg'
                            width={337}
                            height={305}
                            className='w-auto h-auto'

                        />
                        <div className='flex flex-col justify-between lg:h-[40vh] gap-4'>
                            <PointItem label='No one can unlock your account unless authorized' />
                            <PointItem label='Prevent terrorist from steal  confidential Information from being extracted  ' />
                        </div>
                    </div>
                </div>
            </Container>
            {/* first tier */}
            <Container>
                <div className='px-10'>
                    <Header header='FIRST TIER INTERFACE' />
                    <div className='flex gap-4 justify-center items-center my-4 md:my-10'>

                        <Image
                            alt='court of arms'
                            src='/laptop2.png'
                            width={537}
                            height={405}
                            className='w-auto h-auto'

                        />

                    </div>
                </div>
            </Container>
            <Container>
                <div className='px-10'>
                    <Header header='SECOND TIER INTERFACE' />
                    <div className='flex gap-4 justify-center items-center my-4 md:my-10'>

                        <Image
                            alt='court of arms'
                            src='/laptop3.png'
                            width={537}
                            height={405}
                            className='w-auto h-auto'

                        />

                    </div>
                </div>
            </Container>
            <Container>
                <div className='px-10'>
                    <Header header='THIRD TIER INTERFACE' />
                    <div className='flex gap-4 justify-center items-center my-4 md:my-10'>

                        <Image
                            alt='court of arms'
                            src='/laptop4.png'
                            width={537}
                            height={405}
                            className='w-auto h-auto'

                        />

                    </div>
                </div>
            </Container>
            <WhatWeWant />
        </div >
    )
}

export default Home