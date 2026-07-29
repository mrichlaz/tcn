# TCN image asset management

All production-facing image links are registered in `asset-library.js`.

- Use `data-asset="assetKey"` on an `<img>` element.
- Use `data-asset-bg="assetKey"` on a background-image card; the stylesheet must use `var(--asset-image)`.
- Product category keys are set in `catalogue-data.js`; project-detail keys are set in `project-page.js`.
- Keep all supplied files in `assets/products/`, `assets/clients/`, or `assets/vendors/`, and record origin/approval in the matching `manifest.json`.

To replace an image, update only the `src` and `alt` for its key in `asset-library.js`. This preserves all crops, overlays and responsive styles.

## Vendor brand marks

Supplier cards are defined in `catalogue-data.js` and each has a `logoKey` registered in `asset-library.js`. They render a controlled typographic wordmark until an approved vendor logo is available. To publish a vendor logo, add the approved local SVG or PNG in `assets/vendors/`, record it in `assets/vendors/manifest.json`, then set the matching key’s `src` in `asset-library.js`.
