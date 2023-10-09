import { nunitoSans } from "@/fonts";
import { join } from "@/scripts";

export default function LayoutHeader() {
    return (
        <header className="flex space-x-4 sticky top-0 bg-white p-4 shadow">
            <div className="flex-1 flex space-x-2 items-center">
                <h1 className="text-2xl font-extrabold text-purple-700">BeeLearn</h1>
            </div>
            <button
                className="bg-violet-600 px-6 py-2 text-white font-bold rounded-xl border-b-8 border-violet-950">Get Started</button>
        </header>
    );
}
