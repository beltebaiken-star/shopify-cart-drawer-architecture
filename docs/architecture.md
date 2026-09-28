# Architecture

```text
Product form / quick add
  -> AJAX Cart API
  -> cart state fetch
  -> normalized cart model
  -> drawer renderer
  -> quantity/remove/update actions
  -> error recovery
```

The implementation separates network operations from rendering so cart state remains predictable.
