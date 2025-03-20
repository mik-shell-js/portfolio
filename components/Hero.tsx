import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import  MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    function cn(...classes: string[]) {
        return classes.filter(Boolean).join(' ');
    }
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
            </div>
            <div className="h-screen w-full items-center justify-center bg-white dark:bg-black dark:bg-grid-white/[0.01] bg-grid-black/[0.01]">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
                <div className='flex justify-center relative my-20 z-10'>
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                            Dynamic Web Magic with Next.js
                        </h2>

                        <TextGenerateEffect
                            className='text-center text-[40px] md:text-5xl lg:text-6xl font-bold'
                            words='Transforming Concepts into Seamless User Experiences'
                        />

                        <p className='text-center md:tracking-wider text-sm md:text-lg lg:text-2xl mb-4 max-w-80'>
                            Hi, I&apos;m a web developer and I love to build things with Next.js. I&apos;m passionate about creating dynamic web applications that are fast, responsive and accessible. I&apos;m always learning and experimenting with new technologies to improve my skills and build better products. Let&apos;s create something amazing together!
                        </p>
                        <a href='#about'>
                            <MagicButton 
                                title="Show my work"
                                icon={<FaLocationArrow />}
                                position='right'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero