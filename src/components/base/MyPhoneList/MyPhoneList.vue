<!-- 类电话簿组件 -->

<template>
  <div>
    <div class="hot-title"><p>热门</p></div>
    <!-- 左侧歌手列表 -->
    <ul class="list-group-ul">
      <li class="list-group">
        <ul class="list-group-ul">
          <li v-for="item in singerList" class="list-group-item">
            <img :src="require(`../../../common/img${item.avatar}`)" class="avatar">
            <span class="name">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>

    <!-- 右侧字母列表 -->
    <div class="list-shortcut">
      <ul>
        <li
          v-for="(item, index) in shortcut"
          :data-index="index"
          class="item">{{ item }}</li>
      </ul>
    </div>
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
        singerList: [],
        shortcut: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      }
    },
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    watch: {
    },
    created () {
      this.getSingerList()
    },
    methods: {
      getSingerList () {
        let vm = this;
        console.log(api.singerList)
        global.get(api.singerList, null, function(response) {
            var data = response.body;
            vm.singerList = data.data.data; 
            console.log(vm.singerList); 
          }, function(response) {
            alert("请求失败了");
        }, false)
      }
    },
    computed: {
    },
    mounted () {
    },
    destroyed () {}
  }
</script>

<style lang="scss" scoped>
  @import '~@/common/scss/const.scss';
  @import '~@/common/scss/mymixin.scss';

  .my-phone-list {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $color-background;
  }
  .hot-title {
    font-size: 0.9rem;
    color: hsla(0,0%,100%,.5);
    background: #333;
    padding: 10px 0 10px 20px;
  }
  .list-group {
    padding-bottom: 30px;
    .list-group-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
    .list-group-item {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name {
        margin-left: 20px;
        color: $color-text-l;
        font-size: $font-size-medium;
      }
    }
  }
  .list-shortcut {
    position: absolute;
    z-index: 30;
    right: 0;
    top: 55%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: $color-background-d;
    font-family: Helvetica;
    .item {
      list-style: none;
      padding: 3px;
      line-height: 1;
      color: $color-text-l;
      font-size: $font-size-small;
      &.current {
        color: $color-theme;
      }
    }
  }
  .list-fixed {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    .fixed-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
  }
</style>
