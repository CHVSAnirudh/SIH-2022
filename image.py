import random
from PIL import Image
import os

no_of_fishes = random.randint(6,16)

#print(no_of_fishes)
whitebg_ht = 2830
whitebg_width = 4244

min_height = whitebg_ht // 5
max_height = whitebg_ht // 4

min_width = whitebg_width // 5
max_width = whitebg_width // 4

images = []
for i in range(no_of_fishes):
    im = random.choice(os.listdir(r"C:\Users\mahes\Desktop\sih\SIH-2022\dataset"))
    im = r"C:\Users\mahes\Desktop\sih\SIH-2022\dataset/"+im
    img = Image.open(im)
    images.append(img)

#resizing 
for i in range(no_of_fishes):
    new_height = random.randint(min_height, max_height+1)
    new_width = random.randint(min_width, max_width+1)
    #print(images[i].size)
    images[i] = images[i].resize((new_width, new_height))
    #print(images[i].size)

#rotating
angle = random.randint(0,361)
for i in range(no_of_fishes):
    images[i] = images[i].rotate(angle)


white_img = Image.open("whitebg.jpg")

#selecting area randomly to paste fishes

#white_img.paste(images[0],(4244//2,2830//2))

#white_img.save("5.png")