import { Component , OnInit , Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {
  @Input() item:any;
  @Output() childMsg= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  sendMsg(){
    // console.log("123")
    this.childMsg.emit({msg:"我是子组件,这是我发给父组件的东西"})
  }
}
