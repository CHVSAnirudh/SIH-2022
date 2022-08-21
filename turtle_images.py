import random
from PIL import Image,ImageDraw
import os
import numpy as np
import math
for z in range(1):
    no_of_fishes = random.randint(15,26)
    no_of_turtles = random.randint(1,4)
    f = open("turtle_images/labels/" + str(z) + ".txt", "a")
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
    for i in range(no_of_turtles):
        im = random.choice(os.listdir(r"turtle_dataset"))
        print(im)
        img_names.append(im)
        im = r"turtle_dataset/"+im
        #remove_black_bg(im)
        img = Image.open(im)
        img = img.convert("RGBA")
        images.append(img)

    #resizing 
    for i in range(no_of_fishes+no_of_turtles):
        new_height = random.randint(min_height, max_height+1)
        new_width = random.randint(min_width, max_width+1)
        #print(images[i].size)
        images[i] = images[i].resize((new_width, new_height))
        #print(images[i].size)

    #rotating
    angles = []
    for i in range(no_of_fishes+no_of_turtles):
        angle = random.randint(0,180)
        angles.append(angle)
        images[i] = images[i].rotate(angle)


    white_img = Image.open("whitebg.png")
    white_img = white_img.convert("RGBA")

    #selecting area randomly to paste fishes
    mid_pts = []
    for i in range(no_of_fishes+no_of_turtles):
        type = 0
        if(img_names[i][:6] == "turtle"):
            type = 0
        else:
            type = 1
        random_width_min = (whitebg_width//2) - (whitebg_width//4)
        random_width_max = (whitebg_width//2) + 500
        random_height_min = (whitebg_ht//2) - (whitebg_ht//4)
        random_height_max = (whitebg_ht//2) + 400
        random_width = random.randint(random_width_min,random_width_max)
        random_height = random.randint(random_height_min, random_height_max)
        mid_x = (random_width + images[i].size[0]/2)/(whitebg_width)
        mid_y = (random_height + images[i].size[1]/2)/(whitebg_ht)
        new_mid_pts = []
        radius = max(images[i].size[1],images[i].size[0])/(25*whitebg_ht)
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
        string += str(x)[:8:]+" "+str(y)[:8:]+" "+str((images[i].size[0])/(whitebg_width))[:8:]+" "+str((images[i].size[1])/(whitebg_ht))[:8:]+"\n"
        f.write(string)
    white_img.save("turtle_images/images/" + str(z) + ".png")
    f.close()