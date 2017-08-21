<!-- 个人中心 组件 -->

<template>
  <transition name="slide">
    <div class="my-user">
      <div class="back" @click="back">
        <i class="icon-back"></i>
      </div>

      <div class="switches-wrapper">
      </div>

      <div ref="playBtn" class="play-btn">
        <i class="icon-play"></i>
        <span class="text">随机播放全部</span>
      </div>

      <div class="no-result-wrapper">
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      switches: [
        {name: '我的收藏'},
        {name: '最近播放'}
      ],
      currentIndex: 0
    }
  },
  props: {},
  watch: {},
  methods: {
  	back() {
  	  this.$router.back()
  	},
  },
  created () {},
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
@import '~@/common/scss/const.scss';
@import '~@/common/scss/mymixin.scss';

.my-user {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  background: $color-background;
  &.slide-enter-active, &.slide-leave-active {
    transition: all 0.3s;
  }
  &.slide-enter, &.slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 50;
    .icon-back {
      display: block;
      padding: 10px;
      font-size: $font-size-large-x;
      color: $color-theme;
    }
  }
  .switches-wrapper {
    margin: 10px 0 30px 0;
  }
  .play-btn {
    box-sizing: border-box;
    width: 135px;
    padding: 7px 0;
    margin: 0 auto;
    text-align: center;
    border: 1px solid  $color-text-l;
    color: $color-text-l;
    border-radius: 100px;
    font-size: 0;
    .icon-play {
      display: inline-block;
      vertical-align: middle;
      margin-right: 6px;
      font-size: $font-size-medium-x;
    }
    .text {
      display: inline-block;
      vertical-align: middle;
      font-size: $font-size-small;
    }
  }
}
</style>
