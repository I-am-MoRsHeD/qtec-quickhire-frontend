import Image from "next/image";
import { Search, MapPin } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative w-full min-h-187.5 bg-[#F8F8FD] overflow-hidden pt-32 pb-0">

            <div className="absolute inset-0 z-0 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1000 100L1300 250V550L1000 400V100Z" stroke="#4640DE" strokeOpacity="0.5" />
                    <path d="M1100 50L1450 225V525L1100 350V50Z" stroke="#4640DE" strokeOpacity="0.5" />
                    <path d="M900 200L1200 350V650L900 500V200Z" stroke="#4640DE" strokeOpacity="0.5" />
                </svg>
            </div>

            <div className="absolute right-60 bottom-0 w-[50%] h-[90%] hidden lg:block z-10">
                <Image
                    src="/hero-person.png"
                    alt="Job Seeker"
                    fill
                    className="object-contain object-bottom-right pointer-events-none"
                    priority
                />
            </div>

            <div
                className="absolute bottom-0 right-0 w-[45%] h-[35%] bg-white z-20 hidden lg:block"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)' }}
            />

            <div className="max-w-310 mx-auto px-4 lg:px-0 relative z-30">
                <div className="lg:w-3/5 pt-10 pb-20">
                    <h1 className="font-clash text-[48px] md:text-[72px] font-bold leading-[1.05] text-[#252733] tracking-tight">
                        Discover <br /> more than <br />
                        <span className="text-chart-3 relative inline-block">
                            5000+ Jobs
                            <div className="absolute -bottom-4 left-0 w-full h-4">
                                <svg width="100%" height="100%" viewBox="0 0 422 12" fill="none" preserveAspectRatio="none">
                                    <path d="M3 9C118.5 -1.5 303.5 -1.5 419 9" stroke="#26A4FF" strokeWidth="6" strokeLinecap="round" />
                                </svg>
                            </div>
                        </span>
                    </h1>

                    <p className="font-epilogue text-[#515B6F] text-[18px] md:text-[20px] mt-12 max-w-125 leading-relaxed">
                        Great platform for the job seeker that searching for new career heights and passionate about startups.
                    </p>

                    <div className="mt-10 bg-white p-4 shadow-[0px_24px_48px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center gap-4 border border-[#D6DDEB] relative lg:-mr-20 z-30">
                        <div className="flex items-center gap-3 flex-1 w-full md:border-r border-[#D6DDEB] px-2">
                            <Search className="text-[#252733]" size={24} />
                            <input
                                type="text"
                                placeholder="Job title or keyword"
                                className="font-epilogue w-full outline-none text-[#252733] py-2 bg-transparent"
                            />
                        </div>
                        <div className="flex items-center gap-3 flex-1 w-full px-2">
                            <MapPin className="text-[#252733]" size={24} />
                            <select className="font-epilogue w-full outline-none text-[#252733] bg-transparent appearance-none cursor-pointer">
                                <option>Florence, Italy</option>
                            </select>
                        </div>
                        <button className="w-full md:w-auto bg-primary text-white font-epilogue font-bold px-10 py-4 hover:bg-opacity-90 transition-all">
                            Search my job
                        </button>
                    </div>

                    <p className="mt-6 text-[#515B6F] font-epilogue text-sm">
                        <span className="opacity-50">Popular :</span> UI Designer, UX Researcher, Android, Admin
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;