import pandas
import json
def faster_yolo(model,model2, image,weight):
    result = model(image)
    result2 = model2(image)
    #result.show()
    result.save()
    result = result.pandas().xyxy[0].to_json(orient="records")
    result2.save()
    result2 = result2.pandas().xyxy[0].to_json(orient="records")
    catla = 0
    rohu = 0
    mori = 0
    turtles = 0
    fishes = 0
    result = json.loads(result)
    result2 = json.loads(result2)
    for y in result2:
        label=y['class']
        if label == 0:
            turtles+=1
        elif label == 1:
            fishes+=1
    print(result)

    for y in result:
        label = y['class']
        if label == 0:
            catla+=1
        elif label == 1:
            rohu+=1
        else:
            mori+=1
    result = [catla, rohu, mori, turtles,fishes]
    return result
    catla = catla*1.2
    rohu = rohu*0.8
    mori = mori*1.5
    s = catla+rohu+mori
    try:
        catla_weight = (catla/s)*weight
        catla_weight = round(catla_weight)
        rohu_weight = (rohu/s)*weight
        rohu_weight = round(rohu_weight)
        mori_weight = (mori/s)*weight
        mori_weight = round(mori_weight)
        catla_proportion = (catla/s)*100
        catla_proportion = round(catla_proportion)
        rohu_proportion = (rohu/s)*100
        rohu_proportion = round(rohu_proportion)
        mori_proportion = (mori/s)*100
        mori_proportion = round(mori_proportion)
    except:
        catla_weight = 0
        rohu_weight = 0
        mori_weight = 0
    if catla_weight>0:
        result.append({"name":"catla","weight":catla_weight,"proportion":catla_proportion})
    if rohu_weight>0:
        result.append({"name":"rohu","weight":rohu_weight,"proportion":rohu_proportion})
    if mori_weight>0:
        result.append({"name":"mori","weight":mori_weight,"proportion":mori_proportion})

    if turtles > 0:
        result.append({"name":"turtle","weight":"unknown","proportion":"unknown"})

    if catla==0 and rohu==0 and mori==0:
        return {'status': 'Sucess', 'result': "The model is still immature and only detects catla rohu and mori, either the image contains fishes of other species or come back to us with better resolution image"} 
    return {'status': 'Sucess', 'result': result}