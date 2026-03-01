import { CategoryCard } from "./CategoryCard";
import { CATEGORIES } from "@/consts/category.consts";
import ShowJobsButton from "@/components/common/ShowJobsButton";


export const Category = () => {
    return (
        <section className="max-w-310 mx-auto px-4 py-8 lg:py-20">
            <div className="flex justify-between items-end mb-12">
                <h2 className="font-clash text-3xl md:text-5xl font-bold text-foreground">
                    Explore by <span className="text-chart-3">category</span>
                </h2>
                <div className='hidden md:flex'>
                    <ShowJobsButton />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {CATEGORIES.map((cat) => (
                    <CategoryCard key={cat.title} category={cat} />
                ))}
            </div>

            <div className='md:hidden'>
                <ShowJobsButton />
            </div>
        </section>
    );
};

export default Category;