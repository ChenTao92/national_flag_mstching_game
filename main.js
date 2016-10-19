/*
* @Author: taochen
* @Date:   2016-10-17 17:37:39
* @Last Modified by:   taochen
* @Last Modified time: 2016-10-19 19:01:46
*/

var width = 6;
var height = 6;

var flagIndex = _.shuffle([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18]);

for(var i = 0; i < width * height; i++) {
  var $flag = $('<div></div>');
  var flagscr = 'url(./image/flag'+flagIndex[i]+'.png)';
  $('#gameArea').append($flag);
  $flag.css('background-image',flagscr)
}



