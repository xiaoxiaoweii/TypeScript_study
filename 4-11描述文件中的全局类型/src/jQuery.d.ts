/* ES6 模块化 */

declare module 'jQuery' {
	interface JqueryInstance {
		html: (html: string) => JqueryInstance;
	}
	// 混合类型
	function $(readyFunc: () => void): void;
	function $(selector: string): JqueryInstance;
	namespace $ {
		namespace fn {
			class init {}
		}
	}
	// 导出$
	export = $;
}
