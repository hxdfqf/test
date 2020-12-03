<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'Scroll',
    props:{
        probeType: {
            type: Number,
            default: 0
        },
        pullUpload: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        //1.创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            //设置为手指滑动
            observeDOM: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpload
        })
        //2.监听滚动的位置
        this.scroll.on('scroll',(position) => {
            // console.log(position);
            this.$emit('scroll',position)
        })
        //3.监听上拉事件
        this.scroll.on('pullingUp',() => {
            this.$emit('pullingUp')
        })
    },
    methods: {
        scrollTo(x,y,time=500){
            this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll && this.scroll.refresh && this.scroll.refresh()
        }
    }
}
</script>

<style scoped>

</style>