<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor='deepPink'>
        <img slot="item-icon" src="~assets/img/tabbar/主页.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/主页1.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor='deepPink'>
        <img slot="item-icon" src="~assets/img/tabbar/分类.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/分类1.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor='deepPink'>
        <img slot="item-icon" src="~assets/img/tabbar/购物车.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/购物车1.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor='deepPink'>
        <img slot="item-icon" src="~assets/img/tabbar/我的.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/我的1.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
      
    </tab-bar>
</template>

<script>

import TabBar from '../../common/tabbar/TabBar.vue'
import TabBarItem from '../../common/tabbar/TabBarItem.vue'


export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }    
}
</script>

<style scoped>

</style>