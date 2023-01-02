<template>
  <div>
    <a-card title="圆角环形图">
      <div class="pieCharts" ref="RoundedCorner"></div>
    </a-card>

    <a-card title="南丁格尔玫瑰图">
      <div class="pieCharts" ref="Nightingale"></div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'ChartsPie',
  mounted () {
    this.roundedCorner()
    this.nightingale()
  },
  methods: {
    roundedCorner () {
      const roundedCorner = this.$echarts.init(this.$refs.RoundedCorner)
      roundedCorner.setOption({
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      })
    },
    nightingale () {
      const Nightingale = this.$echarts.init(this.$refs.Nightingale)
      Nightingale.setOption({
        title: {
          text: 'Nightingale Chart',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: [
            'rose1',
            'rose2',
            'rose3',
            'rose4',
            'rose5',
            'rose6',
            'rose7',
            'rose8'
          ]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Radius Mode',
            type: 'pie',
            radius: [20, 140],
            center: ['25%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 5
            },
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 33, name: 'rose 2' },
              { value: 28, name: 'rose 3' },
              { value: 22, name: 'rose 4' },
              { value: 20, name: 'rose 5' },
              { value: 15, name: 'rose 6' },
              { value: 12, name: 'rose 7' },
              { value: 10, name: 'rose 8' }
            ]
          },
          {
            name: 'Area Mode',
            type: 'pie',
            radius: [20, 140],
            center: ['75%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              { value: 30, name: 'rose 1' },
              { value: 28, name: 'rose 2' },
              { value: 26, name: 'rose 3' },
              { value: 24, name: 'rose 4' },
              { value: 22, name: 'rose 5' },
              { value: 20, name: 'rose 6' },
              { value: 18, name: 'rose 7' },
              { value: 16, name: 'rose 8' }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.pieCharts {
  width: 100%;
  height: 400px;
}
</style>
