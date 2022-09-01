def radius(obj):
    print(obj)
    centers = ['Konada', 'Chintapalli', 'Bandamurlanka', 'Vatturupallepalem', 'Nachugunta', 'Itamukkala', 'Nachugunta', 'Perumallapuram', 'Nachugunta', 'Konadapapeta', 'Cheyyur', 'Pudhukuppam', 'Cheyyur', 'Thazhanguda', 'Rajappettai', 'Ganapathichettikulam', 'Portonovo', 'Chithiraipettai', 'Kaippanikuppam', 'Palagaithottikuppam', 'Varor', 'Mahim Cr', 'Arnalapada', 'Kolthare', 'Someshvar', 'Mithabao', 'Kelus', 'Kochara-Nivati', 'Anandwadi', 'Jambhari', 'Adakathabail', 'Thaikadappuram', 'Kavvayi', 'AyikkaraFH', 'Ramanattukara', 'Beypore', 'Thalikulam', 'Manakodam', 'Thazampally', 'Mariyanadu', 'Konada', 'Chintapalli', 'Bandamurlanka', 'Vatturupallepalem', 'Nachugunta', 'Itamukkala', 'Nachugunta', 'Perumallapuram', 'Nachugunta', 'Konadapapeta', 'Cheyyur', 'Pudhukuppam', 'Cheyyur', 'Thazhanguda', 'Rajappettai', 'Ganapathichettikulam', 'Portonovo', 'Chithiraipettai', 'Kaippanikuppam', 'Palagaithottikuppam', 'Varor', 'Mahim Cr', 'Arnalapada', 'Kolthare', 'Someshvar', 'Mithabao', 'Kelus', 'Kochara-Nivati', 'Anandwadi', 'Jambhari', 'Adakathabail', 'Thaikadappuram', 'Kavvayi', 'AyikkaraFH', 'Ramanattukara', 'Beypore', 'Thalikulam', 'Manakodam', 'Thazampally', 'Mariyanadu']
    landing_center = list(obj['landingcenters'])
    weights = list(obj['weights'])
    #centers = obj['allcenters']
    m = {}
    for x in centers:
        m[x.strip()] = 0
    for i in range(len(landing_center)):
        m[landing_center[i].strip()] += weights[i]
    max_val = max(m.values())
    
    for x in m.keys():
        try:
            m[x.strip()] = m[x.strip()]/max_val
        except:
            pass
    for x in m.keys():
        if m[x.strip()] == 0:
            pass
        else:
            m[x.strip()]+=0.2
    for x in m.keys():
        m[x.strip()]*=150000
    for x in m.keys():
        if m[x.strip()] == 0:
            pass
    result = list(m.values())
    result = [int(x) for x in result]
    return {'status': 'Sucess', 'result': result}