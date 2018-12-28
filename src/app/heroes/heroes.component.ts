import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //导入自己定义的Bean
//import {HEROES} from '../list-heroes';// 导入定义列表数据（换用下面使用service获取数据）
import { HeroService } from '../hero.service';

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

  
  // 接口方法实现（初始化处理函数）
  // getHeroes()在ngOnInit生命周期钩子内部调用ngOnInit，并在构造HeroesComponent实例后的适当时间调用Angular 
  ngOnInit() {
    this.getHeroes();// 初始化时候把heroes进行赋值
  }

  //constructor() { } // 构造函数（由于用到注入service去掉无参构造函数） 

  //heroes = HEROES;// 把定义的列表赋值到heroes属性
  // 第二种通过service获取英雄列表数据
  heroes: Hero[];
  // 该参数同时定义私有heroService属性并将其标识为HeroService注入站点。
  // 当Angular创建一个时HeroesComponent，依赖注入系统将heroService参数设置为单例实例HeroService。
  constructor(private heroService: HeroService) { }//向构造函数添加heroService类型的私有参数HeroService。
  getHeroes(): void {
    this.heroService.getHeroes()
        //等待Observable发出英雄阵列 - 这可能发生在现在或几分钟后。然后subscribe将发出的数组传递给回调，回调设置组件的heroes属性。
        .subscribe(heroes => this.heroes = heroes);
  }

  selectedHero: Hero; // 定义选中的对象，该对象根据html绑定的事件设定
  // 自定义函数，前端html可以直接在事件绑定到该函数处理
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
