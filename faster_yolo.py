def faster_yolo(model,image):
    result = model(image)
    result.print()