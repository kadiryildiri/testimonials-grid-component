import React from "react"
import daniel from "../assets/images/image-daniel.jpg"
import jeanette from "../assets/images/image-jeanette.jpg"
import jonathan from "../assets/images/image-jonathan.jpg"
import kira from "../assets/images/image-kira.jpg"
import patrick from "../assets/images/image-patrick.jpg"

const Card = () => {
    return (
        <div className='px-6 py-12 md:p-40'>
            <section className='grid grid-cols-1	font-barlow-semi-condensed gap-6 md:grid md:grid-cols-3 md:gap-10'>
                <div className='grid grid-cols-1 gap-4 md:grid md:grid-cols-3 md:col-span-2 md:gap-10'>
                    <div className='bg-moderate-violet p-8 rounded-lg flex flex-col gap-4 bg-quot bg-no-repeat bg-[right_1rem_top] shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:col-span-2'>
                        <div className='flex gap-4 items-center'>
                            <img className='rounded-full border-[3px] border-purple-500 h-10' src={daniel} alt='' />
                            <div className=''>
                                <h1 className='font-semibold text-light-gray'>Daniel Clifford</h1>
                                <p className='text-sm font-medium text-light-gray/50'>Verified Graduate</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='font-semibold text-xl text-light-grayish-blue'>
                                I received a job offer mid-course, and the subjects I learned were current, if not more
                                so, in the company I joined. I honestly feel I got every penny's worth.
                            </p>
                            <p className='text-sm font-medium text-light-grayish-blue/70'>
                                "I was an EMT for many years before I joined the bootcamp. I've been looking to make a
                                transition and have heard some people who had an amazing experience here. I signed up
                                for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
                                The next 12 weeks was the best - and most gruelling - time of my life. Since completing
                                the course. I've successfully switched careers, working as a Software Engineer at a VR
                                startup. "
                            </p>
                        </div>
                    </div>

                    <div className='bg-very-dark-grayish-blue p-8 rounded-lg flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                        <div className='flex gap-4 items-center'>
                            <img className='rounded-full border-[3px] border-gray-500 h-10' src={jonathan} alt='' />
                            <div>
                                <h1 className='font-semibold text-light-gray'>Jonathan Walters</h1>
                                <p className='text-sm font-medium text-light-gray/50'>Verified Graduate</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='font-semibold text-xl text-light-grayish-blue'>
                                The team was very supportive and kept me motivated
                            </p>
                            <p className='text-sm font-medium text-light-grayish-blue/70'>
                                "I started as a total newbie with virtually no coding skills. I now work as a mobile
                                engineer for a big company. This was one of the best investments I've made in myself."
                            </p>
                        </div>
                    </div>

                    <div className='bg-white p-8 rounded-lg flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                        <div className='flex gap-4 items-center'>
                            <img className='rounded-full border-[3px] h-10' src={jeanette} alt='' />
                            <div>
                                <h1 className='font-semibold text-very-dark-grayish-blue'>Jeanette Harmon</h1>
                                <p className='text-sm font-medium text-light-gray'>Verified Graduate</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='font-semibold text-xl text-very-dark-blackish-blue'>
                                An overall wonderful and rewarding experience
                            </p>
                            <p className='text-sm font-medium text-very-dark-blackish-blue/70'>
                                "Thank you for the wonderful experience! I now have a job I really enjoy, and make a
                                good living while doing something I love."
                            </p>
                        </div>
                    </div>

                    <div className='bg-very-dark-blackish-blue p-8 rounded-lg flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:col-span-2'>
                        <div className='flex gap-4 items-center'>
                            <img className='rounded-full border-[3px] border-purple-500 h-10' src={patrick} alt='' />
                            <div>
                                <h1 className='font-semibold text-white'>Patrick Abrams</h1>
                                <p className='text-sm font-medium text-light-gray'>Verified Graduate</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='font-semibold text-xl text-white'>
                                Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from
                                them and learning from their experiences was easy.
                            </p>
                            <p className='text-sm font-medium text-light-gray'>
                                "The staff seem genuinely concerned about my progress which I find really refreshing.
                                The program gave me the confidence necessary to be able to go out in the world and
                                present myself as a capable junior developer. The standard is above the rest. You will
                                get the personal attention you need from an incredible community of smart and amazing
                                people."
                            </p>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-8 rounded-lg flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                    <div className='flex gap-4 items-center'>
                        <img className='rounded-full border-[3px] h-10' src={kira} alt='' />
                        <div>
                            <h1 className='font-semibold text-very-dark-grayish-blue'>Kira Whittle</h1>
                            <p className='text-sm font-medium text-light-gray'>Verified Graduate</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='font-semibold text-xl text-very-dark-blackish-blue'>
                            Such a life-changing experience. Highly recommended!
                        </p>
                        <p className='text-sm font-medium text-very-dark-blackish-blue/70'>
                            "Before joining the bootcamp, I've never written a line of code. I needed some structure
                            from professionals who can help me learn programming step by step. I was encouraged to
                            enroll by a former student of theirs who can only say wonderful things about the program.
                            The entire curriculum and staff did not dissapoint. They were very hands-on and I never had
                            to wait long for assistance. The agile team project, in particular, was outstanding. It took
                            my learning to the next level in a way that no tutorial could ever have. In fact, I've often
                            referred to it during interviews as an example of my developent experience. It certainly
                            helped me land a job as full-stack developer after receiving multiple offers. 100%
                            recommend!"
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Card
