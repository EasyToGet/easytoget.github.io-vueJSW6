<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/admin">後台</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">回到前台</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/products"
            >後台產品列表</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/orders"
            >後台訂單</router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="signout">登出</a>
        </li>
      </ul>
    </div>
  </nav>
  <router-view v-if="checkSuccess"></router-view>
</template>

<script>
// 驗證
export default {
  name: 'Dashboard',
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    checkLogin() {
      // 取得 token
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        // Axios 預設值
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const url = `${process.env.VUE_APP_URL}api/user/check`;
        this.$http.post(url, { api_token: this.token }).then((res) => {
          if (res.data.success) {
            this.checkSuccess = true;
          } else {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
            this.$router.push('/login');
          }
        });
      } else {
        // eslint-disable-next-line no-alert
        alert('您尚未登入。');
        this.$router.push('/login');
      }
    },
    signout() {
      document.cookie = 'hexToken=;expires=;';
      // eslint-disable-next-line no-alert
      alert('已登出');
      this.$router.push('/login');
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>
