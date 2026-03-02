"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IUser } from "@/interface/auth.type";
import { Button } from "../ui/button";
import { removeCookie } from "@/lib/cookies";
import { toast } from "sonner";

const Navbar = ({ adminInfo }: { adminInfo: Partial<IUser> }) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Find Jobs", href: "/jobs" },
        { name: "Browse Companies", href: "/companies" },
    ];
    const handleLogout = () => {
        removeCookie("accessToken");
        removeCookie("refreshToken");
        toast.success("Admin logged out successfully!");
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
            <div className="max-w-310 mx-auto px-4 lg:px-0">
                <div className="flex justify-between items-center h-24">
                    <div className="flex flex-row items-center gap-12">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative w-8 h-8">
                                <Image src="/logo.png" fill alt="Logo" />
                            </div>
                            <span className="text-2xl font-extrabold text-foreground font-red-hat tracking-tight">QuickHire</span>
                        </Link>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => {
                                const isActive = link.href === pathname;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`${isActive ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/60"} hover:text-primary transition-colors font-medium font-epilogue`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Desktop Buttons */}
                    {
                        adminInfo?.role === 'ADMIN' ? (
                            <div className="hidden md:flex items-center space-x-4 font-epilogue">
                                <Link href="/admin/jobs" className="text-primary font-bold hover:opacity-80 px-4">
                                    Dashboard
                                </Link>
                                <div className="w-px h-12 bg-background/90" />
                                <Button onClick={() => handleLogout()} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 transition-all">
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <div className="hidden md:flex items-center space-x-4 font-epilogue">
                                <Link href="/login" className="text-primary font-bold hover:opacity-80 px-4">
                                    Login
                                </Link>
                                <div className="w-px h-12 bg-background/90" />
                                <Link href="/login" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 transition-all">
                                    Sign Up
                                </Link>
                            </div>
                        )
                    }

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center justify-center w-12 h-12 rounded-full border border-[#D6DDEB] bg-white shadow-sm"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X size={24} className="text-foreground" />
                            ) : (
                                <Image src="/vector.svg" width={24} height={24} alt="menu" className="p-1" />

                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden bg-background border-t border-border px-4 pt-2 pb-6 animate-in slide-in-from-top duration-300 py-6 space-y-4 shadow-xl font-medium font-epilogue">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="block text-lg py-2" onClick={() => setIsOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    {
                        adminInfo?.role === 'ADMIN' ? (
                            <div className="flex flex-col gap-3 pt-4">
                                <Link href="/admin/jobs" className="text-primary font-bold hover:opacity-80 px-4">
                                    Dashboard
                                </Link>
                                <div className="w-px h-12 bg-background/90" />
                                <Button onClick={handleLogout} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 transition-all">
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3 pt-4">
                                <Link href="/login" className="text-primary font-bold hover:opacity-80 px-4">
                                    Login
                                </Link>
                                <div className="w-px h-12 bg-background/90" />
                                <Link href="/login" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 transition-all">
                                    Sign Up
                                </Link>
                            </div>
                        )
                    }
                </div>
            )}
        </nav>
    );
};

export default Navbar;