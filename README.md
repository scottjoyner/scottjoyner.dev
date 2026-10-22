# scottjoyner.dev — legacy website experiments

Public repository for experiments associated with a personal website, **not a verified production deployment of the current site**.

## Tracked files

- `info.html` — HTML page that requests `https://ipinfo.io/json` from a visitor's browser and displays IP-related location/provider details.
- `index.js` — React/Apollo GraphQL traffic-log mutation experiment.
- `Untitled` — miscellaneous tracked file; inspect before reuse.
- `README.md` — project entry point.

## Important implementation limits

The current `index.js` sets the GraphQL HTTP-link URI to the literal string `"undefined"`; **it is not a configured production GraphQL endpoint**. There is no tracked root `package.json`, pinned dependencies, or verified build/test command.

Opening `info.html` can disclose the visitor's IP address to a third-party geolocation service. Do not deploy or embed that page without a clear privacy disclosure, appropriate consent/justification, and a review of the provider's practices. Do not persist raw IP geolocation into public analytics or LLM traces.

## To make this deployable

Choose and document a maintained frontend stack, a non-secret API base URL, data-retention requirements, disabled-by-default analytics, access controls and a reproducible build. Keep all API credentials out of browser JavaScript.

**Status:** source-level review only; no browser requests, tracking calls, builds, or deployment performed.
