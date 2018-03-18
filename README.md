# ack

A simple [AWS Lambda](https://aws.amazon.com/lambda/) function that normalizes and sends an incoming payload to an [SNS](https://aws.amazon.com/sns/) topic, while acknowledging back to the sender ASAP.

This is designed to work with [API Gateway](https://aws.amazon.com/api-gateway/) (with a [Lambda Proxy Integration](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html)), returning a 200 OK response as soon as possible to satisfy impatient webhook callers (such as Slack's [Slash Commands](https://api.slack.com/slash-commands)).

**THIS FUNCTION IS UNDER CONSTRUCTION AND IS NOT READY FOR USE YET.**

## Usage

Coming soon...

## Development & Testing

Coming soon...

## License

[MIT](LICENSE)
