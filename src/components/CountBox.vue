<template>
  <div class="count-box">
    <button @click="handleSub" class="minus">-</button>
    <input :value="value" @change="handleChange" class="inp" type="text">
    <button @click="handleAdd" class="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'CountBox',
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
    handleSub () {
      if (this.value <= 1) {
        return
      }
      this.$emit('input', this.value - 1)
    },
    handleChange (e) {
      // console.log(e.target.value)
      const num = +e.target.value
      // 输入不合理的数字  回退

      if (isNaN(num) || num < 1 || (String(num).indexOf('.') + 1)) {
        e.target.value = this.value
        return
      }

      this.$emit('input', num)
    }
  }
}
</script>

<style lang="less" scoped>
.count-box{
    width: 100px;
    display: flex;
    .add, .minus {
        width: 30px;
        height: 30px;
        outline: none;
        border: none;
        background-color: #efefef;
    }
    .inp {
        width: 40px;
        height: 30px;
        outline: none;
        border: none;
        margin: 0 5px;
        background-color: #efefef;
        text-align: center;
    }
}
</style>
