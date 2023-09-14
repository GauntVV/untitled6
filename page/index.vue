<template>
  <div class="page">
    <slider
        class="page__slider"
        :store="storeList"
    />

    <div class="page__wrap">
      <image class="page__form" />
    </div>
  </div>
</template>

<script>
import sliderLider from '~/components/slider/index.vue'
import image from '~/components/image/index.vue'
import slider from "~/components/slider/index.vue";
export default {
  name: 'page',
  components: { slider, image },

  data() {
    return {
      storeList: null,
    }
  },

  methods: {
    async getStoreList() {
      await this.$store
          .dispatch('store/getStoreList')
          .then(async () => {
            this.storeList = this.$store.state.store.STORE_LIST
          })
          .catch((err) => {
            console.log(err)
          })
    },
  },

  async mounted() {
    await this.getStoreList()
  },
}
</script>

<style lang="scss" scoped>
.mainPage {
  display: grid;
  grid-template-columns: 1000px auto;
  justify-content: center;
  gap: 30px;

  padding-top: 80px;

  &__slider {
    height: 400px;
  }

  &__form {
  }
}
</style>