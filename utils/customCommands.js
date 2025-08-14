// utils/customCommands.js or similar
module.exports = () => {
  browser.addCommand("scrollDown", async function () {
    const scrollable = await $("android=new UiSelector().scrollable(true)");
    await driver.execute("mobile: scrollGesture", {
      elementId: scrollable.elementId,
      direction: "down",
      percent: 1.0,
    });
  });

  
browser.addCommand("safeScrollDown", async function () {
  const { width, height } = await driver.getWindowRect();

  const startY = height * 0.4;
  const endY = height * 0.2;
  const x = width / 2;

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y: startY },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 300 },
      { type: 'pointerMove', duration: 500, x, y: endY },
      { type: 'pointerUp', button: 0 }
    ]
  }]);

  await driver.releaseActions();
  await driver.pause(500);
});

browser.addCommand("scrollUntilVisible", async function (targetSelector, maxScrolls = 5) {
  if (!targetSelector || typeof targetSelector !== 'string') {
    throw new Error(`Invalid selector passed to scrollUntilVisible: ${targetSelector}`);
  }

  const { width, height } = await driver.getWindowRect();
  const x = width / 2;
  const startY = height * 0.7; // start lower
  const endY = height * 0.2;   // scroll farther up

  for (let i = 0; i < maxScrolls; i++) {
    const targetElement = await $(targetSelector);
    if (await targetElement.isDisplayed()) {
      console.log(`✅ Found target "${targetSelector}" after ${i} scroll(s)`);
      return;
    }

    await driver.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x, y: startY },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 300 },
        { type: 'pointerMove', duration: 500, x, y: endY },
        { type: 'pointerUp', button: 0 }
      ]
    }]);

    await driver.releaseActions();
    await driver.pause(500);
  }

  throw new Error(`❌ Target element "${targetSelector}" not found after ${maxScrolls} scrolls`);
});

browser.addCommand("scrollUpUntilVisible", async function (targetSelector, maxScrolls = 5) {
  if (!targetSelector || typeof targetSelector !== 'string') {
      throw new Error(`Invalid selector passed to scrollUpUntilVisible: ${targetSelector}`);
  }

  const { width, height } = await driver.getWindowRect();
  const x = width / 2;
  const startY = height * 0.2;
  const endY = height * 0.7;

  for (let i = 0; i < maxScrolls; i++) {
      const targetElement = await $(targetSelector);
      if (await targetElement.isDisplayed()) {
          console.log(`✅ Found "${targetSelector}" after ${i} upward scroll(s)`);
          return;
      }

      console.log(`🔄 Scroll attempt ${i + 1} — "${targetSelector}" not visible yet`);

      await driver.performActions([{
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
              { type: 'pointerMove', duration: 0, x, y: startY },
              { type: 'pointerDown', button: 0 },
              { type: 'pause', duration: 300 },
              { type: 'pointerMove', duration: 500, x, y: endY },
              { type: 'pointerUp', button: 0 }
          ]
      }]);

      await driver.releaseActions();
      await driver.pause(500); // Let UI settle
  }

  await driver.saveScreenshot(`./screenshots/scroll-fail-${Date.now()}.png`);
  throw new Error(`❌ "${targetSelector}" not found after ${maxScrolls} upward scrolls`);
});


};
