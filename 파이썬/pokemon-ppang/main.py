from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import pyperclip
import time

driver = webdriver.Chrome()


#Xpath랑 id 넣으면 클립보드에 복사함.
def copy_input(xpath, input):
    pyperclip.copy(input)
    driver.find_element_by_xpath(xpath).click()
    ActionChains(driver).key_down(Keys.CONTROL).send_keys('v').key_up(Keys.CONTROL).perform()
    time.sleep(0.1)

id = '아이디'
pw = '비번'

#포켓몬빵 결제창 주소
driver.get('https://m.pay.naver.com/o/products/510440774/6510954368/purchase?from=https://m.pay.naver.com')
# 테스트용
# driver.get('https://m.pay.naver.com/o/products/510440774/6660047326/purchase?from=https://m.pay.naver.com')
driver.implicitly_wait(3)


#아이디 비번 복붙
copy_input('//*[@id="id"]', id)
copy_input('//*[@id="pw"]', pw)

#로그인 버튼 클릭
driver.find_element_by_xpath('/html/body/div[1]/div[2]/div/div[2]/div/form/div/button').click()

#자주사용하는 기기 등록 확인
driver.find_element_by_xpath('/html/body/div[1]/div[2]/div/div[2]/div/form/button[1]').click()

#주문사항 확인버튼
driver.find_element_by_xpath('/html/body/div/div[2]/div[3]/ul/li[1]/a').click()

#후불결제체크
driver.find_element_by_xpath('/html/body/div[1]/div[2]/form/div/div[4]/div[1]/div/div/div/div[2]/div/div/div[1]/div/label').click()

#결제확인
driver.find_element_by_xpath('/html/body/div[1]/div[2]/form/div/div[4]/div[8]/div/a').click()