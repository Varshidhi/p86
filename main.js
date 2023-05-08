var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromUrl('BirthdayImage.jpg', function(Img){
        block_img_object=Img;

        block_img_object.scaleToWidth(700);
        block_img_object.scaleToheight(510);
        block_img_object.set({
            top:0
            left:0
        });
        canvas.add(block_img_object)
    });
	
}

function playSound(){
	x.play();
}
