/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";


const JobsOpenCard = ({ job }: { job: any }) => (
    <div className="bg-white border border-[#D6DDEB] p-6 flex items-center gap-6 hover:border-primary transition-all cursor-pointer">
        <div className="w-16 h-16 relative shrink-0">
            <Image src={job.logo} alt={job.company} fill className="object-contain" />
        </div>
        <div className="flex-1">
            <h3 className="font-clash text-xl font-bold text-[#252733]">{job.title}</h3>
            <p className="text-[#7C8493] font-epilogue text-sm mb-3">
                {job.company} • {job.location}
            </p>
            <div className="flex flex-wrap gap-2">
                {job.tags.map((tag: string) => (
                    <span
                        key={tag}
                        className={`px-4 py-1 rounded-full text-xs font-bold border
                            ${tag === 'Full-Time' ? 'text-[#56CDAD] border-[#56CDAD]' :
                                tag === 'Marketing' ? 'text-[#FFB836] border-[#FFB836]' :
                                    'text-primary border-primary'}`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default JobsOpenCard;