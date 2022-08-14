import random
from PIL import Image
import os
import numpy as np


no_of_fishes = random.randint(15,26)
f = open("1.txt", "a")
#print(no_of_fishes)
whitebg_ht = 2830
whitebg_width = 4244

white_img = Image.open("whitebg.png")
white_img = white_img.resize((whitebg_width, whitebg_ht))
white_img.save("whitebg.png")
min_height = whitebg_ht // 5
max_height = whitebg_ht // 4

min_width = whitebg_width // 5
max_width = whitebg_width // 4

images = []
img_names = []
for i in range(no_of_fishes):
    im = random.choice(os.listdir(r"dataset"))
    print(im)
    img_names.append(im)
    im = r"dataset/"+im
    #remove_black_bg(im)
    img = Image.open(im)
    img = img.convert("RGBA")
    images.append(img)

#resizing 
for i in range(no_of_fishes):
    new_height = random.randint(min_height, max_height+1)
    new_width = random.randint(min_width, max_width+1)
    #print(images[i].size)
    images[i] = images[i].resize((new_width, new_height))
    #print(images[i].size)

#rotating
angles = []
for i in range(no_of_fishes):
    angle = random.randint(0,180)
    angles.append(angle)
    images[i] = images[i].rotate(angle)


white_img = Image.open("whitebg.png")
white_img = white_img.convert("RGBA")

#selecting area randomly to paste fishes
for i in range(no_of_fishes):
    string = ""
    if(img_names[i][:5] == "catla"):
        string += "0 "
    elif(img_names[i][:4] == "rohu"):
        string += "1 "
    else:
        string += "2 "
    random_width_min = (whitebg_width//2) - (whitebg_width//4)
    random_width_max = (whitebg_width//2) + 500
    random_height_min = (whitebg_ht//2) - (whitebg_ht//4)
    random_height_max = (whitebg_ht//2) + 400
    random_width = random.randint(random_width_min,random_width_max)
    random_height = random.randint(random_height_min, random_height_max)
    mid_x = (random_width + images[i].size[0])/(2 * whitebg_width)
    mid_y = (random_height + images[i].size[1])/(2* whitebg_ht)
    string += str(mid_x)+" "+str(mid_y)+" "+str((3*images[i].size[0])/(2*whitebg_width))+" "+str((images[i].size[1]*3)/(whitebg_ht*2))+"\n"
    f.write(string)
    white_img.paste(images[i],(random_width,random_height), images[i])

white_img.save("5.png")
f.close()