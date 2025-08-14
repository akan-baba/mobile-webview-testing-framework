# Mobile Webview Testing Framework

This repository contains automated tests for the **nopCommerce mobile webview** using [WebdriverIO](https://webdriver.io/) with the **Page Object Model (POM)** design pattern.

## 📂 Project Structure

```
mobile-webview-testing-framework/
│
├── allure-report/                  # Allure HTML report output
├── allure-results/                  # Allure raw report results
│
├── e2e/                             # End-to-end test specifications
│   ├── userLogin.js
│   ├── userRegistration.js
│
├── pages/                           # Page Object Model classes
│   ├── userLogin.js
│   ├── userRegistration.page.js
│
├── utils/                           # Utility functions and custom commands
│   ├── customCommands.js
│
├── .gitignore                       # Git ignore file
├── package.json                     # Project dependencies & scripts
├── package-lock.json                # Dependency lock file
├── wdio.conf.js                     # WebdriverIO configuration
└── README.md                        # Project documentation
```

## 🛠 Tech Stack

- **WebdriverIO** - Test framework
- **Appium** - Mobile automation
- **JavaScript (Node.js)** - Scripting language
- **Allure Reporter** - Reporting tool
- **Page Object Model (POM)** - Maintainable test structure

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/mobile-webview-testing-framework.git
cd mobile-webview-testing-framework
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment

- Ensure **Appium** server is running
- Ensure an Android emulator or real device is connected
- Update `wdio.conf.js` with your desired capabilities

### 4️⃣ Run tests

Run all tests:

```bash
npx wdio run wdio.conf.js
```

Run a specific test file:

```bash
npx wdio run wdio.conf.js --spec ./e2e/userLogin.js
```

### 5️⃣ Generate Allure Report

```bash
allure generate allure-results --clean
allure open
```

## 🧩 Custom Commands

This project includes a **scroll down** custom command in `utils/customCommands.js`:

```javascript
browser.addCommand('scrollDown', async () => {
    const scrollable = await $('android=new UiSelector().scrollable(true)');
    await driver.execute('mobile: scrollGesture', {
        elementId: scrollable.elementId,
        direction: 'down',
        percent: 1.0
    });
});
```

Usage in a test:

```javascript
await browser.scrollDown();
```

## 📜 Example Test Flow

1. Navigate to the nopCommerce mobile app/webview
2. Scroll or interact with elements
3. Perform login/registration
4. Validate expected results

## 📊 Reporting

- **Allure Reports** are generated after test execution
- To view reports:

```bash
allure generate allure-results --clean
allure open
```

## 👤 Author

- Your Name
- [GitHub Profile](https://github.com/your-username)

---
✅ **Best Practice:** Commit small, frequent changes and keep your tests modular using POM.
