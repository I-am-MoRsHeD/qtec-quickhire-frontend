"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ShowJobsButton from '@/components/common/ShowJobsButton';
import JobCard from '@/components/common/JobCard';

const JOBS = [
    { id: 1, title: "Email Marketing", company: "Revolut", location: "Madrid, Spain", type: "Full Time", logo: "/featured/revolut.svg", tags: ["Marketing", "Design"] },
    { id: 2, title: "Brand Designer", company: "Dropbox", location: "San Francisco, US", type: "Full Time", logo: "/featured/dropbox.svg", tags: ["Design", "Business"] },
    { id: 3, title: "Email Marketing", company: "Pitch", location: "Berlin, Germany", type: "Full Time", logo: "/featured/pitch.svg", tags: ["Marketing"] },
    { id: 4, title: "Visual Designer", company: "Blinkist", description: "Haosi aisdao fais fao", location: "Granada, Spain", type: "Full Time", logo: "/featured/blinkist.svg", tags: ["Design"] },

    { id: 5, title: "Product Designer", company: "ClassPass", location: "Manchester, UK", type: "Full Time", logo: "/featured/classpass.svg", tags: ["Marketing", "Design"] },
    { id: 6, title: "Lead Designer", company: "Canva", location: "Ontario, Canada", type: "Full Time", logo: "/featured/canva.svg", tags: ["Design", "Business"] },
    { id: 7, title: "Brand Strategist", company: "GoDaddy", location: "Marseille, France", type: "Full Time", logo: "/featured/godaddy.svg", tags: ["Marketing"] },
    { id: 8, title: "Data Analyst", company: "Twitter", location: "San Diego, US", type: "Full Time", logo: "/featured/twitter.svg", tags: ["Technology"] },
];

export const FeaturedJobs = () => {
    return (
        <section className="max-w-310 mx-auto px-4 py-20">
            {/* Header section */}
            <div className="flex justify-between items-end mb-12">
                <h2 className="font-clash text-4xl md:text-5xl font-bold text-foreground">
                    Featured <span className="text-chart-3">jobs</span>
                </h2>
                <div className='hidden md:flex'>
                    <ShowJobsButton />
                </div>
            </div>

            {/* MOBILE ONLY: Swiper Slider (Hidden on md and up) */}
            <div className="block md:hidden">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={16}
                    slidesPerView={1.2} // Show a peek of the next card
                    pagination={{ clickable: true }}
                    className="pb-12"
                >
                    {JOBS.map((job) => (
                        <SwiperSlide key={job.id}>
                            <JobCard job={job} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* MEDIUM/LARGE ONLY: Grid System (Hidden on sm) */}
            {/* md: 2 columns, lg: 4 columns */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {JOBS.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>

            {/* Mobile Footer Button */}
            <div className='mt-8 md:hidden'>
                <ShowJobsButton />
            </div>
        </section>
    );
};