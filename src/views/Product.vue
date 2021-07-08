<template>
  <h1 class="text-center">單一產品頁面</h1>
  {{ product.title }}
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      product: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${id}`;
    this.$http.get(url).then((res) => {
      if (res.data.success) {
        this.product = res.data.product;
      } else {
        // eslint-disable-next-line no-alert
        alert(res.data.message);
      }
    });
  },
};
</script>
