/*
* @Author: taochen
* @Date:   2016-10-17 17:37:39
* @Last Modified by:   taochen
* @Last Modified time: 2016-10-22 11:39:14
*/

var row = 6
var col = 6
var $gameArea = $('#gameArea')
var imageSrc = []
var noClick = false
var duration = 1000

function createGrid(){
  const rowSize = $gameArea.width()/row
  const colSize = $gameArea.height()/col
  for (var i = 0;i < row; i++) {
    for (var j = 0;j < col; j++) {
      var $div = $('<div/>').width(rowSize).height(colSize).appendTo($gameArea)
      if (j !== 0) {
        $div.css('border-left','none')
      }
      if (i !== 0) {
        $div.css('border-top','none')
      }
    }
  }
}

createGrid()

// var flagIndex = _.shuffle([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18]);

// for(var i = 0; i < width * height; i++) {
//   var $flag = $('<div></div>');
//   var flagscr = 'url(./image/flag'+flagIndex[i]+'.png)';
//   $('#gameArea').append($flag);
//   $flag.css('background-image',flagscr);
//   // 给每个国旗加class用于后期索引是否配对成功
//   $flag.attr('class','flag'+flagIndex[i]);
// }



