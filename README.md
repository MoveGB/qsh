# qsh
Query-Select-Hide Cloudflare app

## Introduction
`qsh` (pronounced 'quash') is a Cloudflare app that enables selective hiding of page content in response to
a boolean query string parameter. It may be injected into any page that is proxied by Cloudflare.

When navigating to a supporting page, a small piece of JavaScript checks for the presence of a query string parameter.
The parameter name is configurable, and defaults to `quash-all-the-things`.

If the parameter's value is `1` (i.e. the URL looks like `www.cloudflare-proxied-site.com/?quash-all-the-things=1`),
the app will hide any elements that match the user-configurable list of CSS selectors.
