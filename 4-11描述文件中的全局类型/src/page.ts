/* $(function () {
	alert(123);
});
 */
import $ from 'jQuery'

$(function () {
	$('body').html('<div>123</div>');
	new $.fn.init();
});
