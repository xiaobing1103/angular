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
}