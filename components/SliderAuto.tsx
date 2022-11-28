import * as React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../src/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { getDataFromFirebase } from '../database/getDataFromFirebase';

export default function SliderAuto({ collection }) {
  const [data, setData] = React.useState([]);

  const array = [
    { title: 'je suis un titre' },
    { title: 'je ne suis pas un titre' },
    { title: 'je ne suis pas un titre' },
    { title: 'je ne suis pas un titre' },
  ];

  React.useEffect(() => {
    (async () => {
      // aller chercher les collections sur firebase
      const response = await getDataFromFirebase(collection);

      setData(response);
    })();
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        {array.map((el, index) => (
          <p style={{ display: 'block' }}>{index} ====</p>
        ))}
      </SwiperSlide>
    </Swiper>
  );
}
