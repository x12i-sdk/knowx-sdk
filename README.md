# @x12i/knowx-sdk usage example

KnowX client. Upload content and read an org's knowledge without managing multipart sessions or cursors.

This consuming application demonstrates **ensure a knowledge library using an injected http fixture** using the published npm package, pinned to `0.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Upload content through the client without managing each multipart-session step.
- Read an organization's knowledge records through the supported client methods.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/knowx-sdk)
- [Implementation monorepo](https://github.com/x12i/opx-knowx-mono-repo)
- [Reviewed package source](https://github.com/x12i/opx-knowx-mono-repo/tree/81de1886ba2fca116bfe0e9686fd0af063ef1517/knowx-sdk)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Offline HTTP fixture

The example calls the actual published client. Its HTTP responses are explicit in-process fixtures, and no network request reaches a service. It demonstrates request construction, response consumption, and the assertions in the source. Running against a live service also requires its endpoint, credentials and supported server version.
