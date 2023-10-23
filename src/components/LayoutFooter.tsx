import Image from "next/image";

import { appStoreSm, googlePlaySm } from "@/assets";

export default function LayoutFooter() {
    return (
        <footer className="flex flex-col space-y-8 p-8">
            <div className="flex place-content-center space-x-4">
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
                        <h1 className="text-xl text-stone-400 font-semibold">BeeLearn</h1>
                        <ol>Home</ol>
                        <ol>For Tutors</ol>
                    </div>
                    <div>
                        <h1 className="text-xl text-stone-400 font-semibold">Resources</h1>
                        <ol>Courses</ol>
                        <ol>Blog</ol>
                        <ol>FAQ</ol>
                    </div>
                    <div>
                        <h1 className="text-xl text-stone-400 font-semibold">Company</h1>
                        <ol>About</ol>
                        <ol>Careers</ol>
                        <ol>Family</ol>
                        <ol>Press info</ol>
                    </div>
                    <div>
                        <h1 className="text-xl text-stone-400 font-semibold">Legal</h1>
                        <ol>Privacy policy</ol>
                        <ol>Terms and conditions</ol>
                        <ol>Subscription terms</ol>
                    </div>
                </div>
                <div></div>
            </section>
            <div className="text-stone-700">
                ©2023, Oasis Inc, 16, Obaruwa Street, 1st floor, Ijebu-Ode, Ogun State, 2023, Nigeria <a className="text-violet-700">support@usebeelearn.com</a>
            </div>
        </footer>
    );
}