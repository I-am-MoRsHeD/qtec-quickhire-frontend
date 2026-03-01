
import Image from "next/image";

export const Footer = () => {
    const icons = [
        { alt: "Facebook", link: "/footer/Facebook.svg" },
        { alt: "Instagram", link: "/footer/Instagram.svg" },
        { alt: "Dribble", link: "/footer/Dribble.svg" },
        { alt: "LinkedIn", link: "/footer/LinkedIn.svg" },
        { alt: "Twitter", link: "/footer/Twitter.svg" },
    ];

    return (
        <footer className="bg-[#202430] text-background pt-20 pb-10">
            <div className="max-w-310 mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-16 mb-20 gap-10 lg:gap-0">

                    {/* Brand Info */}
                    <div className="space-y-6 col-span-6">
                        <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8">
                                <Image src="/logo.png" fill alt="Logo" />
                            </div>
                            <span className="text-2xl font-extrabold text-background font-red-hat tracking-tight">QuickHire</span>
                        </div>
                        <p className="text-[#D6DDEB] font-epilogue leading-relaxed opacity-70">
                            Great platform for the job seeker that passionate about startups. Find your dream job easier.
                        </p>
                    </div>

                    {/* Links - About */}
                    <div className="col-span-2">
                        <h4 className="font-epilogue text-lg font-bold mb-6">About</h4>
                        <ul className="space-y-4 text-border opacity-70 font-epilogue">
                            <li><a href="#" className="hover:text-background transition-colors">Companies</a></li>
                            <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-background transition-colors">Terms</a></li>
                            <li><a href="#" className="hover:text-background transition-colors">Advice</a></li>
                            <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Links - Resources */}
                    <div className="col-span-2">
                        <h4 className="font-epilogue text-lg font-bold mb-6">Resources</h4>
                        <ul className="space-y-4 text-border opacity-70 font-epilogue">
                            <li><a href="#" className="hover:text-background transition-colors">Help Docs</a></li>
                            <li><a href="#" className="hover:text-background transition-colors">Guide</a></li>
                            <li><a href="#" className="hover:text-background transition-colors">Updates</a></li>
                            <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-6">
                        <h4 className="font-epilogue text-lg font-bold mb-6">Get job notifications</h4>
                        <p className="text-border opacity-70 mb-6 font-epilogue">
                            The latest job news, articles, sent to your inbox weekly.
                        </p>
                        <div className="flex flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-background p-3 text-foreground font-epilogue outline-none"
                            />
                            <button className="bg-primary px-6 py-3 font-bold font-epilogue hover:bg-opacity-90 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-border opacity-50 font-epilogue text-sm">
                        2021 @ QuickHire. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-border">
                        {
                            icons?.map((icon) => <div key={icon.alt} className="w-10 h-10 relative shrink-0 bg-background/20 rounded-full">
                                <Image src={icon.link} alt={icon.alt} fill className="object-contain p-3" />
                            </div>)
                        }

                    </div>
                </div>
            </div>
        </footer>
    );
};