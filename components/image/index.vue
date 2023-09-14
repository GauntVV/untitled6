<template>
  <div class="image">
    <p>
      Из-за отсутсвия API идет иммитация загрузки изображения.
    </p>

    <p>
      Изображения загружаются с https://hypermarketmebel.ru/_TMP/api_test/slider.php
    </p>

    <code>
      https://hypermarketmebel.ru/_TMP/api_test/slider.php/${
      <br>
      Math.round(Math.random() * 101)
      <br>
      }/info
    </code>

    <label class="image__item">
      <h4 class="image__subtitle">
        Ввести имя
      </h4>

      <input
          class="image__input"
          v-model="authorName"
          placeholder="Имя"
          type="text"
      >
    </label>

    <label class="image__item">
      <h4 class="image__subtitle">
        Загрузить изображение
      </h4>

      <input
          ref="fileUpload"
          class="image__fileUpload"
          type="file"
          accept="image/*"
      >
    </label>

    <button
        class="image__image"
        @click="submitImg"
    >
      Добавить изображение в слайдер
    </button>
  </div>
</template>

<script>
export default {
  name: 'image',

  data() {
    return {
      authorName: '',
    }
  },

  methods: {
    async submitImg() {
      const formData = new FormData()
      formData.append('file', this.$refs.fileUpload.files[0])
      formData.append('author', this.authorName)

      await this.$store.dispatch('store/uploadStore', formData)
    },
  },
}
</script>

<style lang="scss" scoped>
.addImage {
  display: grid;
  gap: 16px;

  padding: 20px;

  width: 400px;

  background: #8ede68;

  &__item {
    border: 1px solid #000;
  }

  &__subtitle {
    margin: 0 0 8px;
  }

  &__input {
  }

  &__fileUpload {
  }

  &__addImage {
  }
}

code {
  padding: 4px;

  background: rgb(216, 216, 216);
}
</style>