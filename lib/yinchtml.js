const $fs = require('fs');
const $path = require('path');
const $argv = process.argv;
if($argv.length < 3){
	console.log('缺少路径参数');
	return;
}
if(!$fs.existsSync($argv[2])){
	console.log('无效的路径参数');
	return;
}
const $root_dir = $path.join(process.cwd(),$argv[2]);
console.log('执行目录 ' + $root_dir);
if(!$fs.existsSync($path.join($root_dir,'YIncHTMLConfig.js'))){
	console.log('缺少配置文件 YIncHTMLConfig.js');
	return;
}
const $y_inc_html_config = require($path.join($root_dir,'YIncHTMLConfig.js'));
$y_inc_html_config.forEach((v,i) => {
	let tpl = v.tpl;
	let inc = v.inc;
	let dist = v.dist;
	$fs.readdir($path.join($root_dir,tpl),{withFileTypes:true},(err,files) => {
		files.filter(v => {
			return v.isFile();
		}).map(v => {
			return v.name;
		}).forEach(v => {
			$fs.readFile($path.join($root_dir,tpl,v),{encoding:'utf-8'},(err,data) => {
				let new_str = data.replace(/<!--\[(.+)\]-->/gi,(match,$1) => {
					return $fs.readFileSync($path.join($root_dir,inc,$1.split(' ')[1]));
				});
				$fs.writeFile($path.join($root_dir,dist,v),new_str,err => {
					if(err){
						throw err;
					}
					console.log(`tpl:${tpl} | inc:${inc} | dist:${dist} | file:${v}编译成功`);
				});
			});
		});
	});
});