import React from 'react';
import './categories.css'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation'; // REQUIRED for navigation buttons
import 'swiper/css/pagination'; // REQUIRED if you ever use pagination, good to have
import 'swiper/css/autoplay';
// Import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Optional: If you have a custom CSS file for this component, uncomment this
// import "../App.css"

export default function Categories() {
  return (
    <div className="container">
      <div className="all-products">
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
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}

          className="mySwiper py-md-4 mt-md-0 mt-2"
        >
        <SwiperSlide>
          <div class="product">
            <img class="product-img" src="./rooh-afza.png" />
            <div class="product-content">
              <p class="product-name">Rooh Afza - 1500ml...</p>
              <p class="product-name-hidden">Rooh Afza - 1500mlRooh Afza - 1500ml</p>

              <div class="product-footer">
                <div class="product-category-p">P</div>
                <div class="product-price">Rs: 500</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
            <div class="product">
              <img class="product-img" src="./rooh-afza.png" />
              <div class="product-content">
                <p class="product-name">Rooh Afza - 1500ml...</p>
                <p class="product-name-hidden">Rooh Afza - 1500mlRooh Afza - 1500ml</p>

                <div class="product-footer">
                  <div class="product-category-p">P</div>
                  <div class="product-price">Rs: 500</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="product">
              <img class="product-img" src="./rooh-afza.png" />
              <div class="product-content">
                <p class="product-name">Rooh Afza - 1500ml...</p>
                <p class="product-name-hidden">Rooh Afza - 1500mlRooh Afza - 1500ml</p>

                <div class="product-footer">
                  <div class="product-category-p">P</div>
                  <div class="product-price">Rs: 500</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="product">
              <img class="product-img" src="./rooh-afza.png" />
              <div class="product-content">
                <p class="product-name">Rooh Afza - 1500ml...</p>
                <p class="product-name-hidden">Rooh Afza - 1500mlRooh Afza - 1500ml</p>

                <div class="product-footer">
                  <div class="product-category-p">P</div>
                  <div class="product-price">Rs: 500</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="product">
              <img class="product-img" src="./rooh-afza.png" />
              <div class="product-content">
                <p class="product-name">Rooh Afza - 1500ml...</p>
                <p class="product-name-hidden">Rooh Afza - 1500mlRooh Afza - 1500ml</p>

                <div class="product-footer">
                  <div class="product-category-p">P</div>
                  <div class="product-price">Rs: 500</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="product">
              <img class="product-img" src="./rooh-afza.png" />
              <div class="product-content">
                <p class="product-name">Rooh Afza - 1500ml...</p>
                <p class="product-name-hidden">Rooh Afza - 1500mlRooh Afza - 1500ml</p>

                <div class="product-footer">
                  <div class="product-category-p">P</div>
                  <div class="product-price">Rs: 500</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="product">
              <img class="product-img" src="./rooh-afza.png" />
              <div class="product-content">
                <p class="product-name">Rooh Afza - 1500ml...</p>
                <p class="product-name-hidden">Rooh Afza - 1500mlRooh Afza - 1500ml</p>

                <div class="product-footer">
                  <div class="product-category-p">P</div>
                  <div class="product-price">Rs: 500</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="slip">
        <img class="product-img" src="rooh-afza.png" />
      </div>
    </div>
  );
}




