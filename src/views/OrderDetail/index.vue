<template>
  <div>
    <a-card>
      <baidu-map :center="center" :zoom="zoom" @ready="renderMap" :scroll-wheel-zoom="true" class="bm-view">
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      </baidu-map>
      <div class="basicInfo">
        <h2>基础信息</h2>
        <OrderDetailInfo :basicInfo="basicInfo"/>
      </div>
      <div class="drivingTrack">
        <h2>行程轨迹</h2>
        <DrivingTrackInfo :basicInfo="basicInfo"/>
      </div>
    </a-card>
  </div>
</template>

<script>
import OrderDetailInfo from '@/views/OrderDetail/OrderDetailInfo'
import DrivingTrackInfo from '@/views/OrderDetail/DrivingTrackInfo'
export default {
  name: 'OrderDetail',
  components: { OrderDetailInfo, DrivingTrackInfo },
  mounted () {
    this.getOrderDetail()
  },
  data () {
    return {
      basicInfo: {},
      center: { lng: 0, lat: 0 },
      zoom: 3
    }
  },
  methods: {
    getOrderDetail () {
      this.basicInfo = this.$route.query.orderInfo
      this.basicInfo.userName = this.$route.query.orderDetail.userName
      this.basicInfo.orderId = 'T' + this.$route.query.orderDetail.orderId.slice(1, 8)
      this.basicInfo.carId = this.$route.query.orderDetail.carId.slice(1, 8)
      this.basicInfo.phone = this.$route.query.orderDetail.phone
    },
    renderMap ({ BMap, map }) {
      console.log(BMap)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15

      // const geolocation = new BMap.BmGeolocation()
      // console.log('@@@', geolocation)
      const geolocation = BMap.Geolocation
      console.log('@@@', geolocation)
      geolocation.getCurrentPosition()
    }
  }
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
.bm-view{
  padding:0px;
  margin: 0px;
  width: 100%;
  height: 500px;
}
::v-deep .anchorBL {
  img {
    opacity: 0;
  }
}
::v-deep .BMap_cpyCtrl {
  span {
    span:nth-child(1) {
      opacity: 0;
    }
  }
}
</style>
