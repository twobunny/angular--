## 模板语法（Template Syntax）

简单案例讲解。

####使用指令创建出一个组件：

1. 根路径 `ng g c ./components/text`
2. 当前路径 `ng g c ./text`

使用指令创建组件，指令等，angular-cli会自动帮你加入app.module依赖，可方便直接使用。默认生成4个文件：

1. *.html 为默认的渲染页面html结构
2. *.css 为样式文件 
3. *.spec.ts为测试文件 
4. *.ts为组件文件

```javascript

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './text.component.html',
	styleUrls: ['./text.component.css']
})
export class TextComponent OnInit {
	constructor(){}
 	OnInit(){}
}

```
#### 插值表达式

定义变量：
```javascript
export class TextComponent OnInit {

html:string = "Hello World";
name:string = "twobunny";
id:string = "myinput";
age = 18;
classname = 'myclass';
mySize = 18；
constructor(){}
	OnInit(){}
	}
```
把文本内容绑定到插值字符串(html中)
```html
<h1>{{html}}</h1>
```
#### 属性绑定
1. 元素直接绑定常量：
```html
<input type="text" title="form">
```
2. 元素自身属性绑定变量：
```html
<input type="text" [name]="name" [id]="id" >
```
3. 元素自定义属性绑定:
```html
<div [attr.age]="age"></div>
```

#### 元素类名 class 绑定
1. 绑定样式名称为变量：
```html
<div [class]="className"></div>  
```
2. 根据表达式来决定 className 是否加在元素上：
```html
<div [class.className]="1 == 1"></div>    
```

#### 元素内联样式绑定：
```html
<div [style.width.px]="mySize" [style.color]="'red'"></div>
```

#### 元素事件绑定：
```html
<input type="button" value="click" (click)="confirm($event, args)"/>
```

#### 双向绑定
该指令用于表单元素，所以在使用的时候要在根模块中 `./src/app/app.module.ts` 添加表单模块 `FormsModule`
```javascript
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [FormsModule, BrowserModule]
})
```
```html
<input type="text" [(ngModel)]="name" />
```

#### 本地变量
```html
<h1>{{localname.value}}</h1> //本地变量
<h2>{{name}}</h2> //双向绑定
<input type="text" [(ngModel)]="name" #localname/>
`````