1.把jftools拷贝到egret-core\src\extension 里.
2.在egret-core\tools\lib\core\file_list.js 里添加
"extension/jftools/JFObject.js",
3.cmd 进入egret-core文件夹,输入 npm install -g，重新安装egret
4.进入项目文件夹，输入egret build xxxx -e,编译egret项目