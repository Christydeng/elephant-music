<!-- 歌手页组件 -->

<template>
  <div class="my-singer">
    <my-phone-list :data="singers"></my-phone-list>
    <router-view></router-view>
  </div>
</template>

<script>
import MyPhoneList from '@/components/base/MyPhoneList/MyPhoneList'
import { mapMutations } from 'vuex'

const HOT_TITLE = '热门'
const HTO_NUM = 10

export default {
  components: {
    MyPhoneList
  },
  data () {
    return {
      singers: []
    }
  },
  props: {},
  watch: {},
  methods: {
    // 获取歌手列表数据
    getSingerList () {
    },
  },
  created () {
    this.getSingerList()
  },
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
@import '~@/common/scss/const.scss';
@import '~@/common/scss/mymixin.scss';

.my-singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>
