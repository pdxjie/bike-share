<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <SiderBar/>
      <a-layout>
        <NavBar/>
        <a-layout-content>
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import SiderBar from '@/layout/SiderBar'
import NavBar from '@/layout/NavBar'
export default {
  name: 'Admin',
  components: { NavBar, SiderBar }
}
</script>

<style scoped>
::v-deep .ant-layout-content {
  background-color: #FFF;
  height: calc(100vh - 74px);
  margin-top: 10px;
}
</style>
