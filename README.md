# yinchtml
a html include tool
![tpl file](https://github.com/chenbimo/yinchtml/blob/master/doc/yinchtml2.gif)
# usage
as a global module
```javascript
npm install yinchtml -g
yinchtml . 
yinchtml your path
```
as a local module
```javascript
npm install yinchtml
npx yinchtml .
npx yinchtml your path
```
# yinchtml-config.js
this is config file for yinchtml,it is necessary.
the struct like this.
```javascript
module.exports = [
	{
		tpl:'tpl',
		inc:'.',
		dist:'.',
		ext: '.html'
	},
	{
		tpl:'tpl',
		inc:'.',
		dist:'test',
		ext: '.html'
	}
];
```
# include tag
the ```html <!--[include file_path]-->``` string will be replace by file data.
write it in anywhere that you want to include other html file. 

- `tpl` :the html template directory,such as .php file

![tpl file](https://github.com/chenbimo/yinchtml/blob/master/doc/tpl.png)

- `inc` :the include directory,such as ```php <?php include('./head.php'); ?>``` head file

![inc1](https://github.com/chenbimo/yinchtml/blob/master/doc/inc1.png)

- `inc` :the include directory,such as ```php <?php include('./head.php'); ?>``` script file

![inc1](https://github.com/chenbimo/yinchtml/blob/master/doc/inc2.png)

- `dist` :the dist directory,the final html files

![inc1](https://github.com/chenbimo/yinchtml/blob/master/doc/dist.png)

- `ext` :target file extensiion (optional)