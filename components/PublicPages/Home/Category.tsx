import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CategoryCard } from "./CategoryCard";
import { CATEGORIES } from "@/consts/category.consts";


export const Category = () => {
    return (
        <section className="max-w-310 mx-auto px-4 py-20">
            <div className="flex justify-between items-end mb-12">
                <h2 className="font-clash text-4xl md:text-5xl font-bold text-[#252733]">
                    Explore by <span className="text-[#26A4FF]">category</span>
                </h2>
                <Link href="/jobs" className="hidden md:flex items-center gap-2 text-primary font-bold font-epilogue group">
                    Show all jobs
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {CATEGORIES.map((cat) => (
                    <CategoryCard key={cat.title} category={cat} />
                ))}
            </div>

            <div className="mt-10 md:hidden">
                <Link href="/jobs" className="flex items-center justify-center gap-2 text-primary font-bold font-epilogue">
                    Show all jobs <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
};

export default Category;