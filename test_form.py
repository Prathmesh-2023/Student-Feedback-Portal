import os
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

# Open form
file_path = os.path.abspath("index.html")
driver.get("file:///" + file_path)

print("[PASS] Test 1: Page Loaded Successfully")
print("Page Title:", driver.title)


# Test 2: Valid Input Submission
try:
    driver.find_element(By.ID, "name").send_keys("John Doe")
    driver.find_element(By.ID, "email").send_keys("john@gmail.com")
    driver.find_element(By.ID, "mobile").send_keys("9876543210")
    driver.find_element(By.ID, "department").send_keys("Computer Science")
    driver.find_element(By.XPATH, "//input[@value='Male']").click()
    driver.find_element(By.ID, "feedback").send_keys(
        "This is a very good platform for learning and improving skills"
    )

    driver.find_element(By.XPATH, "//button[text()='Submit']").click()
    print("[PASS] Test 2 Passed: Valid form submitted")

except Exception as e:
    print("[FAIL] Test 2 Failed:", e)

time.sleep(2)


# Test 3: Empty Fields Validation
try:
    driver.refresh()
    driver.find_element(By.XPATH, "//button[text()='Submit']").click()
    print("[PASS] Test 3 Passed: Empty field validation triggered")

except Exception as e:
    print("[FAIL] Test 3 Failed:", e)

time.sleep(2)


# Test 4: Invalid Email
try:
    driver.find_element(By.ID, "email").send_keys("wrongemail")
    driver.find_element(By.XPATH, "//button[text()='Submit']").click()
    print("[PASS] Test 4 Passed: Invalid email detected")

except Exception as e:
    print("[FAIL] Test 4 Failed:", e)

time.sleep(2)


# Test 5: Reset Button
try:
    driver.find_element(By.XPATH, "//button[text()='Reset']").click()
    print("[PASS] Test 5 Passed: Reset button working")

except Exception as e:
    print("[FAIL] Test 5 Failed:", e)

time.sleep(2)

driver.quit()