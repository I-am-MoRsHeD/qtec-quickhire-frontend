import Image from "next/image";

export const StartPosting = () => {
    return (
        <section className="max-w-310 mx-auto px-4 py-10">
            <div className="relative bg-primary w-full overflow-hidden flex flex-col lg:flex-row items-center h-103.5 px-14">

                {/* Top-Left White Shape */}
                <div
                    className="absolute -top-1 left-0 w-32 h-32 bg-background z-10"
                    style={{ clipPath: 'polygon(0 0, -50% 100%, 100% 0)' }}
                />

                {/* Content Side */}
                <div className="lg:w-1/2 z-20 text-background space-y-6">
                    <h2 className="font-clash text-4xl md:text-5xl font-bold leading-tight">
                        Start posting <br /> jobs today
                    </h2>
                    <p className="font-epilogue text-background/80 text-lg">
                        Start posting jobs for only $10.
                    </p>
                    <button className="bg-background text-primary font-bold px-8 py-4 font-epilogue hover:bg-slate-50 transition-all">
                        Sign Up For Free
                    </button>
                </div>

                {/* Dashboard Image Side */}
                <div className="lg:w-1/2 mt-12 lg:mt-0 relative h-87.5 w-full">
                    <Image
                        src="/startposting-dashboard.png"
                        alt="Dashboard Preview"
                        fill
                        className="mt-8"
                    />
                </div>

                {/* Bottom-Right White Shape */}
                <div
                    className="absolute bottom-0 -right-1 w-48 h-48 bg-background z-10"
                    style={{ clipPath: 'polygon(100% 50%, 100% 100%, 0% 100%)' }}
                />
            </div>
        </section>
    );
};