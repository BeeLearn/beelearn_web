
export default function LayoutHeader() {
    return (
        <header className="sticky top-0 z-20">
            <div className="flex space-x-4 px-4 py-2 transition duration-20 z-10 bg-tertiary">
                <div className="flex-1 flex space-x-2 items-center">
                    <h1 className="text-2xl font-extrabold text-primary transition duration-300">BeeLearn</h1>
                </div>
                <button
                    className="bg-primary px-6 py-2 text-tertiary rounded-xl border-b-4 border-shadow transition duration-300">Get Started</button>
            </div>
            {/* <div className="absolute inset-0 bg-tertiary px-4 blur-xl py-2 -z-10" /> */}
        </header>
    );
}
