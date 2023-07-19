'use client'

import Image from 'next/image'

import Container from '../Container'

const MindGear = () => {
    return (
        <Container>
            <div className='px-10 py-5'>
                <div className=' flex items-center gap-20'>
                    <Image
                        alt='court of arms'
                        src='/courtofarms.png'
                        width={90}
                        height={199}
                        className='w-auto h-auto '

                    />
                    <div className='font-light  text-5xl tracking-wide  '>VISION & MISSION</div>
                </div>
                <div className='flex flex-col-reverse md:flex-row gap-4 justify-between items-center my-4 md:my-0'>
                    <div className='tracking-wide text-neutral-600 text-md font-semibold'>
                        An Act to provide for data protection with due regard to the Declaration of  Rights under the Constitution and the public and national interest; to establish a Cyber Security Centre and a Data Protection Authority and to provide for their functions; to create a technology driven business environment and encourage technological development and the lawful use of technology; to amend sections 162 to 166 of the Criminal Code (Codification and Reform) Act [Chapter 9:23] to provide for investigation and collection of evidence of cyber crime and unauthorized data collection and breaches, and to provide for admissibility of electronic evidence for such offences; and to provide for matters connected with or incidental to the foregoing.
                        ENACTED by the Parliament and the President of Zimbabwe.

                    </div>
                    <Image
                        alt='court of arms'
                        src='/mindgear.png'
                        width={537}
                        height={405}
                        className='w-auto h-auto'

                    />
                </div>
            </div>
        </Container>
    )
}

export default MindGear