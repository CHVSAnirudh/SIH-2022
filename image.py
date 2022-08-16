import random
from PIL import Image,ImageDraw
import os
import numpy as np
import math

no_of_fishes = random.randint(15,25)
f = open("1.txt", "a")
print(no_of_fishes)
whitebg_ht = 2830
whitebg_width = 4244

white_img = Image.open("whitebg.png")
white_img = white_img.resize((whitebg_width, whitebg_ht))
white_img.save("whitebg.png")
print(white_img.size)
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
mid_pts = []
for i in range(no_of_fishes):
    type = 0
    if(img_names[i][:5] == "catla"):
        type = 0
    elif(img_names[i][:4] == "rohu"):
        type = 1
    else:
        type = 2
    random_width_min = (whitebg_width//2) - (whitebg_width//4)
    random_width_max = (whitebg_width//2) + 500
    random_height_min = (whitebg_ht//2) - (whitebg_ht//4)
    random_height_max = (whitebg_ht//2) + 400
    random_width = random.randint(random_width_min,random_width_max)
    random_height = random.randint(random_height_min, random_height_max)
    mid_x = (random_width + images[i].size[0]/2)/(whitebg_width)
    mid_y = (random_height + images[i].size[1]/2)/(whitebg_ht)
    new_mid_pts = []
    radius = images[i].size[1]/(22*whitebg_ht)
    for t,ty,x,y,rw,rh in mid_pts:
        if(x-radius < mid_x and x+radius> mid_x):
            continue
        if(y-radius < mid_y and y+radius > mid_y):
            continue
        new_mid_pts.append((t,ty,x,y,rw,rh))
    mid_pts = new_mid_pts
    mid_pts.append((i,type,mid_x,mid_y,random_width,random_height))
    # string += str(mid_x)+" "+str(mid_y)+" "+str((3*images[i].size[0])/(2*whitebg_width))+" "+str((images[i].size[1]*3)/(whitebg_ht*2))+"\n"
    # f.write(string)
    white_img.paste(images[i],(random_width,random_height), images[i])

for i,type, x,y,rw,rh in mid_pts:
    string = str(type) + " "
    string += str(x)+" "+str(y)+" "+str((3*images[i].size[0])/(2*whitebg_width))+" "+str((images[i].size[1]*3)/(whitebg_ht*2))+"\n"
    f.write(string)
white_img.save("5.png")
f.close()
img = Image.open("5.png")
print(img.size)
img1 = ImageDraw.Draw(img)
img1.rectangle([1000,1,4043,2829], outline ="red",width=10)  
for i,type, x,y,rw,rh in mid_pts:
    print(math.ceil(x*whitebg_width),math.ceil(y*whitebg_ht),(3*images[i].size[0])//2,(images[i].size[1]*3)//2)    
    img1.rectangle([(math.ceil(rw),math.ceil(rh)),math.ceil(rw)+(images[i].size[0]),math.ceil(rh)+(images[i].size[1])], outline ="red",width=10)
img.show()