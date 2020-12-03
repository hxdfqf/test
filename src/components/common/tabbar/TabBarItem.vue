<template>
    <div class="tab-bar-item"  @click="itemclick">
      <div v-if="!isactive">
        <slot name="item-icon"></slot>
        </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
          <slot name="item-text"></slot>
        </div> 
    </div>
    
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    // data() {
    //   return {
    //    // isactive: true
    //   }
    // },
    // components: {
        
    // },
    computed: {
      isactive() {
        //indexOf判断当前活跃的路由是否等于item的路径，相等就是true，否则就是false
       return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
      return this.isactive ? {color: this.activeColor} : {}
    }
    },

    methods: {
      itemclick() {
        this.$router.push(this.path)
      }
    }
}
</script>

<style>

.tab-bar-item {
  flex: 1;
  text-align: center;
  /* line-height: 44px; */
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width:24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
 /* .active {
   color: red;
 } */

</style>