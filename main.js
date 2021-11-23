var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var image = new Image();
image.src = "src/image.jpg"
canvas.width = image.width;
canvas.height = image.height;
context.fillStyle = "rgba(0,0,0,1)"
context.fillRect(0, 0, canvas.width, canvas.height)

function drawImage() {
    context.drawImage(image, 0,0)
    requestAnimationFrame(drawImage)
    var imageData = context.getImageData(0, 0, image.width, image.height);
    var data = imageData.data;
    var s = 5
    var chars = "@B%&#0QZOCJUYXoahkbdpqwmzcvunxrjftL/|()1?-_+~*<>i!lI;:,^'`."
    context.clearRect(0, 0, canvas.width, canvas.height)
    for (y = 0; y < canvas.height / s; y++){
        for(x = 0; x < canvas.width / s; x++){
            i = (y * canvas.width + x) * (4 * s) 
            var r = data[i]
            var g = data[i + 1]
            var b = data[i + 2]
            var moy = ( r + g + b) / 3;
            var charm = Math.round(moy / 255 * (chars.length - 1))
            context.font = s + 'px Impact' 
            context.fillText(chars[charm], x * s, y * s)
        }
    }
}
requestAnimationFrame(drawImage)
drawImage()