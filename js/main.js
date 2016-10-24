/*
* @Author: taochen
* @Date:   2016-10-17 17:37:39
* @Last Modified by:   taochen
* @Last Modified time: 2016-10-25 05:26:02
*/

var row = 6
var col = 6
var $gameArea = $('#gameArea')
var imageSrc = []
var $click1
var noClick = false
var duration = 1000
var score = 0

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
    console.log(i)
    var src = './image/flag'+(i%18+1)+'.png'
    imageSrc.push(src)
    imageSrc.push(src)
  }

  // shuffle the imageSrc Array
  imageSrc = _.shuffle(imageSrc)
  // fill images
  var backImageSrc = './image/backimage.png'
  imageSrc.forEach(function(src, index) {
    var $flagImage = $('<img/>').attr('src', src).addClass('flagImage')
    var $backImage = $('<img/>').attr('src', backImageSrc).addClass('backImage')
    $('.grid').eq(index).append($flagImage, $backImage)
  })
}

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
        setTimeout(function(){
          $frontImage.remove()
          $click1.remove()
          score+=10
          $('#score').text('score:'+ score)
          $click1 = null
          noClick = false
        }, duration)
      }else{
        setTimeout(function(){
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

// 游戏模式切换
$('#option1').on('click',function(){
  $('#option1').parent().addClass('active')
  $('#option2').parent().removeClass('active')
  $('.backImage').css('opacity','1.0')
})

$('#option2').on('click',function(){
  $('#option1').parent().removeClass('active')
  $('#option2').parent().addClass('active')
  $('.backImage').css('opacity','0.7')
})

// 难度选择切换
$('#option3').on('click',function(){
  $('#option3').parent().addClass('active')
  $('#option4').parent().removeClass('active')
  $('#option5').parent().removeClass('active')
  row = 4
  col = 4
  $click1 = null
  noClick = false
  imageSrc = []
  score = 0
  $('#score').text('score:0')
  $('#gameArea > div').remove()
  createGrid()
  initImage()
  if($('#option2').parent().hasClass('active')){
    $('.backImage').css('opacity','0.7')
  }
})

$('#option4').on('click',function(){
  $('#option3').parent().removeClass('active')
  $('#option4').parent().addClass('active')
  $('#option5').parent().removeClass('active')
  row = 6
  col = 6
  $click1 = null
  noClick = false
  imageSrc = []
  score = 0
  $('#score').text('score:0')
  $('#gameArea > div').remove()
  createGrid()
  initImage()
  if($('#option2').parent().hasClass('active')){
    $('.backImage').css('opacity','0.7')
  }
})

$('#option5').on('click',function(){
  $('#option3').parent().removeClass('active')
  $('#option4').parent().removeClass('active')
  $('#option5').parent().addClass('active')
  row = 8
  col = 8
  $click1 = null
  noClick = false
  imageSrc = []
  score = 0
  $('#score').text('score:0')
  $('#gameArea > div').remove()
  createGrid()
  initImage()
  if($('#option2').parent().hasClass('active')){
    $('.backImage').css('opacity','0.7')
  }
})

createGrid()
initImage()


