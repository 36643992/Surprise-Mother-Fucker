////获取gulp对象
//var gulp=require("gulp");
//
////定义任务
//gulp.task("one",function(){
//	console.log("one");
//	gulp.src("css/dafeiji.css")//指定要处理的文件
//		.pipe(gulp.dest("css"))//处理完成后存放的目录
//});
//
////任务的依赖
//gulp.task("two",function(){
//	console.log("two");
//});
//
////three任务依赖one和two任务
//gulp.task("three",["one","two"],function(){
//	console.log("three");
//});
//
//
////默认任务
//gulp.task("default",["one","two"]);
////gulp.task("default",function(){
////	console.log("默认任务");
////});
//minifycss插件的参数对象
var obj = {
	removeComments: true, //清除HTML注释
	collapseWhitespace: true, //压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
	minifyJS: true, //压缩页面JS
	minifyCSS: true //压缩页面CSS
}



//获取gulp对象
var gulp=require("gulp");

//导入插件
var minifycss=require("gulp-minify-css");//css压缩插件
var uglify=require("gulp-uglify");//压缩Js的
var htmlmin=require("gulp-htmlmin");//html压缩

//定义任务
gulp.task("cssTask",function(){
	gulp.src("css/dafeiji.css")
		.pipe(minifycss(obj))//使用插件minifycss
		.pipe(gulp.dest("css"));
});

//压缩JS的插件
gulp.task("jsTask",function(){
	gulp.src("js/common.js")
		.pipe(uglify())//使用插件uglify
		.pipe(gulp.dest("js"));
});

//压缩html
gulp.task("htmlTask",function(){
	gulp.src("02_dafeiji.html")
		.pipe(htmlmin(obj))//使用插件uglify
		.pipe(gulp.dest("js"));
});

//默认任务
gulp.task("default",["htmlTask"]);














