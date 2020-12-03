<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- :是number类型，不加：是字符串类型-->
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentscroll" 
            :pullUpload="true"
            @pullingUp="loadmore">
      <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control
          class="tab-control"
          :titles="['流行', '新款', '精选']"
          @tabclick="tabclick"
        ></tab-control>
        <goods-list :goods="showgoods"></goods-list>
    </scroll>
    <!--组件的点击监听加.native-->
    <back-top @click.native="backclick" v-show="isshowbackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/contents/tabControl/TabControl";
import GoodsList from "@/components/contents/goods/GoodsList";
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/contents/backTop/BackTop'

import { getHomeMultiData, getHomeGoods } from "network/home.js";

import BScroll from "better-scroll";



export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isshowbackTop: false
    };
  },
  computed: {
    showgoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    //1.请求多个数据
    this.getHomeMultiData();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh,200)

    //在create函数里面不能调用$refs
    //3.监听item商品数据
    this.$bus.$on('itemimgload',() => {
    refresh()
      
    })
  },
  methods: {

    backclick() {
      this.$refs.scroll.scrollTo(0,0)
    },

    contentscroll(position){
      this.isshowbackTop = (-position.y) > 1000
    },

    loadmore(){
      this.getHomeGoods(this.currentType)

    },
    /**
     * 事件监听的相关的方法
     */

    //防抖动
    debounce(func,delay) {
      let  timer = null
      
      return function (...args) {
        if(timer)clearTimeout(timer)

        timer = setTimeout(() => {
          func.apply(this,args)
        },delay)
      }
    },

    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    /**
     * 网络请求相关的代码
     */
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      //动态获取页码，不将页码写死
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp()
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  /*viewport height */
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: #ff8198;
  color: #fff;
  font-size: 18px;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  /*粘滞定位 */
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}


/*动态计算 */
/* .content {
  height: calc(100% - 93px);
  overflow: hidden; 
} */

</style>