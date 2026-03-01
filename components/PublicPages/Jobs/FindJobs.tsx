'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import AllFilters from '@/components/common/Filtering/AllFilters';
import { filterOptions } from '@/consts/filters.consts';
import JobCard from '@/components/common/JobCard';
import { IJob } from '@/interface/jobs.type';
import { TMeta } from '@/interface';
import PaginationComponent from '@/components/common/Filtering/PaginationComponent';
import { motion } from "framer-motion";

interface IProps {
    jobsData: {
        data: IJob[];
        meta: TMeta
    }
}

const FindJobs = ({ jobsData }: IProps) => {

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
                        {jobsData?.data?.map((job) => (
                            <SwiperSlide key={job.id}>
                                <JobCard job={job} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default FindJobs;