shoebox下载地址
http://renderhjs.net/shoebox/

1. 下载后双击SpriteSheet.sbx，会自动配置shoebox，你不需要做任何设置。
2. 把要打包的图片，拖到sprite sheet里，点击save生成材质图片和json说明文件
3. 注意生成出来的打包材质图片要是改了名字，对应的json文件里的"file"也要改名字
4. 当手动修改图片名和json里对应的file名称，如果浏览器报错
```
Resource interpreted as Image but transferred with MIME type text/plain:
```

这是修改文件名时，前面引号的格式变了，比如 ```"file": “uimenus.png"```  ,uimenus前面的引号格式不对， 
请复制一个别的地方的引号替换。
mac系统下会出现这个问题，win好像没事
