import pandas as pd
import requests
from bs4 import BeautifulSoup
import json

import json
#1.从josn文件中读取数据，并保存在josn_data变量中
json_data=open('current.json',encoding='utf-8').read()
print(type(json_data))

data=json.loads(json_data)
print(type(data))
print(data)
for item in data:
    print(item)

for dict_data in data:
    print(dict_data['state'],'number='+str(dict_data['positive']))

df = pd.DataFrame(data)
df.to_csv('covid.csv')