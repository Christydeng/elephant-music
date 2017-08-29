<!-- 搜索页组件 -->

<template>
	<div class="my-search">
		<!-- 搜索框 -->
		<div class="search-box-wrapper">
			<div class="my-search-box">
				<i class="icon-search"></i> 
				<input type="text" placeholder="搜索歌曲、歌手" class="box" ref="queryRef" v-model="query"> 
				<i class="icon-dismiss" v-show="query" @click="clearQuery"></i>
			</div>
		</div>
		<!-- 热门搜索 -->
		<div class="shortcut-wrapper">
			<div class="my-scroll shortcut">
				<div class="hot-key">
					<h1 class="title">热门搜索</h1>
				    <ul>
				   		<li class="item" v-for="item in hotkey">
				     		<span>{{ item }}</span>
				    	</li>
				 	</ul>
				</div>
			</div>
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
	      // 热门搜索关键系
	      query: '',
	      hotkey: []
	    }
	  },
	  created () {
	  	// 获取热门搜索关键系
	    this._getHotKey()
	  },
	  methods: {
	    _getHotKey () {
	      var vm = this
	      global.get(api.hotkey, null, function(response) {
	        var data = response.body
	        vm.hotkey = data.data.data
	      	}, function(response) { 
	      		alert('请求失败了') 
	  		}, false)
	    },
	    clearQuery() {
	      this.query = ''
	    },
	    // 给父亲用的，让输入框失去焦点，避免滚动搜索结果时移动端键盘遮挡
	    blur() {
	      this.$refs.queryRef.blur()
	    }
	  }
	}
</script>

<style>
	.my-search {
	  .search-box-wrapper {
	    margin: 20px;
	  }
	}
	.search-box-wrapper {
		margin: 20px;
	}
	.my-search-box {
	    display: flex;
	    align-items: center;
	    width: 100%;
	    padding: 0 6px;
	    height: 40px;
	    background: #333;
	    border-radius: 6px
	}
	.my-search-box .box {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	    margin: 0 5px;
	    line-height: 18px;
	    border: 0;
	    outline: none;
	    background: #333;
	    color: #fff;
	    font-size: 14px;
	}
	.my-search .shortcut-wrapper {
	    position: fixed;
	    top: 178px;
	    bottom: 0;
	    width: 100%;
	}
	.my-search .shortcut-wrapper .shortcut .hot-key {
	    margin: 0 20px 20px;
	}
	.shortcut-wrapper .shortcut .hot-key .title {
	    margin-bottom: 20px;
	    font-size: 14px;
	    color: hsla(0,0%,100%,.5);
	}
	.my-search .shortcut-wrapper .shortcut .hot-key h1 {
	    display: block;
	    font-size: 0.9em;
	    -webkit-margin-before: 0.67em;
	    -webkit-margin-after: 0.67em;
	    -webkit-margin-start: 0px;
	    -webkit-margin-end: 0px;
	    font-weight: bold;
	}
	ul, menu, dir {
	    display: block;
	    list-style-type: disc;
	    -webkit-margin-before: 1em;
	    -webkit-margin-after: 1em;
	    -webkit-margin-start: 0px;
	    -webkit-margin-end: 0px;
	}
	.my-search .shortcut-wrapper .shortcut .hot-key .item {
	    display: inline-block;
	    padding: 5px 10px;
	    margin: 0 20px 10px 0;
	    border-radius: 6px;
	    background: #333;
	    font-size: 14px;
	    color: hsla(0,0%,100%,.3);
	}
	.my-search-box .icon-search, .my-search-box .icon-dismiss {
	    font-size: 16px;
	    color: #222;
	}
</style>