<p align="center">
<a href="https://www.npmjs.com/package/telegram-sdk" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/logos:telegram.svg?color=%23bbdf58" alt="logo" width='100'/></a>
</p>

<p align="center">
  This repository offers an npm package for developing web applications for your Telegram bot. It re-exports the API provided by Telegram's JS module. The benefit of this package is that it includes TypeScript types, simplifying project setup.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/telegram-sdk" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/telegram-sdk.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/telegram-sdk" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/telegram-sdk.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=telegram-sdk" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/telegram-sdk" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/telegram-sdk/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/telegram-sdk/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/telegram-sdk" alt="License" /></a>
</p>



## Installation

```bash
pnpm add telegram-sdk
```
you don't need to install the Telegram JS module separately, as it is included in this package.

## Setup

- Import core module in root file of your project.

```ts
import 'telegram-sdk/core';
```


## Usage

- Use the API provided by the Telegram JS module.

```typescript
import { WebApp, WebView } from 'telegram-sdk';

// to display the initData
console.log(WebApp.initData);

// to show the main button
WebApp.MainButton.show();

// to set the app background color
WebApp.setBackgroundColor('#f60000')

// to set the app header color
WebApp.setHeaderColor('bg_color');

// Display a swipe vertical by event
WebView.postEvent('web_app_setup_swipe_behavior', false, {
  allow_vertical_swipe: false,
});

// ready method must come last
WebApp.ready();
```

## disableVerticalSwipes

```ts
import { WebApp, WebView } from 'telegram-sdk';

// Config something...
WebApp.expand(); // Expand app
WebApp.disableClosingConfirmation();
WebApp.disableVerticalSwipes(); // Disable Vertical Swiper

// ready method must come last
WebApp.ready();
```

## Documentation

- Refer to the official [Telegram documentation](https://core.telegram.org/bots/webapps#initializing-web-apps) for Web Apps to explore additional features available through WebApp.

- Core script is available in the [Telegram JS module](https://telegram.org/js/telegram-web-app.js)
