import React from "react";
import Image from "next/image";
import colors from "tailwindcss/colors";
import { Disclosure, Transition } from "@headlessui/react";
import { BsArrowRight, BsChevronDown, BsChevronUp, BsBellFill } from "react-icons/bs";

import { join, listenForScrollAndTriggerCallback } from "@/scripts";
import { icCodeBox, icMenuCheck, icThreeStars, ilGroupUsers, ilJob, ilZoomSkate, homeScreen, ilCourses } from "@/assets";

function SectionIntroduction({ className }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <section
            className={join("flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 place-content-center place-items-center md:place-items-start", className)}>
            <div className="flex flex-col items-center md:items-start space-y-4">
                <button className="bg-purple-200 px-2 py-1 text-purple-700 rounded">Join in on something big!</button>
                <h3 className="text-3xl font-medium">The best way to learn, through <span className="text-highlight">bite-sized Learning</span></h3>
                <p className="text-stone-700">Gain expertise in coding, blockchain, and various other subjects, all conveniently available in one comprehensive learning resource</p>
                <button className="flex w-1/2 lg:w-2/5 btn-primary">
                    <p className="flex-1">Join for free</p>
                    <BsArrowRight
                        alt="icon"
                        className="w-6 h-6 object-cover" />
                </button>
            </div>
            <Image
                src={ilCourses}
                alt="BeeLearn Home Screen"
                className="w-80 object-cover" />
        </section>
    );
}

function SectionFeature({ className }: React.HTMLAttributes<HTMLDivElement>) {
    const features = [
        "Interactive and Highly intuitive Lessons",
        "Save Time, Save Money",
        "Build Projects, Get Certified",
    ];

    return (
        <div className={join("flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4", className)}>
            <div className="flex-1 flex flex-col space-y-4">
                <h1 className="text-2xl font-medium">Land your first job with our Learning Paths!</h1>
                <div className="flex-1">
                    {
                        features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex space-x-2 py-2">
                                <input
                                    type="checkbox"
                                    className="accent-violet-700"
                                    checked={true}
                                    readOnly />
                                <p>{feature}</p>
                            </div>
                        ))
                    }
                </div>
                <button className="w-1/3 btn-primary items-center hidden md:flex">
                    <p className="flex-1">Start Learning</p>
                    <BsArrowRight
                        alt="icon"
                        className="w-6 h-6 object-cover" />
                </button>
            </div>
            <button className="btn-primary flex items-center md:hidden">
                <p className="flex-1">Start Learning</p>
                <BsArrowRight
                    alt="icon"
                    className="w-6 h-6 object-cover" />
            </button>
            <div className="h-56 bg-red">
                <Image
                    src={ilJob}
                    alt="Customer Service"
                    className="mx-auto" />
            </div>

        </div>
    );
}

// const SectionReason = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function SectionReason({ className }, ref) {
//     const reasons = [
//         {
//             icon: icMenuCheck,
//             title: "Programming made easy",
//             description: "We focus on simplicity. Programming tutorials and examples written in simple, understandable language for beginners.",
//         },
//         {
//             icon: icThreeStars,
//             title: "Content You Can Trust",
//             description: "A dedicated group of experts continually working to create programming resources that is accurate and easier to understand.",
//         },
//         {
//             icon: icCodeBox,
//             title: "Learn by Doing",
//             description: "The only way to learn to program is by writing code. We provide a lot of complete examples so that run and edit code on your own.",
//         },
//     ];


//     return (
//         <div
//             ref={ref}
//             className={join("flex flex-col space-y-4 p-8", className)}>
//             <h1 className="text-2xl text-center font-extrabold">Why BeeLearn?</h1>
//             <section className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
//                 {
//                     reasons.map((item, index) => (
//                         <div
//                             key={index}
//                             className="flex-1 flex items-start space-x-8">
//                             <Image
//                                 alt="icon"
//                                 src={item.icon}
//                                 className="filter-white" />
//                             <div className="flex flex-col space-y-2">
//                                 <h4 className="text-lg font-medium">{item.title}</h4>
//                                 <p className="max-w-sm">{item.description}</p>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </section>
//         </div>
//     );
// });

