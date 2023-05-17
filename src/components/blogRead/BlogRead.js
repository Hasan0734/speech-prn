import React from 'react';
import moment from 'moment/moment';
import { useGetBlogQuery } from '../../features/blog/blogApi';
import Loader from './../ui/Loader';
import Error from '../ui/Error';
import Bible2 from '../../assets/images/characters/bible-2.png';
import Bible1 from '../../assets/images/characters/bible2-1.png';
import Eggplant from '../../assets/images/characters/eggplant.png';
import Pine from '../../assets/images/characters/pine-2.png';
import KissMeLogo from '../../assets/images/logos/logo.png';
import ftmoah from '../../assets/images/logos/ftmoah.webp';

const BlogRead = ({ id, modalHandler }) => {
  const { data: blog, isLoading, isError } = useGetBlogQuery(id);

  React.useEffect(() => {
    if (!id) modalHandler();
  }, [id]);

  return (
    <main class='w-full'>
      {isLoading ? (
        <Loader />
      ) : isError || !blog._id ? (
        <Error message='NO Blog Found!' />
      ) : (
        <div class='card py-4'>
          <div className='relative p-5'>
            <div class='p-2.5 max-w-4xl 2xl:max-w-6xl mx-auto flex items-center gap-4'>
              <div className='relative  w-[320px] 2xl:w-full'>
                <p className='-rotate-90 text-xs absolute -left-[177px] bottom-[180px] w-full'>
                  ©2020 Alister Harmon w/ Haromn Group Media Partners LLC.
                </p>
                <h2 className='font-bold text-xl text-black uppercase text-left'>
                  Kiss My Emoji
                </h2>
                <div className='relative border-4 border-black h-[320px] 2xl:h-[400px] w-full p-3'>
                  <div className='absolute bottom-6 flex items-center justify-between w-[88%] left-6'>
                    <div className='relative'>
                      <div className='absolute -top-12 -left-20 skew-x-[8deg] skew-y-[361deg]'>
                        <div className='text-left m-bubble1 p-2 w-[310px] border-4 border-black rounded-md bg-white'>
                          <span className='text-sm text-black'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eaque, expedita.
                          </span>
                        </div>
                      </div>
                      <img
                        className='max-w-[130px] mt-10'
                        src={Bible2}
                        alt=''
                      />
                    </div>
                    <img
                      className='max-w-[130px] mt-10'
                      src={Eggplant}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='w-[320px] 2xl:w-full'>
                <div className='relative border-4 border-black h-[320px] 2xl:h-[400px] w-full p-3 '>
                  <div className='absolute bottom-6 flex items-center justify-between  w-[88%] left-6'>
                    <img className='max-w-[120px] mt-10' src={Bible2} alt='' />
                    <div className='relative'>
                      <div className='absolute -top-14 right-0 skew-x-[8deg] skew-y-[361deg]'>
                        <div className='text-left m-bubble2 p-2 w-[250px] border-4 border-black rounded-md bg-white'>
                          <span className='text-sm text-black'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eaque
                          </span>
                        </div>
                      </div>
                      <img
                        className='max-w-[120px] mt-10'
                        src={Eggplant}
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[320px] 2xl:w-full '>
                <h2 className='font-bold text-sm leading-6 text-black uppercase text-left'>
                  From the mind of Alister Harmon
                </h2>
                <div className='relative border-4 border-black h-[320px] 2xl:h-[400px] w-full p-3'>
                  <div className='absolute bottom-6 flex items-center justify-between  w-[88%] left-6'>
                    <div className='relative'>
                      <div className='absolute -top-12 left-0 -skew-x-[-6deg] -skew-y-[1deg]'>
                        <div className='text-left m-bubble3 p-2 w-[250px] border-4 border-black rounded-md bg-white'>
                          <span className='text-sm text-black'>
                            Lorem ipsum dolor sit amet, consectetur
                          </span>
                        </div>
                      </div>
                      <img
                        className='max-w-[120px] mt-10'
                        src={Bible2}
                        alt=''
                      />
                    </div>
                    <img
                      className='max-w-[120px] mt-10'
                      src={Eggplant}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* logos */}
            <div className='absolute right-4 top-0'>
              <img className='max-w-[120px]' src={KissMeLogo} alt='' />
            </div>
            <div className='absolute right-4 bottom-0'>
              <img className='max-w-[120px]' src={ftmoah} alt='' />
            </div>
          </div>

          {/* content */}
          <div class='flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5 lg:mx-auto'>
            <div>
              <span class='text-xs+ text-info'>{blog?.category}</span>
            </div>
            <div class='mt-1'>
              <span class='text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light'>
                {blog?.title}
              </span>
            </div>
            <div class='my-2 flex items-center space-x-3 text-xs'>
              <div class='h-px flex-1 bg-slate-200 dark:bg-navy-500'></div>
              <p>{moment(blog?.createdAt).fromNow()}</p>
              <div class='h-px flex-1 bg-slate-200 dark:bg-navy-500'></div>
            </div>
            <p class='my-2 grow text-left line-clamp-3'>{blog?.description}</p>
            <div>
              <div
                onClick={modalHandler}
                class='btn mt-4 rounded-full bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90'
              >
                Close
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default BlogRead;
