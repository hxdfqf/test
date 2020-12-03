<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" class="tab-control-item"
    :class="{active: index === currentindex}" @click="itemclick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
      return {
          currentindex: 0
      }
  },
  methods: {
      itemclick(index){
          this.currentindex = index
          this.$emit('tabclick',index)
      }
  }
}
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}
.tab-control-item span {
    padding: 5px;
}
.active{
    color: #ff5777;

}
.active span {
        border-bottom: 3px solid #ff8198;
}
</style>