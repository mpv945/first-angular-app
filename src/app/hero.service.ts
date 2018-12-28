import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './list-heroes';

import { MessageService } from './message.service';

@Injectable({//@Injectable标志着该类成为参与依赖注入系统的类;提供一种可注射的服务，而且还可以有自己的注入依赖。
  providedIn: 'root'// 类型spring 的bean作用域？
})
export class HeroService {// 服务可以从任何地方，web服务，本地存储，或者是模拟数据源获取数据的英雄。

  //添加一个getHeroes方法来返回模拟英雄。
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
