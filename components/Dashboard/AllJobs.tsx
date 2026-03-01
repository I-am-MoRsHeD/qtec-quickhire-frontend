'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import AllFilters from '@/components/common/Filtering/AllFilters';
import { filterOptions } from '@/consts/filters.consts';
import JobCard from '@/components/common/JobCard';
import { IJob } from '@/interface/jobs.type';
import { motion } from 'framer-motion';
import PaginationComponent from '../common/Filtering/PaginationComponent';
import { TMeta } from '@/interface';

interface IProps {
    jobsData: {
        data: IJob[];
        meta: TMeta
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
                        {jobsData?.data?.map((job) => (
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

                {/* pagination */}
                {!!jobsData?.meta?.totalPage && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 md:px-6"
                    >
                        <PaginationComponent
                            totalPages={jobsData?.meta?.totalPage as number}
                        />
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default AllJobs;