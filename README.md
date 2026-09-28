# Shopify Custom Cart & Cart Drawer

> Upwork portfolio demo / sanitized technical case study.

## Client problem

A front-end implementation pattern for fast, reliable Shopify cart drawers with quantity updates, state sync, upsell hooks, and mobile-safe UX.

## What this repository demonstrates

- AJAX add/update/remove cart actions
- Cart state synchronization
- Optimistic UI with error recovery
- Responsive cart drawer UX
- Extension points for upsell/free-shipping logic

## Tech stack

Liquid, JavaScript, AJAX Cart API, responsive UI

## Architecture

This repository is intentionally structured as a public portfolio implementation rather than a copy of private client code. Production credentials, customer data, private URLs and proprietary business logic are excluded.

```text
Input / Store / Platform Event
        ↓
Validation & Normalization
        ↓
Business / Tracking / Integration Logic
        ↓
External API or Storefront
        ↓
QA, Logs, Reconciliation
```

## What an Upwork client can verify here

- Clear separation between configuration, business logic and external API calls
- Error handling and production-readiness thinking
- Practical ecommerce use cases rather than toy examples
- Documentation that explains both implementation and validation
- Security-conscious handling of credentials and customer data

## Suggested demo contents

- `src/` — sanitized implementation examples
- `examples/` — sample payloads using synthetic data
- `tests/` — validation / QA examples
- `docs/architecture.md` — architecture and flow
- `docs/qa-checklist.md` — production verification steps
- `screenshots/` — portfolio diagrams and UI/results images

## Source portfolio reference

Internal source project: **05 - Shopify Custom Cart and Cart Drawer Development**

Only reusable patterns and sanitized demo material should be published publicly.

## Hiring fit

Good match for Upwork projects involving **Shopify Custom Cart & Cart Drawer**, Shopify troubleshooting, ecommerce integrations, tracking reliability, API automation, or production-readiness reviews.