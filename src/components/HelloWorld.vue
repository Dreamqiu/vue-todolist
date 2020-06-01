<template>
  <div>
    <header>
      <section>
        <label for="title">ToDoList</label>
        <!--使用v-model 指令在input框上创建双向数据绑定。并为按键添加修饰符，监听键盘enter键。-->
        <input id="input1" type="text" placeholder="添加ToDo" v-model="todo" @keyup.enter="addList"/>
      </section>
    </header>
    <section>
      <h2>正在进行
        <span>{{todoLen}}</span>
      </h2>
      <ol class="demo-box">
        <li draggable="true" v-for="(item,index) in todoList" :key="index" v-show="!item.done">
          <input type="checkbox" @change="changeToDo(index,true)">
          <p>{{item.todo}}</p>
          <a @click="deletToDo(index,true)">-</a>
        </li>
      </ol>
      <h2>已经完成
        <span>{{todoList.length-todoLen}}</span>
      </h2>
      <ul>
        <li draggable="true" v-for="(item,index) in todoList" :key="index" v-show="item.done">
          <input type="checkbox" checked="checked" @change="changeToDo(index,false)">
          <p>{{item.todo}}</p>
          <a @click="deletToDo(index,false)">-</a>
        </li>
      </ul>
    </section>
    <footer>
      Copyright &copy; 2014 todolist.cn
      <a @click="clear">clear</a>
    </footer>
  </div>
</template>

<script>
import * as localStoragetodo from '@/sever/localStorage.js'
export default {
  name: 'HelloWorld',
  data(){
    return{
      todo:'',
      todoList: [],
      todoLen: 0
    }
  },
  methods:{
    //添加正在进行的事项
    addList(){
      let todoObj = {
      todo: this.todo,
      done: false
      }
      //将localStorage封装到localStoragetodo；对localStoragetodo.getItem返回的数据进行判断；不进行数据判断添加时可能会报错
      var tempList = localStoragetodo.getItem('todoList')
      if (tempList) {
        tempList.push(todoObj)
        localStoragetodo.setItem('todoList', tempList)
      } else {
        var tempData = []
        tempData.push(todoObj)
        localStoragetodo.setItem('todoList', tempData)
      }
      //添加事项,先判断写入的内容不能为空
      if(this.todo===''){
        alert('不能为空')
        return  
      }
      this.todoList.push(todoObj)
      this.todoLen++
      this.todo = '' //添加完后置空
      
    },


    //将正在完成的事项改为已完成
    //根据done的值来控制是否显示，在点击事件中对done取反。对未完成的事项长度进行加减。
    changeToDo(index,done){
      if(done){
        this.todoLen--
        console.log(this.todoLen)
        this.todoList[index].done = true
        // console.log(this.todoList[1])
        localStoragetodo.setItem('todoList', this.todoList)
      } else {
        this.todoLen++
        this.todoList[index].done = false
        // console.log(this.todoList[1])
        localStoragetodo.setItem('todoList', this.todoList)
      }
    },
    deletToDo(index,done){
      if(done){
        this.todoLen--
      }
      this.todoList.splice(index,1)
      localStoragetodo.setItem('todoList', this.todoList)
    },

    //在初始的时候对未完成事项进行自加运输，以得到初始的长度。
    initTodo () {
      var todoArr = localStoragetodo.getItem('todoList')
      if (todoArr) {
        for (let i = 0, len = todoArr.length; i < len; i++) {
          if (todoArr[i].done === false) {
            this.todoLen++
          }
        }
        this.todoList = todoArr
      }
    },
    //页脚的清除
    clear(){
      localStorage.clear()
      this.todoList = []
      this.todoLen = 0
    }
  },
  //在页面加载的时候，显示之前已存在的内容
  mounted () {
    this.initTodo()
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
