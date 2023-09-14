<template>
  <div class="slider">
    <Swiper
        ref="swiper"
        class="slider__swiper swiper"
        v-viewer="viewerOptions"
        :options="swiperOption"
    >
      <SwiperSlide
          v-for="(item, index) in store"
          :key="index"
          class="slider__slide"
      >
        <img
            class="slider__img"
            :src="item.download_url"
            :alt="item.author"
        >

        <h3 class="slider__title">
          {{item.author}}
        </h3>
      </SwiperSlide>

      <button
          class="swiper-button-prev"
          slot="button-prev"
      ></button>

      <button
          class="swiper-button-next"
          slot="button-next"
      ></button>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'slider',
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    store: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false,
        },
        spaceBetween: 10,
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          slidesLengthChange: () => {
            this.$refs.swiper.$swiper.slideTo(
                this.$refs.swiper.$swiper.slides.length - 1
            )
          },
        },
      },

      viewerOptions: {
        modal: true,
        button: true,
        navbar: true,
        title: false,
        toolbar: true,
        tooltip: false,
        movable: false,
        zoomable: true,
        rotatable: false,
        scalable: false,
        transition: true,
        fullscreen: true,
        keyboard: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.slider {
  &__swiper {
    height: 100%;
  }

  &__slide {
  }

  &__img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  &__title {
    position: relative;
    bottom: 60px;

    background: rgba(128, 121, 121, 1);
  }
}

.swiper {
  &-button {
  }
}
</style>