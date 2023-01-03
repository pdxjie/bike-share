<template>
  <div>
    <a-card>
      <div ref="orderDetailMap"></div>
      <div class="basicInfo">
        <h2>基础信息</h2>
        <OrderDetailInfo/>
      </div>
      <div class="drivingTrack">
        <h2>行程轨迹</h2>
        <DrivingTrackInfo/>
      </div>
    </a-card>
  </div>
</template>

<script>
import OrderDetailInfo from '@/views/OrderDetail/OrderDetailInfo'
import DrivingTrackInfo from '@/views/OrderDetail/DrivingTrackInfo'
export default {
  name: 'OrderDetail',
  components: { OrderDetailInfo, DrivingTrackInfo }
}
</script>

<style lang="less" scoped>

.basicInfo,.drivingTrack {
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  h2 {
    margin-left: calc(20vh);
    color: #999;
  }
}
.drivingTrack {
  margin-top: 10px;
}
</style>
