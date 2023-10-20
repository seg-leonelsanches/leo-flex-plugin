# Leo's Flex Plugin

This is a plugin I developed to learn Flex, and how we can easily integrate Flex with Segment.

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out the [Flex documentation](https://www.twilio.com/docs/flex).

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). We support Node >= 10.12 (and recommend the _even_ versions of Node), up to version 16 (Node 18 is not supported). Afterwards, install the dependencies by running `npm install`:

```bash
cd 

# If you use npm
npm install
```

For some reason, Yarn package resolution adds something in the plugin that breaks the UI. 

Next, please install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) by running:

```bash
brew tap twilio/brew && brew install twilio
```

Finally, install the [Flex Plugin extension](https://github.com/twilio-labs/plugin-flex/tree/v1-beta) for the Twilio CLI:

```bash
twilio plugins:install @twilio-labs/plugin-flex
```

## Development

To see it working locally, use the command:

```
twilio flex:plugins:start
```

Run `twilio flex:plugins --help` to see all the commands we currently support. For further details on Flex Plugins refer to our documentation on the [Twilio Docs](https://www.twilio.com/docs/flex/developer/plugins/cli) page.

### Updating dependencies

This plugin relies on React 17 for now. On March 29th 2023, it's the most recent version that Flex supports.

## Deployment

Updating the plugin command (deploy):

```
twilio flex:plugins:deploy --major --changelog "My modification" --description "Leo's Plugin on Flex"
```

Releasing the plugin:

```
twilio flex:plugins:release --name "Plugin Release" --description "Enabling Leo's Plugin" --plugin leo-flex-plugin@1.0.0 --profile=ProdProfileName
```

## Troubleshooting

### `Error: error:0308010C:digital envelope routines::unsupported` after `twilio flex:plugins:start` command

This is a known issue with Node 18. This plugin was written with Node 16, and it works normally with Node 18, with the OpenSSL legacy provider. To fix it, run the following command:

```sh
export NODE_OPTIONS=--openssl-legacy-provider
```

Or, in Windows:

```powershell
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

Or:

```
set NODE_OPTIONS=--openssl-legacy-provider
```