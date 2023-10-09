import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs"

import { join } from "@/scripts";
import { appIcon, icCodeBox, icMenuCheck, icThreeStars, ilBestSeller, ilGroupUsers, ilZoomSkate } from "@/assets";
import LayoutHeader from "@/components/LayoutHeader";

function SectionIntroduction({ className }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <section
            className={join("flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 place-content-center", className)}>
            <div className="max-w-lg  space-y-4 lg:max-w-lg">
                <button className="bg-purple-200 px-2 py-1 text-purple-700 rounded">Join in on something big!</button>
                <h3 className="text-3xl font-medium">Grow your programming skills through <span className="text-highlight">visualization</span></h3>
                <p className="text-stone-700">Learn programming, data structures & algorithms, and prepare for the interview - all in one place.</p>
                <button className="flex w-1/2 lg:w-2/5 btn-primary">
                    <p className="flex-1">Join for free</p>
                    <BsArrowRight
                        alt="icon"
                        className="w-6 h-6 object-cover" />
                </button>
            </div>
            <div className="w-full h-56 bg-red-500" />
        </section>
    );
}

function SectionFeature({ className }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={join("flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4", className)}>
            <div className="flex flex-col space-y-4">
                <h1 className="text-2xl font-medium">Land your first job with our Learning Paths!</h1>
                <div className="flex-none">
                    <div className="flex space-x-2 py-2">
                        <input type="checkbox" />
                        <p>Interactive and Highly intuitive Lessons</p>
                    </div>
                    <div className="flex space-x-2 py-2">
                        <input type="checkbox" />
                        <p>Save Time, Save Money</p>
                    </div>
                    <div className="flex space-x-2 py-2">
                        <input type="checkbox" />
                        <p>Build Projects, Get Certified</p>
                    </div>
                </div>
                <button className="btn-primary items-center hidden md:flex">
                    <p className="flex-1">Start Learning</p>
                    <BsArrowRight
                        alt="icon"
                        className="w-6 h-6 object-cover" />
                </button>
            </div>
            <section className="w-full h-56 bg-red-500"></section>
            <button className="btn-primary flex items-center md:hidden">
                <p className="flex-1">Start Learning</p>
                <BsArrowRight
                    alt="icon"
                    className="w-6 h-6 object-cover" />
            </button>
        </div>
    );
}

function SectionReason({ className }: React.HTMLAttributes<HTMLDivElement>) {
    const reasons = [
        {
            icon: icMenuCheck,
            title: "Programming made easy",
            description: "We focus on simplicity. Programming tutorials and examples written in simple, understandable language for beginners.",
        },
        {
            icon: icThreeStars,
            title: "Content You Can Trust",
            description: "A dedicated group of experts continually working to create programming resources that is accurate and easier to understand.",
        },
        {
            icon: icCodeBox,
            title: "Learn by Doing",
            description: "The only way to learn to program is by writing code. We provide a lot of complete examples so that run and edit code on your own.",
        },
    ];

    return (
        <div className={join("flex flex-col space-y-4", className)}>
            <h1 className="text-2xl text-center font-extrabold">Why BeeLearn?</h1>
            <section className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                {
                    reasons.map((item, index) => (
                        <div
                            key={index}
                            className="flex-1 flex items-start space-x-8">
                            <Image
                                alt="icon"
                                src={item.icon} />
                            <div className="flex flex-col space-y-2">
                                <h4 className="text-lg font-medium">{item.title}</h4>
                                <p className="max-w-sm">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    );
}

function BannerWelcome() {
    return (
        <div className="relative h-[36em] flex flex-col place-content-center bg-purple-800 p-8 text-white">
            <div className="max-w-sm md:max-w-lg space-y-4 z-10">
                <p>Beginners welcome</p>
                <h1 className="text-6xl font-extrabold">Start coding in seconds</h1>
                <p className="text-lg">Go ahead, give it a try. Our hands on learning environment means you&apos;ll be writing real code from your very first lesson.</p>
                <div className="flex space-x-8">
                    <button className="bg-white text-violet-900 p-2 rounded truncate">Continue Lesson</button>
                    <button className="text-white truncate">More beginner courses</button>
                </div>
            </div>
            <Image
                src={ilZoomSkate}
                alt="Fast Learning"
                className="absolute right-0 md:left-1/2 -z-0" />
        </div>
    );
}

function BannerQuiz() {
    return (
        <div className="relative h-[27.4em] flex place-content-center p-8 bg-yellow-400">
            <div className="max-w-sm md:max-w-none flex space-x-4 overflow-x-hidden z-10">
                <div className="flex-1 flex-col space-y-2">
                    <h1 className="text-4xl font-extrabold">Not sure where to start?</h1>
                    <p>This short quiz will sort you out. Answer a few simple questions to get personal career advice and course recommendations.</p>
                    <button className="btn-primary">Take the quiz</button>
                </div>
            </div>
            <Image
                src={ilGroupUsers}
                alt="Confused Users"
                className="absolute right-0 z-0"></Image>

        </div>
    );
}

export default function Home() {
    return (
        <main className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-8 py-8">
                <SectionIntroduction className="mx-8" />
                <SectionFeature className="mx-8" />
                <BannerWelcome />
                <SectionReason className="mx-8" />
                <BannerQuiz />
                <div className="flex flex-col space-y-8 p-[4%]">
                    <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-violet-700 to-blue-400 bg-clip-text text-transparent">Frequently Asked Questions</h1>
                    {/* <div className="flex flex-col space-y-4 bg-violet-700 px-8 py-4 text-white rounded-xl">
                        <h3 className="text-lg font-medium">What exactly is BeeLearn?</h3>
                        <p>BeeLearn is a visual learning platform to learn programming, data structures & algorithm and prepare for the coding interview. Log2Base2 is globally trusted learning platform with 600K+ learners across 70+ countries.</p>
                    </div> */}
                    <div>
                        <div className="bg-slate-200 px-4 py-4 text-stone-700 rounded-lg">
                            <p>Do you provide a free tier?</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}