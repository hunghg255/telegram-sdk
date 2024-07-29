import { Telegram, WebAppType, WebViewType } from './types';

const coreWindow = window as unknown as Window & { Telegram: Telegram };

const WebApp: WebAppType = coreWindow.Telegram.WebApp;
const WebView: WebViewType = coreWindow.Telegram.WebView;

export * from "./types";

export {
  WebApp,
  WebView
};
