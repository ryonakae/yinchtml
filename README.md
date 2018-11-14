# yinchtml
a html include tool
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
		dist:'.'
	},
	{
		tpl:'tpl',
		inc:'.',
		dist:'test'
	}
];
```
- tpl:the html template directory,such as .php file

![tpl file](https://github.com/chenbimo/yinchtml/blob/master/doc/tpl.png)

- inc:the include directory,such as ```php <?php include('./head.php'); ?>```
inc head file
![inc1](https://github.com/chenbimo/yinchtml/blob/master/doc/inc1.png)
inc script file
![inc1](https://github.com/chenbimo/yinchtml/blob/master/doc/inc2.png)

- dist:the dist directory,the final html files

![inc1](https://github.com/chenbimo/yinchtml/blob/master/doc/dist.png)