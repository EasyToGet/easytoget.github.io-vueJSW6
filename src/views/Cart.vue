<template>
  <h2 class="mt-3 text-center">前台購物車</h2>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="text-end">
          <button
            class="btn btn-outline-danger"
            type="button"
            @click="deleteAllCarts"
            :class="{ disabled: cart.final_total === 0 }"
          >
            清空購物車
          </button>
        </div>
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 200px">數量/單位</th>
              <th class="text-end">單價</th>
            </tr>
          </thead>
          <tbody>
            <!-- 判斷 購物車內是否有資料 -->
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="removeCartItem(item)"
                    :disabled="loadingStatus.loadingItem === item.id"
                  >
                    <div
                      class="spinner-border spinner-border-sm"
                      role="status"
                      v-if="loadingStatus.loadingItem === item.id"
                    >
                    </div>
                    刪除
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <div class="input-group mb-3">
                      <input
                        min="1"
                        type="number"
                        @change="updateCart(item)"
                        :disabled="loadingStatus.loadingItem === item.id"
                        class="form-control"
                        v-model.number="item.qty"
                        style="width: 50px"
                      />
                      <span
                        class="input-group-text"
                        id="basic-addon2"
                        style="width: 100px"
                        >{{ item.product.unit }}
                      </span>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <small
                    v-if="cart.final_total !== cart.total"
                    class="text-success"
                    >折扣價：</small
                  >
                  {{ item.final_total }}
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ cart.total }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="my-5 row justify-content-center">
      <Form
        ref="form"
        class="col-md-6"
        v-slot="{ errors }"
        @submit="createOrder"
      >
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            :rules="isPhone"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button
            type="submit"
            class="btn btn-danger"
            :class="{ disabled: cart.final_total === 0 }"
          >
            送出訂單
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      // 讀取效果
      loadingStatus: {
        loadingItem: '',
      },
      // 畫面 loading 效果
      isLoading: false,
      // 購物車列表
      cart: {},
      // 表單結構
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      // 優惠碼
      coupon_code: '',
    };
  },
  methods: {
    // 取得購物車列表
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          // console.log(res.data.data);
          this.cart = res.data.data;
          this.isLoading = false;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
    // 刪除全部購物車
    deleteAllCarts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
          this.isLoading = false;
          this.getCart();
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
    // 刪除某一筆購物車資料
    removeCartItem(item) {
      this.isLoading = true;
      this.loadingStatus.loadingItem = item.id;
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
          this.getCart();
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
        this.loadingStatus.loadingItem = '';
        this.isLoading = false;
      });
    },
    // 更新購物車
    updateCart(item) {
      this.isLoading = true;
      this.loadingStatus.loadingItem = item.id;
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product.id,
        qty: item.qty,
      };
      // console.log(cart, api);
      this.$http.put(url, { data: cart }).then((res) => {
        if (res.data.success) {
          // console.log(res);
          // eslint-disable-next-line no-alert
          alert(res.data.message);
          this.getCart();
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
        this.loadingStatus.loadingItem = '';
        this.isLoading = false;
      });
    },
    // 結帳頁面
    createOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order }).then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
          this.$refs.form.resetForm(); // 清除 user 個人資料表單
          this.resetFormUser();
          this.getCart();
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
        this.isLoading = false;
      });
    },
    // 收件人電話號碼驗證
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    // 清除使用者資料
    resetFormUser() {
      this.form.user.email = '';
      this.form.user.name = '';
      this.form.user.tel = '';
      this.form.user.address = '';
      this.form.message = '';
    },
  },
  created() {
    this.getCart();
  },
};
</script>
