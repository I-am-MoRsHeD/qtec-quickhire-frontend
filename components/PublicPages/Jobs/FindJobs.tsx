'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import AllFilters from '@/components/common/Filtering/AllFilters';
import { filterOptions } from '@/consts/filters.consts';
import { JOBS } from '@/consts/jobs.consts';
import JobCard from '@/components/common/JobCard';


const FindJobs = () => {

    return (
        <div>
            <AllFilters filterOptions={filterOptions} />
            <div className='my-10 space-y-10'>
                <h2 className="font-clash text-3xl md:text-5xl font-bold text-foreground border-b-2 border-chart-3 w-44 pb-2">
                    All <span className="text-chart-3">jobs</span>
                </h2>
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
            </div>
        </div>
    );
};

export default FindJobs;