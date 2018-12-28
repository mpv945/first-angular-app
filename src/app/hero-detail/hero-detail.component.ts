import { Component, OnInit, Input } from '@angular/core';//导入核心包的三个模块，导入输入
import { Hero } from '../hero';// 导入hero的Hero Bean

// 为了减少组件复杂性，定义一个专门显示详情的
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;//  @Input() 表示可以接受一个英雄对象并显示它

  constructor() { }

  ngOnInit() {
  }

}
