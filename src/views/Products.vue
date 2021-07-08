<template>
  <Loading :active="isLoading"></Loading>
  <h2 class="mt-3 text-center">前台產品列表</h2>
  <div class="container">
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th>功能</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td style="width: 200px">
            <div
              style="
                height: 100px;
                background-size: cover;
                background-position: center;
              "
              :style="{ 'background-image': `url(${item.imageUrl})` }"
            ></div>
          </td>
          <td>
            {{ item.title }}
          </td>
          <td>
            <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
            <del class="h6" v-if="item.price"
              >原價 {{ item.origin_price }} 元</del
            >
            <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button
                type="button"
                class="btn btn-outline-primary"
                @click="getProduct(item)"
                :disabled="loadingStatus.loadingItem === item.id"
              >
                <!-- 判斷id是否一樣，點擊後出現 loading 效果，變成disabled狀態 -->
                <div
                  class="spinner-border spinner-border-sm"
                  role="status"
                  v-if="loadingStatus.loadingItem === item.id"
                ></div>
                查看更多
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="addCart(item.id, qty)"
                :disabled="loadingStatus.loadingItem === item.id"
              >
                <div
                  class="spinner-border spinner-border-sm"
                  role="status"
                  v-if="loadingStatus.loadingItem === item.id"
                ></div>
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <UserProductModal
      ref="userProductModal"
      :product="product"
      @add-cart="addCart"
    ></UserProductModal>
  </div>
</template>

<script>
import UserProductModal from '@/components/UserProductModal.vue';

export default {
  name: 'Products',
  data() {
    return {
      // 讀取效果
      loadingStatus: {
        loadingItem: '',
      },
      isLoading: false,
      // 產品列表
      products: [],
      // props 傳遞到內層的暫存資料
      product: {},
    };
  },
  components: {
    UserProductModal,
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
        this.isLoading = false;
      });
    },
    getProduct(item) {
      // this.$router.push(`/product/${item.id}`);
      this.isLoading = true;
      this.loadingStatus.loadingItem = item.id;
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${item.id}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.loadingStatus.loadingItem = '';
          this.product = res.data.product;
          this.isLoading = false;
          this.$refs.userProductModal.openModal();
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
    addCart(id, qty = 1) {
      this.isLoading = true;
      this.loadingStatus.loadingItem = id;
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        if (res.data.success) {
          console.log(res);
          // eslint-disable-next-line no-alert
          alert(res.data.message);
          this.loadingStatus.loadingItem = '';
          this.$refs.userProductModal.hideModal();
          this.isLoading = false;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
