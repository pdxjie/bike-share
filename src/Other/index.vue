<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
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
import NavBar from '@/Other/NavBar'
export default {
  name: 'Other',
  components: { NavBar }
}
</script>

<style scoped>

</style>
