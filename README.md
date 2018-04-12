# angular-pit #
angular作为三大主流框架之一，为静态文本展示设计的声明式语言，核心：MVW（Model-View-Whatever）、模块化、自动化双向数据绑定、语义化标签、依赖注入等。

## angular 历史 ##

### angularJS ###
优点：

1. AngularJS模板功能强大丰富，自带了极其丰富的angular指令。
2. AngularJS是完全可扩展的，与其他库的兼容效果很好，每一个功能可以修改或更换，以满足开发者独特的开发流程和功能的需求。
3. AngularJS是一个比较完善的前端MVC框架，包含服务，模板，数据双向绑定，模块化，路由，过滤器，依赖注入等所有功能。
4. AngularJS是互联网巨人谷歌开发，这也意味着他有一个坚实的基础和社区支持。

缺点：

1. AngularJS强约束导致学习成本较高，对前端不友好。但遵守 AngularJS 的约定时，生产力会很高，对 Java 程序员友好。
2.  AngularJS不利于SEO，因为所有内容都是动态获取并渲染生成的，搜索引擎没法爬取。
3.  落后当前的web发展理念（如组件式开发）。
4.  对手极端支持不友好（09年诞生，没有考虑到手机端的适配）。
5. 性能问题：AngularJS作为 MVVM 框架，因为实现了数据的双向绑定，对于大数组、复杂对象会存在性能问题。

----------

###angular2###
自angular2起，增加了新特性：

1. 移除了controller+$scope的设计，改用组件式开发（重大改变）。
2. 性能更好 
	-  改进后的依赖注入（一个元素通过它自己的依赖项进行传递，而不是相反的单独处理）
	-  子注入
	-  实例作用域
	-  动态加载,添加新的指允许令（directive）或者控制器（controller）。
	-  模板化
	-  指令
	-  子路由
	-  屏幕激活器
	-  设计
	-  日志系统
	-  angular2移除了作用域（$scope）
3. 优先为移动应用设计

----------

###angular4###
1. 更小更快原则。
2. 改进了AOT（Ahead-of-time，动态编译）
3. 动画包，可以从 @angular/platform-browser/animations 导入浏览器动画模块。
4. 改进*ngIf和*ngFor
5. Angular服务端渲染，内置http模块，功能强大，@angular/platform-server。


----------
###目录###
项目以angular4为实例进行分析学习。

1. 项目实践
2. 理论学习
