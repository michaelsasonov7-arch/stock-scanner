# Stock Scanner Pro

Two-stage technical/fundamental scanner for US-listed stocks across the S&P 500, S&P MidCap 400, Nasdaq 100, Dow Jones 30, and (best-effort) Russell 1000.

- **Stage 1** — cheap Yahoo/Stooq screen for a pullback setup (Fibonacci zone, RSI reversal band, above/near MA200).
- **Stage 2** — deep 91-point fundamental + technical scoring using free and/or paid market-data APIs (Finnhub, Twelve Data, FMP, Polygon, Alpha Vantage), with graceful fallback to free sources if no API keys are configured.
- Checkpoint/resume: export/import scan progress as JSON, safe to close the tab mid-scan and resume later.
- Runs entirely client-side — no backend, no server, no data collection. All API keys are stored only in your browser's `localStorage`.

## Usage

Open `index.html` directly, or serve via GitHub Pages. Optionally add your own API keys (Finnhub / Twelve Data / FMP / Polygon / Alpha Vantage free tiers) in the Settings tab for full Stage 2 scoring — the scanner also works with zero keys using free fallbacks only, at reduced data quality.

## Disclaimer

Educational tool only. Not financial advice. Scoring reflects a specific technical/fundamental pullback thesis and does not predict future performance.
