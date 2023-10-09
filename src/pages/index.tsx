import React from "react";
import Image from "next/image";

import { join } from "@/scripts";
import { icCodeBox, icMenuCheck, icThreeStars } from "@/assets";

function SectionIntroduction({ className }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <section
            className={join("flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 place-content-center", className)}>
            <div className="max-w-lg  space-y-4 lg:max-w-lg">
                <button className="bg-purple-200 px-2 py-1 text-purple-700 rounded">Join in on something big!</button>
                <h3 className="text-3xl font-medium">Grow your programming skills through <span className="bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-transparent">visualization</span></h3>
                <p className="text-stone-700">Learn programming, data structures & algorithms, and prepare for the interview - all in one place.</p>
                <button className="w-1/2 lg:w-2/5 bg-purple-700 p-2 text-white rounded">Join for free</button>
            </div>
            <div className="w-full h-56 bg-red-500" />
        </section>
    );
}

function SectionFeature({ className }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={join("flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4", className)}>
            <div>
                <h1 className="text-2xl font-medium">Land your first job with our Learning Paths!</h1>
                <section className="flex-none">
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
                </section>
                <button className="bg-purple-700 p-2 text-white rounded hidden md:block">Join for FREE</button>
            </div>
            <section className="w-full h-56 bg-red-500"></section>
            <button className="bg-purple-700 p-2 text-white rounded md:hidden">Join for FREE</button>
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
        <div className="flex place-content-center bg-slate-900 p-8 text-white">
            <div className="max-w-sm space-y-4">
                <p>Beginners welcome</p>
                <h1 className="text-4xl font-extrabold">Start coding in seconds</h1>
                <p>Go ahead, give it a try. Our hands on learning environment means you&apos;ll be writing real code from your very first lesson.</p>
                <div className="flex space-x-8">
                    <button className="border border-violet-500 text-violet-500 p-2 rounded truncate">Continue Lesson</button>
                    <button className="text-violet-500 truncate">More beginner courses</button>
                </div>
            </div>
        </div>
    );
}

function BannerQuiz() {
    return (
        <div className="flex place-content-center p-8 bg-yellow-400">
            <div className="w-sm flex">
                <div className="flex-col space-y-2">
                    <h1 className="text-4xl font-extrabold">Not sure where to start?</h1>
                    <p>This short quiz will sort you out. Answer a few simple questions to get personal career advice and course recommendations.</p>
                    <button className="bg-purple-700 p-2 text-white rounded">Take the quiz</button>
                </div>
                <div className="bg-red-500 p-2 h-32"></div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <main className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-8">
                <SectionIntroduction className="" />
                <SectionFeature className="" />
                <BannerWelcome />
                <SectionReason className="" />
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