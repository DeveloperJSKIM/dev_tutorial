import random

import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import psycopg2 as pg2 # driver import
import time
import folium

# make color map 
from matplotlib import cm
from matplotlib.colors import ListedColormap, LinearSegmentedColormap

viridis = cm.get_cmap('hsv', 256)
YlOrRd = cm.get_cmap('hot', 40)
newcolors = viridis(np.linspace(0, 1, 256))
newcolors = np.delete(newcolors, np.arange(0, 35), 0)  # 앞쪽 삭제.

newcolors2 = YlOrRd(np.linspace(0, 1, 40))
newcolors2 = newcolors2[::-1]  # 거꾸로 만들기.
white_color = np.array([1, 1, 1, 1])
newcolors[:10] = newcolors2[:10]
newcolors[:1] = white_color
newcmp = ListedColormap(newcolors)



# Load coastline data
conn1 = pg2.connect(host='203.253.202.171', dbname='aisdb', user='postgres_1',
                        password='readonly1', port='5432')  # db에 접속
cur1 = conn1.cursor()
map_data = pd.DataFrame()
sql = 'SELECT lat, lon FROM "public"."map_data_SW_korea"'
cur1.execute(sql)
data = cur1.fetchall()
# create a now df
map_data = pd.DataFrame(list(data), columns=['lat', 'lon'])
conn = pg2.connect(host='203.253.202.21', dbname='fishery', user='fishery_readonly_1',
                        password='readonly1', port='5432')  # db에 접속
cur = conn.cursor()

datetime_start = "'2017-01-01 00:00:00'"
datetime_end = "'2020-01-01 00:00:00'"
extract_column_sql = 'datetime,johab_code,fish_code,fish_name,fishstate_name,fishshiptype,salenum,saleweight,saleunitprice,saleunitprice_per_kg,saletotalprice,unitsize,unitname'
extract_column_df = ['datetime','johab_code','fish_code','fish_name','fishstate_name','fishshiptype','salenum','saleweight','saleunitprice','saleunitprice_per_kg','saletotalprice','unitsize','unitname']
shiptype_list = "'근해유자망어업'"

sql = f'SELECT {extract_column_sql} FROM fish_landing_suhyub where datetime >=  {datetime_start} and datetime <=  {datetime_end} and fishshiptype = {shiptype_list}'
cur.execute(sql)
data = cur.fetchall()

# create a now df
result_fc = pd.DataFrame(list(data), columns=extract_column_df)
fish_list = result_fc.fish_name.value_counts()[0:10].index.values
print(fish_list)

result_summary = pd.DataFrame({
    'year': [],
    'fish_name': [],
    'saleweight_sum': []
})

for i in range(3):
    since_start = 2017
    since_end = 2018
    datetime_start = f"'{str(since_start+i)}-01-01'"
    datetime_end = f"'{str(since_end+i)}-01-01'"
    #datetime_start = "'2019-01-01'"
    #datetime_end = "'2019-02-10'"
    fishshiptype = "('근해유자망어업','근해고정자망어업', '연안유망', '연안유자망어업', '근해자망어업', '연안자망어업', '자망어업', '삼중자망어업')"

    #물고기 종류별
    for fish_name_itr in fish_list:
        fish_name = "'" + fish_name_itr + "'"
        sql = f'SELECT {extract_column_sql} FROM fish_landing_suhyub where datetime >=  {datetime_start} and datetime <=  {datetime_end} and fish_name= {fish_name} and fishshiptype in {fishshiptype}'
        cur.execute(sql)
        data = cur.fetchall()
        result_fc = pd.DataFrame(list(data), columns=extract_column_df)
        print(fish_name_itr, datetime_start, datetime_end, result_fc.saleweight.sum(),
              result_fc.saleunitprice_per_kg.sum())
        append_data = {
            'year': datetime_start[1:5],
            'fish_name': fish_name_itr,
            'saleweight_sum': result_fc.saleweight.sum()}
        result_summary=result_summary.append(append_data,ignore_index=True)

print(result_summary.sort_values(by = 'fish_name'))

x = [2017,2018,2019]
for fish_name_itr in fish_list:
    y = []
    new_arr = result_summary[result_summary['fish_name'] == fish_name_itr]
    for index, row in new_arr.iterrows():
        print(row['saleweight_sum'])
        y.append(row['saleweight_sum'])
    plt.plot(x, y,'o-',label=fish_name_itr)
plt.legend(loc='center right')
plt.show()