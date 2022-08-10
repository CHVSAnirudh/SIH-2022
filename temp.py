import random
import os
from PIL import Image
im = random.choice(os.listdir(r"dataset"))
print(im)
im = r"dataset/"+im
#remove_black_bg(im)
img = Image.open(im)

new_height = random.randint(300, 400+1)
new_width = random.randint(400, 500+1)
#print(images[i].size)
img = img.resize((new_width, new_height))

angle = random.randint(0,361)
img = img.rotate(angle)



white_img = Image.open('dataset/' + random.choice(os.listdir(r"dataset")))
white_img.paste(img,(20,100))

white_img.show()