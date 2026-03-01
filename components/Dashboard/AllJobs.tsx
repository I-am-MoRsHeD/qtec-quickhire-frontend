'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import AllFilters from '@/components/common/Filtering/AllFilters';
import { filterOptions } from '@/consts/filters.consts';
import { JOBS } from '@/consts/jobs.consts';
import JobCard from '@/components/common/JobCard';
import { IJob } from '@/interface/jobs.type';
import { Metadata } from 'next';

interface IProps {
    jobsData: {
        data: IJob[];
        meta: Metadata
    }
}

const AllJobs = ({ jobsData }: IProps) => {

    return (
        <div>
            <div className='my-10'>
                <AllFilters filterOptions={filterOptions} />
                <div className="block md:hidden mt-5">
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

                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {jobsData?.data?.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>

                {
                    jobsData?.data?.length === 0 && <div className='flex flex-col justify-center items-center w-full h-20'>
                        <h1 className='text-primary italic font-semibold font-clash'>No Jobs found</h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default AllJobs;