import React from 'react';
import './categories-real.css'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation'; // REQUIRED for navigation buttons
import 'swiper/css/pagination'; // REQUIRED if you ever use pagination, good to have
import 'swiper/css/autoplay';
// Import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Optional: If you have a custom CSS file for this component, uncomment this
// import "../App.css"

export default function CategoriesReal() {
  return (
        <Swiper
          // Add required modules here
          modules={[Autoplay, Navigation, Pagination]} // Pagination is added as it's often linked to nav

          // 1. Auto Scrolling (Autoplay)
          autoplay={{
            delay: 3000, // 3 seconds delay between slides
            disableOnInteraction: false, // Continue autoplay after user interaction (e.g., drag)
          }}

          // 2. Loop
          loop={true} // Enable continuous loop mode

          // 3. Scrolling Buttons (Navigation)
          navigation={true} // Enable navigation arrows (prev/next buttons)

          // Existing Swiper parameters
          spaceBetween={15}
          slidesPerView={1}
          grabCursor={true}
          breakpoints={{
            430: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 8,
              spaceBetween: 15,
            },
          }}

          className="mySwiper py-md-4 mt-md-0 mt-2"
        >
          
        <SwiperSlide>
          <div class="menu">
              📜
              <p class="menu-title">All Menu</p>
              <p class="menu-items">110 items</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div class="menu">
              📜
              <p class="menu-title">All Menu</p>
              <p class="menu-items">110 items</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div class="menu">
              📜
              <p class="menu-title">All Menu</p>
              <p class="menu-items">110 items</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div class="menu">
              📜
              <p class="menu-title">All Menu</p>
              <p class="menu-items">110 items</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div class="menu">
              📜
              <p class="menu-title">All Menu</p>
              <p class="menu-items">110 items</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div class="menu">
              📜
              <p class="menu-title">All Menu</p>
              <p class="menu-items">110 items</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div class="menu">
              📜
              <p class="menu-title">All Menu</p>
              <p class="menu-items">110 items</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div class="menu">
              📜
              <p class="menu-title">All Menu</p>
              <p class="menu-items">110 items</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div class="menu">
              📜
              <p class="menu-title">All Menu</p>
              <p class="menu-items">110 items</p>
          </div>
        </SwiperSlide>
        
        </Swiper>

  );
}




