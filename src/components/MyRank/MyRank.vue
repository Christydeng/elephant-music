<!-- 排行页组件 -->

<template>
  <div class="my-rank" ref="rankRef">
    <!-- 排行榜数据 -->
    <div class="toplist" ref="scrollRef" :data="toplist">
      <ul>
        <li class="item" v-for="item in toplist">
          <!-- 左图 -->
          <div class="icon">
            <img width="100" height="100" :src="require(`../../common/img${item.picUrl}`)">
          </div>

          <!-- 右歌 -->
          <ul class="songlist">
            <li class="song" v-for="(song, index) in item.songList">
              <span>{{ index + 1 }}.</span>
              <span>{{ song.songname }}</span>
              <span class="singername"> - {{ song.singername }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import { global } from '@/global/global'
  import { api } from '@/global/api'
  export default {
    components: {
    },
    data () {
      return {
        toplist: []
      }
    },
    props: {},
    watch: {},
    filters: {},
    created () {
      this.getRankList()
    },
    methods: {
    	getRankList (){
    		let vm = this;
    		global.get(api.rankList, null, function(response) {
    		    var data = response.body;
    		    vm.toplist = data.data.data.toplist; 
    		  }, function(response) {
    		    alert("请求失败了");
    		}, false)
    	}
    },
    computed: {},
    mounted () {},
    destroyed () {}
  }
</script>

<style lang="scss" scoped>
  @import '~@/common/scss/const.scss';
  @import '~@/common/scss/mymixin.scss';

  .my-rank {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .toplist {
      height: 100%;
      overflow: hidden;
      .item {
        display: flex;
        margin: 0 20px;
        padding-top: 20px;
        height: 100px;
        &:last-child {
          padding-bottom: 20px;
        }
        .icon {
          flex: 0 0 100px;
          width: 100px;
          height: 100px;
        }
        .songlist {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 20px;
          height: 100px;
          overflow: hidden;
          background: $color-highlight-background;
          color: $color-text-d;
          font-size: $font-size-small;
          .song {
            @include no-wrap();
            line-height: 26px;
            .singername {
              color: rgba(255, 255, 255, 0.2);
            }
          }
        }
      }
      .loading-container {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
</style>
