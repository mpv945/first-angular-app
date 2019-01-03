注意angular可以加Ionic4开发app项目。具体参考https://www.imooc.com/article/70338

# 目前流行前端框架UI参考：https://blog.csdn.net/fundebug/article/details/80175493

#  使用步骤：[README.md使用说明](https://blog.csdn.net/kaitiren/article/details/38513715);[语法效果对比图](https://stackedit.io/app#), Angular 7 Snippets插件时angular vscode开发支持关键字联想快速生成代码。[Angular官网教程地址](https://angular.io)  [教程代码地址](https://stackblitz.com/angular/oyxlaykrmklg)

##    一 安装vscode（ctrl+ESC下面的点键盘可以呼出终端）
        1.下载对应的版本https://code.visualstudio.com/Download
        2.安装中文插件 ctrl+shift+x 打开插件，搜索Chinese ，找打Language，点击安装。
        3.设置本地语言环境 Ctrl+Shift+P 搜索Configure Display Language ，选中跳转，最后设置成"locale":"zh-cn"
##    二 配置nodejs [linux安装参考](https://github.com/nodejs/help/wiki/Installation); [node配置参考](https://blog.csdn.net/u011229848/article/details/81354074)
        1.[下载nodejs](https://nodejs.org/en/download/current/)
        2.解压到目录，然后在这个目录下新建两个文件夹node-cache和node-global（用来放npm全局模块的安装目录）
        3.配置环境变量,编辑Path变量,新增两个条目 nodejs 【解压目录】和【mydir\node-global】
        4.打开CMD，vscode（ctrl+【约等于键盘】可以呼出终端）运行下面的命令npm config set prefix "mydir\node-global" 和 npm config set cache "mydir\node-cache"；设置npm国内源（可选）npm config set registry "https://registry.npm.taobao.org"，最后查看版本node -v或者npm -v
##    三 新建第一个angular应用 ,执行ng --help 可以查看命令的使用；ng v查看版本信息
        如果需要git管理，请在远程创建好项目，然后git clone https//github.com/youname/gittest.git(远程资源地址)
        把新创建的项目_back,然后把.gitgnore 复制到git克隆的目录下
        否则，先创建本地项目，然后克隆，把新创建项目复制到克隆的目录下，最后提交（复制不要复制git相关文件夹）
        1.vscode 弹出终端，安装angular框架 npm install -g @angular/cli
        2.切换到存放web项目的工作目录，以angular框架创建一个项目，ng new first-angular-app 前期提示直接回车执行
        3.初始化完以后就可以通过ctrl+k，然后再按ctrl+0，分两段能打开文件夹，单ctrl+0能打开一个文件，ctrl+N 新建文件，ctrl+shift+N 打开新窗口
        4.进入项目的目录，执行ng serve --open （或只是-o）选项会自动打开你的浏览器，启动完访问地址为http://localhost:4200/
 ##   四 git管理（ctrl+shift+G）;如果提示[您希望 Code 定期运行 "git fetch" 吗?] 
        1.添加和修改完以后，ctrl+shift+G 可以看到更改有对应的变更个数，鼠标移上去会有+号，点击就是暂存所有的更改
        2.点击上方的... 选中全部提交，会提示输入提交注释，写回注释回车提交到本地仓库
        3.关于gitpath设置再文件--》首选项--》设置（ctrl+ M旁边的,号键盘),搜索gitpath
        4.在vs中每次更新代码都会要输入账号密码，方便起见，可以配置一下让GIT记住密码账号。git config --global credential.helper store   //在Git Bash输入这个命令就可以了（长期存储密码）；如果想自己设置时间，可以这样做：git config credential.helper 'cache --timeout=3600' 不加--timeout=3600秒默认只有15分钟
        增加远程地址的时候带上密码也是可以的。(推荐)http://yourname:password@gitee.com/name/project.git


# FirstAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).