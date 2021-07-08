<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: page.current_page === 1 }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="getProduct(page.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="(item, index) in page.total_pages"
        :key="index"
        class="page-item"
        :class="{ active: item === page.current_page }"
      >
        <span class="page-link" v-if="item === page.current_page">{{
          item
        }}</span>
        <a class="page-link" href="#" v-else @click.prevent="getProduct(item)">{{
          item
        }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: page.current_page === page.total_pages }"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="getProduct(page.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['page'],
  methods: {
    getProduct(item) {
      this.$emit('get-product', item);
    },
  },
};
</script>
