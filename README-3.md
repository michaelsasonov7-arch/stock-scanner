# Stock Scanner Pro 📈

A two-stage, free-tier-friendly stock screener that looks for pullback setups across major U.S. indices — S&P 500, S&P MidCap 400, S&P SmallCap 600, Nasdaq 100, Dow 30, plus Russell 1000 when available (~1,500–2,000 tickers total, not the full NYSE/Nasdaq).

**Educational tool only — not investment advice.** Data comes from free-tier and optional paid third-party APIs and may be delayed or incomplete; nothing in this app should be treated as a signal to trade.

## How it works

1. **Stage 1 (Screening)** — runs on every ticker in the universe using free, no-key Yahoo Finance data. Checks whether price sits in the Fibonacci "golden zone" (38.2%–61.8%) of its 52-week range, RSI is in a reversal band, and the trend hasn't broken down.
2. **Stage 2 (Deep Scoring)** — runs only on tickers Stage 1 promotes. Pulls richer fundamental and technical data from your configured API keys and scores each ticker up to 86 points (43 fundamental + up to 43 technical). A ticker "passes" once it clears your threshold (default 55/86).

Progress is saved only when you export it as a JSON file to your device — there's no server, no account, and no background sync.

## Setup

- Open `index.html` (works as a static site — no build step, no server required).
- In **Settings**, add at least one free-tier API key (Finnhub, Twelve Data, FMP, Polygon, or Alpha Vantage) to enable Stage 2 deep scoring. Yahoo Finance needs no key and powers Stage 1 automatically.
- Optional: add paid Premium Data Source keys (Tiingo, EODHD, Alpaca, Intrinio, Nasdaq Data Link, Databento) if you have subscriptions — these are stored and testable but not yet wired into scoring.

## Installing as an app (PWA)

This repo includes a web manifest, service worker, and icon set, so it can be installed to a phone's home screen directly from the browser ("Add to Home Screen"), or packaged for the Google Play Store using a TWA tool such as [PWABuilder](https://www.pwabuilder.com/) or [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap).

## Disclaimer

Free-tier API data may be delayed, rate-limited, or occasionally unavailable. This tool does not place trades, does not provide personalized financial advice, and its scores should be treated as a starting point for your own research — not a recommendation.
