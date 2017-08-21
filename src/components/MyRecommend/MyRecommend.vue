<!-- 推荐页组件 -->

<template>
	<div class="my-recommend">
    <!--轮播-->
		<div class="swipe-wrapper">
			<mt-swipe :auto="4000">
			  <mt-swipe-item class="item"><img src="../../common/img/a1.jpg" /></mt-swipe-item>
			  <mt-swipe-item class="item"><img src="../../common/img/a2.jpg" /></mt-swipe-item>
			  <mt-swipe-item class="item"><img src="../../common/img/a3.jpg" /></mt-swipe-item>
			  <mt-swipe-item class="item"><img src="../../common/img/a4.jpg" /></mt-swipe-item>
			  <mt-swipe-item class="item"><img src="../../common/img/a5.jpg" /></mt-swipe-item>
			</mt-swipe>
		</div>

    <div class="recommend"><p>热门推荐</p></div>

    <!--推荐列表-->
    <div class="recommend-list">
      <ul>
        <li class="item" v-for="item in lists">
          <!--左图-->
          <div class="icon">
            <img slot="icon" :src="require(`../../common/img${item.imgurl}`)" width="60" height="60">
          </div>
          <!--右文-->
          <div class="text">
            <p class="name"v-html="item.name">Harry</p>
            <p class="desc"v-html="item.dissname">迪士尼原声精选集， 听完瞬间年轻10岁</p>
          </div>
        </li>
      </ul>
    </div>

	</div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      lists: []
    }
  },
  created: function () {
    this.submitUserInfo(),
    this.getRecommendList()
  },
  methods: {
    submitUserInfo: function () {
      let vm = this
      //取回userInfo变量
      let userInfo = sessionStorage.userInfo
      //把字符串转换成JSON对象
      userInfo = JSON.parse(userInfo)
      console.log('登录的用户：===' + userInfo.userName + '||密码：===' + userInfo.password)
    },
    getRecommendList: function () {
      let vm = this;
      vm.$http.get('./../static/dataJson/recommendList.json').then(function(response) {
          var data = response.body;
          vm.lists = data.data.data; 
          console.log(vm.lists); 
        }, function(response) {
          alert("请求失败了");
      })
    }
  }
}
</script>

<style lang="scss" scoped>
	.swipe-wrapper{
    width: 100%;
    height: 140px;
  }
  .swipe-wrapper .item>img {
  	width: 100%;
  	height: 140px;
  }
  .recommend {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #ffcd32;
  }
  .recommend-list {
    overflow: hidden;
  }
  .recommend-list .item {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px 10px 20px;
  }
  .recommend-list .item .icon {
    flex: 0 0 60px;
    width: 60px;
    padding-right: 20px;
  }
  .recommend-list .item .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    line-height: 20px;
    overflow: hidden;
  }
  .recommend-list .item .text .name {
    margin-bottom: 10px;
    color: #fff;
  }
  .recommend-list .item .text .desc {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.3);
  }
</style>
