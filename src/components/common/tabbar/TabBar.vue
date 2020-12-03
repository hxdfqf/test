<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBar',
    components: {
        
    }
}
</script>

<style scoped>

#tab-bar {
  display:flex;
  background-color: #f2f2f2;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /*接触之处的模糊四个值，x轴，y轴，阴影值，颜色*/
  box-shadow: 0 -1px 1px rgba(100,100,100,.4);
  z-index: 10;
}


</style>