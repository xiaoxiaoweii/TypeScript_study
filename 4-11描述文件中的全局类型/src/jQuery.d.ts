// 定义全局变量
/* declare var $: (param: () => void) => void; */

// 定义全局函数 一个函数多种形式 重载
interface JqueryInstance {
	html: (html: string) => JqueryInstance;
}

// 函数重载
declare function $(readyFunc: () => void): void;
declare function $(selector: string): JqueryInstance;

// 使用interface实现函数重载
/* interface JQuery {
	(readyFunc: () => void): void;
	(selector: string): JqueryInstance;
}

declare var $: JQuery; */

// 对对象进行类型定义 类惊进行类型定义 命名空间的嵌套
declare namespace $ {
	namespace fn {
		class init {}
	}
}