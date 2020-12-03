<template>
  <div class="goods">
      <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
    name: 'GoodsList',
    components: {
        GoodsListItem
    },
    props: {
        goods: {
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>

 .goods {
    display: flex;
    /*包裹 */
    flex-wrap: wrap;
    /*中间缝隙均等分，两边是1/2 */
    justify-content: space-around;
    background-color: #fff;

    padding: 2px;
 }

</style>