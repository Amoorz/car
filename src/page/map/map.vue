<template>
  <div>
    <div class="amap-page-container">
      <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" :events="events" :zoom="zoom">
        <el-amap-marker v-for="marker in markers" :position="marker"></el-amap-marker>
        <el-amap-text v-for="text in texts" :text="text.text" :offset="text.offset" :position="text.position" :events="text.events"></el-amap-text>
      </el-amap>
      <!-- 定位 -->
      <!-- <div class="toolbar">
        <p>position: [{{ lng }}, {{ lat }}] address: {{ address }}</p>
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    let self = this;
    return {
      center: [121.59996, 31.197646],    
      lng: 0,
      lat: 0,
      loaded: false,       
      zoom: 13,
      address: '',         // 真实地址
      events: {            // 获取点击的位置
        click(e) {
          let { lng, lat } = e.lnglat;
          self.lng = lng;
          self.lat = lat;

          // 这里通过高德 SDK 完成。
          var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
          });        
          geocoder.getAddress([lng ,lat], function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
              if (result && result.regeocode) {
                self.address = result.regeocode.formattedAddress;
                self.$nextTick();
              }
            }
          });        
        }
      },
      plugin: [{         // 定位
        pName: 'Geolocation',
        events: {
          init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                self.lng = result.position.lng;
                self.lat = result.position.lat;
                self.center = [self.lng, self.lat];
                self.loaded = true;
                self.$nextTick();
              }
            });
          }
        }
      }],
      markers: [],            // 点组件
      searchOption: {         // 搜索组件配置
        city: '广州',  
        citylimit: true       // 限制区域
      },
      texts: [                // 文本组件
        {
          position: [121.59996, 31.197646],
          text: 'hello world',
          offset: [0, -50],
          events: {
            click: () => {
              alert('click text');
            }
          }
        }
      ]
    }
  },
  methods: {
    addMarker() {
      let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
      let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
      this.markers.push([lng, lat]);
    },
    onSearchResult(pois) {
      let latSum = 0;
      let lngSum = 0;
      if (pois.length > 0) {
        pois.forEach(poi => {
          let {lng, lat} = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push([poi.lng, poi.lat]);
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.center = [center.lng, center.lat];
      }
      this.zoom = 15
    }
  },
  mounted () {

  }
}
</script>
<style lang="scss">
@import '../../scss/base.scss';
.amap-page-container {
  position: relative;
  width: 1125rem/$font;
  height: 1700rem/$font;
}
.el-vue-search-box-container{
  width: 100%;
}
.search-box {
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0);
}
.amap-page-container {
  position: relative;
}
</style>