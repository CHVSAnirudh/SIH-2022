for x in range(1,115):
    fname = "Rohu/labels/" + "Rohu-Head (" + str(x) +")" + ".txt"
    with open(fname,"w") as f:
        string = "2" + " 0.500000" + " 0.500000" + " 1.000000" + " 0.800000"
        f.write(string)


