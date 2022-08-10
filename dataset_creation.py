from PIL import Image

img2 = Image.open("catla.jpg")
img1 = Image.open("catla2.JPG")
img3 = Image.open("Catla3.jpeg")


img1.paste(img2,(0,0))

img1.show()