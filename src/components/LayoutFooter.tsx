import Image from "next/image";

import { appStoreSm, footerBg, googlePlaySm } from "@/assets";

export default function LayoutFooter() {
    return (
        <footer
            className="relative">
            <Image
                src={footerBg}
                className="w-full object-covr"
                alt="Footer Background" />
            <div className="flex flex-col space-y-8 p-8 bg-violet-700 text-white -mt-4 md:-mt-8">
                <div className="flex place-content-center space-x-4 z-0">
                    <Image
                        src={appStoreSm}
                        alt="Apple Store Brand Icon"
                        className="w-32" />
                    <Image
                        src={googlePlaySm}
                        alt="GooglePlay Brand Icon"
                        className="w-32" />
                </div>
                <section>
                    <div className="grid grid-cols-2 gap-y-4 md:grid-cols-4">
                        <div>
                            <h1 className="text-xl font-semibold">BeeLearn</h1>
                            <ol className="text-violet-200">Home</ol>
                            <ol className="text-violet-200">For Tutors</ol>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">Resources</h1>
                            <ol className="text-violet-200">Courses</ol>
                            <ol className="text-violet-200">Blog</ol>
                            <ol className="text-violet-200">FAQ</ol>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">Company</h1>
                            <ol className="text-violet-200">About</ol>
                            <ol className="text-violet-200">Careers</ol>
                            <ol className="text-violet-200">Family</ol>
                            <ol className="text-violet-200">Press info</ol>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">Legal</h1>
                            <ol className="text-violet-200">Privacy policy</ol>
                            <ol className="text-violet-200">Terms and conditions</ol>
                            <ol className="text-violet-200">Subscription terms</ol>
                        </div>
                    </div>
                    <div></div>
                </section>
                <div className="text-slate-200 hidden">
                    ©2023, Oasis Inc, 16, Obaruwa Street, 1st floor, Ijebu-Ode, Ogun State, 2023, Nigeria <a className="text-violet-700">support@usebeelearn.com</a>
                </div>
            </div>
        </footer>
    );
}