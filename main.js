/*
* @Author: taochen
* @Date:   2016-10-17 17:37:39
* @Last Modified by:   taochen
* @Last Modified time: 2016-10-24 14:16:50
*/

var row = 6
var col = 6
var $gameArea = $('#gameArea')
var imageSrc = []
var $click1
var noClick = false
var duration = 1000

function createGrid(){
  const rowSize = $gameArea.width()/row
  const colSize = $gameArea.height()/col
  for (var i = 0;i < row; i++) {
    for (var j = 0;j < col; j++) {
      var $div = $('<div/>').width(rowSize).height(colSize).appendTo($gameArea).addClass('grid')
      if (j !== 0) {
        $div.css('border-left','none')
      }
      if (i !== 0) {
        $div.css('border-top','none')
      }
    }
  }
}

function initImage() {
  var imgNum = row * col/2
  for (var i = 0; i < imgNum; i++) {
    var src = './image/flag'+(i%18+1)+'.png'
    imageSrc.push(src)
    imageSrc.push(src)
  }

  // shuffle the imageSrc Array
  imageSrc = _.shuffle(imageSrc)

  // fill images
  const backImageSrc = './image/backimage.png'
  imageSrc.forEach((src, index) => {
    var $flagImage = $('<img/>').attr('src', src).addClass('flagImage')
    var $backImage = $('<img/>').attr('src', backImageSrc).addClass('backImage')
    $('.grid').eq(index).append($flagImage, $backImage)
  })

  // add listener,在父元素上做事件代理，避免给每个子元素都加事件处理器
  $gameArea.on("click", function(evt) {
    if (noClick) return
    var $target = $(evt.target)
    if ($target.hasClass('backImage')) {
      $target.hide()
      var $frontImage = $target.siblings()
      if($click1){
        noClick = true
        if($frontImage.attr('src') === $click1.attr('src')){
          setTimeout(() => {
            $frontImage.remove()
            $click1.remove()
            $click1 = null
            noClick = false
          }, duration)
        }else{
          setTimeout(() => {
            $target.show()
            $click1.siblings().show()
            $click1 = null
            noClick = false
          }, duration)
        }
      }else{
        $click1 = $frontImage
      }
    }
  })
}

createGrid()
initImage()



