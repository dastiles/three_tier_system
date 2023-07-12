'use client'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='bg-white shadow-md w-full relative'>
            <div className='mx-auto w-[90vw]  '>
                <nav className='flex justify-between items-center py-2'>
                    <Image
                        alt='logo'
                        src='/logo.png'
                        width={40}
                        height={40}
                        className='w-auto h-auto'
                    />
                    <div className='flex items-center gap-3'>
                        <div className='border-[1px] border-black font-light hover:shadow-lg px-2 py-1 text-sm lg:text-md'>Log Out</div>
                        <div className='w-[35px] h-[35px] rounded-full transition hover:shadow-lg'>
                            <Image
                                alt='user logo'
                                src='/placeholder.jpg'
                                width={35}
                                height={35}
                                className='w-auto h-auto rounded-full
                        '
                            />
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar