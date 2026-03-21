import os

from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()

# Open form
file_path = os.path.abspath("index.html")
driver.get("file:///" + file_path)

# Test 1: Page load
print("Page Title:", driver.title)

# Test 2: Valid input
driver.find_element(By.ID, "name").send_keys("John Doe")
driver.find_element(By.ID, "email").send_keys("john@gmail.com")
driver.find_element(By.ID, "mobile").send_keys("9876543210")

driver.find_element(By.ID, "department").send_keys("Computer Science")

driver.find_element(By.XPATH, "//input[@value='Male']").click()

driver.find_element(By.ID, "feedback").send_keys(
    "This is a very good platform for learning and improving skills"
)

driver.find_element(By.XPATH, "//button[text()='Submit']").click()

time.sleep(2)

# Test 3: Invalid Email
driver.refresh()
driver.find_element(By.ID, "email").send_keys("wrongemail")
driver.find_element(By.XPATH, "//button[text()='Submit']").click()

time.sleep(2)

# Test 4: Reset button
driver.find_element(By.XPATH, "//button[text()='Reset']").click()

time.sleep(2)

driver.quit()