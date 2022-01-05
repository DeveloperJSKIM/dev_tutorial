from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


def set_chrome_driver():
    chrome_options = webdriver.ChromeOptions()
    driver1 = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    return driver1


driver = set_chrome_driver()

my_id = "x"
my_pw = "x"

driver.implicitly_wait(3)  # 3초 기다리기

driver.get('https://intra.vtstechlab.com/bbs/login.php')

login_button = driver.find_element(By.XPATH, "/html/body/div/form/div/button")  # 로그인 버튼
input_id = driver.find_element(By.XPATH, '/html/body/div/form/div/div[1]/input')  # 아이디 입력 XPATH
input_password = driver.find_element(By.XPATH, '/html/body/div/form/div/div[2]/input')  # 비밀번호 입력

input_id.send_keys(my_id)  # 아이디값을 넣어줌.
input_password.send_keys(my_pw)  # 비밀번호 값 넣어줌.
login_button.click()  # 로그인 버튼 클릭.

driver.implicitly_wait(2)  # 2초 기다리기
print('login success!')

go_to_work = driver.find_element(By.XPATH, '/html/body/aside/div[2]/button[1]')  # 출근버튼
off_work = driver.find_element(By.XPATH, '//*[@id="get_off_work"]')  # 퇴근버튼
# go_to_work.click() #출근버튼 클릭
off_work.click()
print('process success!')
