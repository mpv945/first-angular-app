import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //导入自己定义的Bean
import {HEROES} from '../list-heroes';// 导入定义列表数据

@Component({
  selector: 'app-heroes',// 选择器，其他组件在html使用可以通过选择器引用
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //hero = 'Windstorm';// 属性
  hero: Hero = {// 通过Bean定义属性 ，使用Hero =的构造函数创建对应对象实例
    id: 1,
    name: '我在heroes定义的初始化属性'
  };

  heroes = HEROES;// 把定义的列表赋值到heroes属性

  selectedHero: Hero; // 定义选中的对象，该对象根据html绑定的事件设定

  // 自定义函数，前端html可以直接在事件绑定到该函数处理
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { } // 构造函数

  // 接口方法实现
  ngOnInit() {
  }

}
