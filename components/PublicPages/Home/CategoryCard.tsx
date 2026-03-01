import { ArrowRight } from "lucide-react";
import { Category } from "@/interface/category.type";

export const CategoryCard = ({ category }: { category: Category }) => {
    return (
        <div className="group p-8 border-2 border-muted bg-background hover:bg-primary transition-all duration-300 cursor-pointer">
            <div className="mb-8 text-primary group-hover:text-background transition-colors duration-300">
                {category.icon}
            </div>

            <div className="flex justify-between items-end">
                <div>
                    <h3 className="font-clash text-2xl font-semibold mb-2 text-foreground group-hover:text-background transition-colors duration-300">
                        {category.title}
                    </h3>
                    <p className="text-muted-foreground font-epilogue group-hover:text-background/70 transition-colors duration-300">
                        {category.jobs} jobs available
                    </p>
                </div>
                <ArrowRight
                    className="transition-all duration-300 group-hover:translate-x-1 text-foreground group-hover:text-background"
                    size={24}
                />
            </div>
        </div>
    );
};