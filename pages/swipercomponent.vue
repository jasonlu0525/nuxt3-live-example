<script setup>
// Swiper 模組
// 因為不一定每個 Swiper 使用的模組都一樣，所以改成用 props 傳入特定的模組
import { Navigation, Pagination, Autoplay } from "swiper/modules";
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="mb-5 text-center">將 swiper 封裝成元件</h1>
        <Swiper
          :loop="true"
          :slides-per-view="1"
          :breakpoints="{
            992: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }"
          :pagination="{ el: '.swiper-pagination', type: 'bullets' }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :autoplay="{ delay: 1000 }"
          :modules="[Navigation, Pagination, Autoplay]"
        >
          <!-- 內層所有的內容將會渲染至 div.swiper-wrapper內部的 <slot />  -->
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1636909798741-42d59f0265b0?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="圖片一"
            />
          </SwiperSlide>
          <SwiperSlide>
            <!-- SwiperSlide 內的 img 標籤將會渲染至 div.swiper-slide 內部的 <slot />  -->
            <img
              src="https://images.unsplash.com/photo-1516007146048-bfcffccbc95c?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="圖片二"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1516007112993-555f24caca6d?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="圖片三"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
