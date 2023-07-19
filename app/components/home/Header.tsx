'user client'

interface HeaderProps {
    header: string
}

import Image from 'next/image'


const Header: React.FC<HeaderProps> = ({
    header
}) => {
    return (
        <div className=' flex items-center justify-between'>
            <Image
                alt='court of arms'
                src='/courtofarms.png'
                width={90}
                height={199}
                className='w-auto h-auto '

            />
            <div className='font-light text-4xl  md:text-5xl tracking-wide text-center '>{header}</div>
            <Image
                alt='court of arms'
                src='/logo.png'
                width={90}
                height={199}
                className='w-auto h-auto '

            />
        </div>
    )
}

export default Header