import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloHandler = new lambda.Function(this, 'HelloLambda', {
        runtime: lambda.Runtime.PROVIDED_AL2023, // Looks like GO_1_X is deprecated
        handler: 'handler',
        code: lambda.Code.fromAsset('../src/main.zip'),
    });
  
    const api = new apigateway.RestApi(this, 'HelloApiGateway', {
        restApiName: 'Hello World',
    });
  
    const lambdaIntegration = new apigateway.LambdaIntegration(helloHandler);

    api.root.addMethod('GET', lambdaIntegration);
  }
}
