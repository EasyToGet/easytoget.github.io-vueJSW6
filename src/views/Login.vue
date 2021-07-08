<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <h1 class="h3 mb-3 font-weight-normal text-center">請先登入</h1>
          <form id="form" class="form-signin" @submit.prevent="signIn">
            <div class="form-floating mb-3">
              <input
                type="email"
                id="username"
                class="form-control"
                placeholder="Email address"
                v-model="user.username"
                required
                autofocus
              />
              <label for="username" class="sr-only">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="user.password"
                placeholder="Password"
                required
              />
              <label for="password" class="sr-only">Password</label>
            </div>
            <button
              class="btn btn-lg btn-primary w-100 mt-3 js-btn"
              type="submit"
            >
              登入
            </button>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    signIn() {
      const url = `${process.env.VUE_APP_URL}admin/signin`;
      this.$http.post(url, this.user).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data;
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
          this.$router.push('/admin/products');
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
  },
};
</script>
