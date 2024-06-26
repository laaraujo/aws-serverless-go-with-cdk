[![Deployment](https://github.com/laaraujo/aws-serverless-go-with-cdk/actions/workflows/deployment.yml/badge.svg?branch=main)](https://github.com/laaraujo/aws-serverless-go-with-cdk/actions/workflows/deployment.yml)

# Hello World - Go Serverless endpoint in AWS

Golang `Hello, World!` app deployed with AWS Lambda function behind AWS API Gateway endpoint via Github Actions.

## Table of contents
* [Pre-requisites](#pre-requisites)
* [Local setup](#local-setup)
* [Manual deployment](#manual-deployment)
* [Cleanup](#cleanup)
* [Possible improvements](#possible-improvements-not-covered-in-this-repo)
* [License](#license)

## Pre-requisites

* [Node.js](https://nodejs.org/en) (version 20 or higher)
* [Go](https://go.dev/) (version 1.20 or higher)
* AWS CDK CLI [installed and configured](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

## Local setup

Install go package and cdk npm dependencies
```sh
$ make setup
```

To see all available commands go ahead and run
```sh
$ make help
```

```log
setup       : Configure local environment
build       : Build Go package
zip         : Compress Go package for deployment
cdk-deploy  : Deploy latest version through CDK
cleanup     : Clean up cloud environment
```

## Manual deployment

Build the go source code, compress it and deploy it 
```sh
$ make cdk-deploy
```
![alt text](./docs/deploy.png)

* Take note of your new endpoint in the CDK Outputs section

![alt text](./docs/result.png)

## Cleanup
```sh
$ make cdk-cleanup
```

![alt text](./docs/cleanup.png)


## Possible improvements **not** covered in this repo
* Pre-commit hooks for Go and Typescript code (linting, formatting, etc)
* Automated testing for Go and Typescript code
* Monitoring / Healthchecks
* Multi-environment setup
* Running CD pipeline **only** when relevant [`cdk/`](./cdk/) or [`src/`](./src/) contents change


## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
