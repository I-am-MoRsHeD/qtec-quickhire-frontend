import { COMPANIES } from "@/consts/companies.consts";
import Image from "next/image";

export const Companies = () => {
    return (
        <section className="max-w-310 mx-auto px-4 py-16">
            <p className="font-epilogue text-muted-foreground opacity-50 mb-8 text-center lg:text-left">
                Companies we helped grow
            </p>
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-4">
                {COMPANIES.map((company) => (
                    <div
                        key={company.name}
                        className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                        <Image
                            src={company.src}
                            alt={company.name}
                            width={120}
                            height={28}
                            className="h-8 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};