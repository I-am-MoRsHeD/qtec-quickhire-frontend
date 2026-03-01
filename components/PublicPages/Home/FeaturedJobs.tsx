"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ShowJobsButton from '@/components/common/ShowJobsButton';
import JobCard from '@/components/common/JobCard';
import { JOBS } from '@/consts/jobs.consts';


export const FeaturedJobs = () => {
    return (
        <section className="max-w-310 mx-auto px-4 py-8 lg:py-20">
            {/* Header section */}
            <div className="flex justify-between items-end mb-12">
                <h2 className="font-clash text-3xl md:text-5xl font-bold text-foreground">
                    Featured <span className="text-chart-3">jobs</span>
                </h2>
                <div className='hidden md:flex'>
                    <ShowJobsButton />
                </div>
            </div>

            <div className="block md:hidden">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={16}
                    slidesPerView={1.2}
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

            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {JOBS.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>

            <div className='mt-8 md:hidden'>
                <ShowJobsButton />
            </div>
        </section>
    );
};