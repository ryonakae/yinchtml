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
tpl:the html template directory,such as .php file
[tpl file](https://github.com/chenbimo/yinchtml/doc/tpl.png)
inc:the include directory,such as <?php include('./head.php'); ?>
[inc1](https://github.com/chenbimo/yinchtml/doc/inc1.png)
[inc1](https://github.com/chenbimo/yinchtml/doc/inc2.png)
dist:the dist directory,the final html files
[inc1](https://github.com/chenbimo/yinchtml/doc/dist.png)