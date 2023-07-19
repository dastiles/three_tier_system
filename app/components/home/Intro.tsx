'use client'
import Image from 'next/image'
import Container from '../Container'

const Intro = () => {
    return (
        <Container>
            <div className='px-10 py-5'>
                <h1 className='font-bold text-5xl tracking-wide '>Goverment of Zimbabwe <br /> Ministry of ICT</h1>

                <div className='flex flex-col-reverse md:flex-row gap-4 justify-between items-center my-4 md:my-0'>
                    <h1 className='font-bold  text-5xl tracking-wide text-center pb-4'>CYBER SECURITY <br /> DEPARTMENT<br /> 2023</h1>
                    <Image
                        alt='court of arms'
                        src='/courtofarms.png'
                        width={390}
                        height={499}
                        className='w-auto h-auto'

                    />
                </div>
                <div className='text-md lg:text-2xl font-bold tracking-wide mt-4 absolute bottom-0 text-center px-10 md:px-20 '>
                    TRANSFORMATIVE INNOVATION  &  GLOBAL COMPETITIVENESS
                </div>
            </div>
        </Container >
    )
}

export default Intro