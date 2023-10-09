
export default function LayoutHeader() {
    return (
        <header className="flex space-x-4 sticky top-0 px-4 py-2 shadow z-20">
            <div className="flex-1 flex space-x-2 items-center">
                <h1 className="text-2xl font-extrabold text-purple-700">BeeLearn</h1>
            </div>
            <button
                className="bg-violet-600 px-6 py-2 text-white rounded-xl border-b-4 border-violet-950">Get Started</button>
        </header>
    );
}
