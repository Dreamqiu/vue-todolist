<template>
  <div id="app">
    vue简单todolist
    <HelloWorld/>
  </div>
</template>

<!--
1、在输入框中输入内容后按enter键，即可把内容添加到下面的列表中（如果内容为空则不添加）
2、动态计算有几个未完成的任务
3、点击复选框，实现选中或不选中效果（即完成或未完成）
4、鼠标移入列表，会出现一个删除按钮，点击删除按钮即可删除该列表
5、已经添加的列表任务，即便关闭浏览器或者电脑，下次打开任务还在列表中（用到了本地存储storage）
---->

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
