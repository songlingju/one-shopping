export default {
  // vue组件实例的配置项  可以混入到组件内
  data () {},
  methods: {
    loginConfirm () {
      if (!this.$store.getters.token) {
        // 弹出确认框
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此操作需要登录',
          confirmButtonText: 'login',
          cancelButtonText: 'cancel'
        })
          .then(() => {
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {})
        return true
      }
      return false
    }
  }
}
