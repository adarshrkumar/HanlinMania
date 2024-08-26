var isMuted = true
var attrs = [
  {
    name: 'autoplay', 
    value: true, 
  }, 
]
if (isMuted) attrs.push({
  name: 'muted', 
  value: true, 
})
var vIntTime = 2
var colsAmt = 0
var vidsAmt = colsAmt * colsAmt
var vid = false
var src = false

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const vids = [
  'JavaCreates.mp4', 
  'Studio_Project.mp4'
]
let num = 0

if (location.href.split('.')[1] !== 'id') createVideo()
function createVideo() {
  src = `/${vids[num]}`
  var video = document.createElement('video')
  video.src = src
  attrs.forEach(function(a) {
    video.setAttribute(a.name, a.value)
  })
  document.body.appendChild(video)
  var videos = document.querySelectorAll('video')
  // alert(videos.length % colsAmt)
  if (videos.length === 1 | videos.length > vidsAmt) {
    colsAmt++
    vidsAmt = colsAmt * colsAmt
    document.body.style.setProperty(`--cols-amt`, colsAmt)
  }
  num++
  if (num >= vids.length) num = 0
}
if (location.href.split('.')[1] !== 'id') var vInt = setInterval(createVideo, vIntTime*1000)

let vHeight = (100/16)*9
let vWidth = 100
document.querySelectorAll('video').forEach(video => {
  video.style.height = vHeight
})
let i = 0
let colors = [
  '#FFFFFF', 
  '#EEEEEE', 
  '#DDDDDD',
  '#CCCCCC', 
  '#BBBBBB', 
  '#AAAAAA', 
  '#999999', 
  '#888888', 
  '#777777', 
  '#666666', 
  '#555555',
  '#444444', 
  '#333333', 
  '#222222', 
  '#111111', 
  '#000000', 
  '#111111', 
  '#222222', 
  '#333333', 
  '#444444', 
  '#555555',
  '#666666', 
  '#777777', 
  '#888888', 
  '#999999', 
  '#AAAAAA', 
  '#BBBBBB', 
  '#CCCCCC', 
  '#DDDDDD',
  '#EEEEEE', 
]

//setColor()
//var colorI = setInterval(setColor, 250)

function setColor() {
  document.body.style.background = colors[i]
  i++
  if (i === colors.length) {
    i = 0
  }
}