const BannerWelcome = React.forwardRef<HTMLDivElement>(function BannerWelcome(props, ref) {
    const style = {
        "--primary": colors.white,
        "--shadow": colors.purple[950],
        "--tertiary": colors.purple[800],
    } as React.CSSProperties;


    return (
        <div
            ref={ref}
            style={style}
            className="bg-purple-800 p-8 text-white relative h-[32.5em] flex flex-col">
            <div className="max-w-sm md:max-w-lg space-y-4 z-10">
                <p>Beginners welcome</p>
                <h1 className="text-6xl font-extrabold">Start learning in seconds</h1>
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
});

const BannerQuiz = React.forwardRef<HTMLDivElement>(function BannerQuiz(props, ref) {
    const style = {
        "--primary": colors.white,
        "--shadow": colors.yellow[950],
        "--tertiary": colors.yellow[400],
    } as React.CSSProperties;

    return (
        <div
            ref={ref}
            className="relative h-[32em] md:h-[38em] flex place-content-center p-8 bg-yellow-400 overflow-hidden"
            style={style}>
            <div className="md:max-w-xl flex space-x-4 px-4 overflow-x-hidden z-10">
                <div className="flex-1 flex-col space-y-2">
                    <h1 className="text-6xl font-extrabold">Not sure where to start?</h1>
                    <p className="text-lg">This short quiz will sort you out. Answer a few simple questions to get personal career advice and course recommendations.</p>
                    <button className="btn-primary">Take the quiz</button>
                </div>
            </div>
            <Image
                src={ilGroupUsers}
                alt="Confused Users"
                className="absolute w-full h-full object-cover md:object-none z-0" />
        </div>
    );
});


function SectionFaq({ className }: React.HTMLAttributes<HTMLDivElement>) {
    const faqs = [
        {
            title: "What exactly is BeeLearn?",
            description: "BeeLearn is a bite-size learning platform to learn programming, data structures & algorithm and prepare for the coding interview. BeeLearn also offer exclusive categories such as Blockchain and Web3.",
        },
        {
            title: "Do you provide a free trial?",
            description: "No, BeeLearn offers a monthly subscription plan and also a free ads version, which includes access to unlimited courses and  practical questions on all the courses.",
        },
        {
            title: "Is there an option to purchase individual courses and packages?",
            description: "Yes, we offer the flexibility to select either individual courses and packages according to your preferences. Explore all available options in the app.",
        },
        {
            title: "Do you provide course completion certificate?",
            description: "No but we plan to provide a course completion certificate for all courses in near future. Once you finish the course, the certificate will be generated automatically.",
        },
    ];

    return (
        <div
            className={join("flex flex-col space-y-8", className)}>
            <h1 className="text-2xl font-bold text-center text-highlight">Frequently Asked Questions</h1>
            <div className="flex flex-col space-y-4">

                {
                    faqs.map((faq, index) => (
                        <Disclosure
                            key={index}
                            data-headlessui-state="open">
                            {
                                ({ open }) => (
                                    <>
                                        <Disclosure.Button
                                            className="flex items-center space-x-2 bg-slate-200 px-4 py-3 text-stone-700 rounded-lg"
                                            data-headlessui-state="open">
                                            <p className="flex-1 text-md truncate">{faq.title}</p>
                                            {open ? <BsChevronUp /> : <BsChevronDown />}

                                        </Disclosure.Button>
                                        <Transition
                                            show={open}
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        >
                                            <Disclosure.Panel
                                                className="flex flex-col space-y-4 bg-violet-700 px-8 py-4 text-white rounded-xl"
                                                data-headlessui-state="open">
                                                <h3 className="text-lg font-medium">{faq.title}</h3>
                                                <p className="text-violet-100">{faq.description}</p>
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )
                            }
                        </Disclosure>

                    ))
                }
            </div>
        </div>
    );
}

function SectionSubscription({ className }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={join("flex flex-col space-y-4", className)}>
            <h1 className="text-4xl text-center font-bold">A small investment, an incredible growth opportunity</h1>
            <p className="text-lg text-center text-stone-700">Get access to powerful ideas from <b className="underline decoration-amber-400 decoration-4">more then 6,500 nonfiction books and podcasts.</b></p>
            <div className="flex flex-col">
                <div className="flex space-x-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-4 h-4 bg-violet-700 rounded-full" />
                        <div className="h-16 w-1 bg-violet-700" />
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-violet-500">Today</h3>
                        <p>Start enjoying the entire library of Blinks and shows</p>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-4 h-4 flex place-content-center place-items-center bg-violet-700 rounded-full">
                            <BsBellFill className="text-[12px] text-white" />
                        </div>
                        <div className="h-16 w-1 bg-violet-700" />
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-violet-500">Day 5</h3>
                        <p>We&apos;ll send you a reminder email that your trial is ending.</p>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="w-4 h-4 bg-violet-700 rounded-full" />
                    <div>
                        <h3 className="text-xl font-medium text-violet-500">Day 7</h3>
                        <p>Free trial ends</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    const containerRef = React.useRef<HTMLElement | null>(null);
    const [welcomeRef, quizRef] = [
        React.useRef<HTMLDivElement | null>(null),
        React.useRef<HTMLDivElement | null>(null),
    ];

    React.useEffect(() => {
        const header = document.querySelector("header");
        const root: HTMLElement | null = document.querySelector(":root");

        const cancel = listenForScrollAndTriggerCallback(
            header!,
            [welcomeRef.current!, quizRef.current!],
            function (intersecting, [header, section]) {
                const element = intersecting ? section : document.body;
                root!.style.setProperty("--primary", element.style.getPropertyValue("--primary"));
                root!.style.setProperty("--shadow", element.style.getPropertyValue("--shadow"));
                root!.style.setProperty("--tertiary", element.style.getPropertyValue("--tertiary"));
            },
        );

        return () => cancel();
    }, [quizRef, welcomeRef]);

    return (
        <main
            ref={containerRef}
            className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-8 py-8">
                <SectionIntroduction className="mx-8" />
                <SectionFeature className="mx-8" />
                <BannerWelcome ref={welcomeRef} />
                <SectionSubscription className="mx-8 md:mx-[8%]" />
                <BannerQuiz ref={quizRef} />
                <SectionFaq className="mx-8 md:mx-[16%]" />
            </div>
        </main>
    );
}