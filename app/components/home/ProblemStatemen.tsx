'use client'
import Header from './Header'
import Container from '../Container'

const ProblemStatement = () => {
    return (
        <Container>
            <div className='px-10 '>
                <Header header='PROBLEM STATEMENT' />
                <div className='flex flex-col items-center justify-center'>
                    <div className='tracking-wide text-neutral-600 text-md font-semibold mt-4 md:w-[60vh] text-center'>
                        As the members of Cyber Security team we stand to defend our nation from cyber threats which mostly threaten national interest . We came up with a three tier security system . This is a way to stop hackers (terrorism) from penetrating on any government information. For the hackers to leak information from our systems it will be impossible the three tier security is the way to go. Giving recent examples we have 17 government websites were hacked since 2018. All the confidential information must never leak. The benefits of three tier security system. ZEC WAS TEMPORED WITH IN 2018 according to HERALD  2018.
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProblemStatement