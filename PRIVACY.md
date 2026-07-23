# Privacy Policy — Stock Scanner Pro

*Last updated: July 2026*

## Summary

Stock Scanner Pro runs entirely in your browser (or the app wrapper installed on your device). There is no backend server operated by this app, no user account, and no analytics or tracking of any kind. Everything described below can be verified directly in the app's source code, which is open for inspection.

## What is stored, and where

**On your device only (browser local storage):**
- Any API keys you choose to enter in Settings (Finnhub, Twelve Data, FMP, Polygon, Alpha Vantage, Tiingo, EODHD, Alpaca, Intrinio, Nasdaq Data Link, Databento). These are stored only in your browser's local storage on your device and are never transmitted anywhere except directly to the corresponding data provider, using a connection initiated by your own device.
- A small daily counter of how many requests you've made to each free-tier data provider (to help you stay under their limits).

**Nothing else is stored automatically.** Your scan progress (which tickers were screened, their scores, etc.) exists only in the browser tab's memory while it's open, and is saved permanently only when *you* click "Export Progress (JSON)" — which downloads a file to your own device. That file is never uploaded anywhere by the app.

## What is sent to third parties

When you run a scan, your device makes direct requests to the data providers you've configured (e.g. Yahoo Finance, Finnhub, Twelve Data, Financial Modeling Prep, Polygon.io, Alpha Vantage, and any optional premium providers you've added a key for), asking for stock price and fundamental data for the tickers being screened. These requests include only ticker symbols and your API key for that provider — no personal information about you.

The app also fetches public index-membership lists (which companies are in the S&P 500, Nasdaq 100, etc.) from Wikipedia, iShares, and a public GitHub dataset, and may route some of these requests through public CORS proxy services (allorigins.win, corsproxy.io, codetabs.com, thingproxy.freeboard.io) purely to work around browser cross-origin restrictions — these proxies see the request but the app does not send them any personal information, only the public URL being fetched.

## What this app does NOT do

- Does not create a user account or require sign-in.
- Does not collect your name, email, location, or device identifiers.
- Does not use analytics, crash reporting, or advertising SDKs.
- Does not sell or share any data, because it does not collect any to begin with.
- Does not execute trades or connect to any brokerage account.

## Your API keys

Any API key you enter is yours, from your own account with that provider, entered voluntarily. You can delete it at any time by clearing the field in Settings and saving, or by clearing your browser's site data for this app.

## Children's privacy

This app is a general-purpose educational stock-screening tool, not directed at children, and does not knowingly collect information from anyone.

## Changes to this policy

If this app's data practices change, this file will be updated accordingly.

## Contact

This is an independently developed educational tool. For questions about this policy, please contact the developer through the GitHub repository where this app is hosted.
