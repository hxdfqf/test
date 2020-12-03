<template>
    <div class="wrapper">
        <ul class="content">
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
        <li>分类</li>
    </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'


export default {
    name: 'Category',
    data() {
        return {
            scroll: null
        }
    },
    components: {},
    mounted(){
        //bscroll   0：默认为不监听滚动
        //1：不管怎么样都不监听
        //2；监听滚动，但是只限制为手指滑动的滚动，惯性的滚动不监听
        //3：什么样的滚动都监听
        this.scroll =  new BScroll('.wrapper',{
            probeType:3,
            pullUpLoad: true
        })

        this.scroll.on('scroll',(position) => {
            console.log(position);
        })

        this.scroll.on('pullingUp',() => {
            console.log('上拉加载更多');
        })
    }
}
</script>

<style scoped>
.wrapper {
    height: 150px;
    background-color:pink;
    
    /*超出的内容隐藏 */
    overflow: hidden;
    /*在y轴上可滚动 */
    /* overflow-y: scroll; */
}
</style>