
import matplotlib.pyplot as plt
import pandas as pd

result_summary = pd.DataFrame({
    'year': [2013,2013,2013,2014,2014,2014,2015,2015,2015],
    'fish_name': ['fish1','fish2','fish3','fish1','fish2','fish3','fish1','fish2','fish3'],
    'saleweight_sum': [21,25,66,11,22,33,66,66,44]
})
x = [2013,2014,2015]
fish_list=['fish1','fish2','fish3']
for fish_name_itr in fish_list:
    y = []
    new_arr = result_summary[result_summary['fish_name'] == fish_name_itr]
    for index, row in new_arr.iterrows():
        print(row['saleweight_sum'])
        y.append(row['saleweight_sum'])
    plt.plot(x, y,'o-',label=fish_name_itr)
plt.legend(loc='center right')
plt.show()

