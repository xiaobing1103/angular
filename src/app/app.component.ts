import { Component } from '@angular/core';

// angular核心模块的组件装饰器
// 装饰器定义组件的元数据
// 相当于组件的名称
// 组件模板文件
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = '牛批🐂';
  classStr = 'bgBlue active';
  classObj = {
    bgBlue: true,
    active: false,
  };
  htmlStr = '<span>helloWorld</span>';
  msg = '这是一个索引属性';
  isShow: any = true;
  sum(a: number, b: number) {
    return a + b;
  }
  classArr: Array<string> = ['abc', 'cba', 'aaa'];
  styleStr = 'background:orange; width:400px; height:400px;';
  styleObj = {
    background: 'pink',
    width: '100px',
    height: '100px',
  };
  // 数组的模式已经被废弃了
  styleArr: Array<string> = ['width', '100px'];

  color: string = 'orange';
  px: number = 100;
  changeColor() {
    this.styleObj = {
      background: 'purple',
      width: '200px',
      height: '300px',
    };
  }
  changeButton(e: any) {
    console.log(e);
    e.target.style.background = 'green';
  }

  // 条件的渲染
  person: string = '湖北人';

  togglePerson() {
    this.person = this.person == '广东人' ? '湖北人' : '广东人';
  }

  Arr = ['终南山', '胡兰娟', '蔡徐坤'];
  student = {
    name: '小明',
    hoddy: '打篮球',
  };
  choosePerson(person: string, i: number) {
    console.log(person, i);
    alert(`我喜欢第${i + 1}人${person}`);
  }

  orderState="看电视";
  orderState1="1";
  username="angular的数据双向绑定";
  password=""
  chlickFn(){
    console.log(this.username);
    console.log(this.password)
  }
  getContent(input1:any,input2:any){
    console.log(input1)
    console.log(input2)
  }
  student1 ={
    name:"老陈",
    age:"30"
  }
  time=new Date();

// 不明原因不能提交表单
  eventFn(text:any){
    console.log(text);
  }


  xingming="admin";
  mima="123456";
  msgk="老陈";



  sendchildMsg ="这是父组件给子元素的数据,希望在子组件中显示";

  getChildMsg =""
  
  getEvent(event:any){
    console.log(event)
    this.getChildMsg =event.msg
  }
}
