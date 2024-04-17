import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

import { useRef } from 'react';
import Cards from '../Cards/Cards';
import { Helmet } from 'react-helmet-async';


const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  


  return (
    <>
      <Helmet>
        <title>Medixi Prime || home</title>
      </Helmet>
      <div className="my-5">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            {' '}
            <div className="relative">
              <h2 className="lg:text-5xl text-2xl px-2 left-6 top-8 absolute lg:top-44 font-bold text-blue-950 ">
                <span data-aos="fade-down" data-aos-duration="700">
                  {' '}
                  Best treatment for{' '}
                </span>
                <br />
                <span
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="text-white"
                >
                  healthy Life
                </span>
              </h2>
              <img
                src="https://wordpress.vecurosoft.com/medixi/wp-content/uploads/2023/02/h-bg-3-2.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div className="relative">
              <h2 className="lg:text-5xl text-2xl px-2 left-6 top-8 absolute lg:top-44 font-bold text-blue-950">
                <span data-aos="fade-down" data-aos-duration="700">
                  We Always Put the{' '}
                </span>
                <br />{' '}
                <span
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="text-white"
                >
                  Patient First
                </span>
              </h2>
              <img
                src="https://wordpress.vecurosoft.com/medixi/wp-content/uploads/layerslider/projects/Medilax-Slider-3/h-bg-3-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div className="relative">
              <h2
                data-aos="fade-down"
                className="lg:text-5xl text-2xl px-2 left-6 top-8 absolute lg:top-44 font-bold text-blue-950"
              >
                <span data-aos="fade-down" data-aos-duration="700">
                  Best Medics, Doctor{' '}
                </span>
                <br />
                <span
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="text-white"
                >
                  and physicians
                </span>
              </h2>
              <p className='absolute top-72 mr-[52rem] border-2 ml-12 right-12'>
                Conveniently drive go forward architectures with future-proof
                growth strategies. Energistically supply low-risk high-yield
                process improvements for mission-critical testing procedures and
                visual mockups
              </p>

              <img
                src="https://wordpress.vecurosoft.com/medixi/wp-content/uploads/2023/02/h-bg-3-3.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>{' '}
      <div>
        <Cards></Cards>
      </div>
    </>
  );
};


export default Banner;
