import Image from "next/image";

export const StartPosting = () => {
    return (
        <section className="max-w-310 mx-auto lg:px-4 py-8 lg:py-10">
            <div className="relative bg-primary w-full overflow-hidden flex flex-col lg:flex-row items-center lg:h-103.5 lg:px-14 py-20">

                {/* Top-Left White Shape */}
                <div
                    className="absolute -top-1 left-0 w-32 h-32 bg-background z-10"
                    style={{ clipPath: 'polygon(0 0, -50% 100%, 100% 0)' }}
                />

                {/* Content Side */}
                <div className="lg:w-1/2 w-full px-4 lg:px-0 z-20 text-background space-y-6">
                    <h2 className="font-clash text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left">
                        Start posting <br /> jobs today
                    </h2>
                    <p className="font-epilogue text-background/80 text-lg text-center lg:text-left">
                        Start posting jobs for only $10.
                    </p>
                    <button className="bg-background text-primary font-bold px-8 py-4 font-epilogue hover:bg-slate-50 transition-all w-full lg:w-auto">
                        Sign Up For Free
                    </button>
                </div>

                {/* Dashboard Image Side */}
                <div className="lg:w-1/2 mt-2 lg:mt-0 relative h-60 lg:h-87.5 w-full">
                    <Image
                        src="/startposting-dashboard.png"
                        alt="Dashboard Preview"
                        fill
                        className="mt-8 pl-4 lg:pl-0"
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