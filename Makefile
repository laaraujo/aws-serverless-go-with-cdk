cdk_dir = cdk
app_dir = src

export GOOS=linux
export CGO_ENABLED=0

help: 
	@echo 'setup       : Configure local environment'
	@echo 'build       : Build Go package'
	@echo 'zip         : Compress Go package for deployment'
	@echo 'cdk-deploy  : Deploy latest version through CDK'
	@echo 'cleanup     : Clean up cloud environment'

setup:
	cd $(cdk_dir); npm install
	cd $(app_dir); go mod download

build:
	go build -C $(app_dir)/ -tags lambda.norpc -o bootstrap main.go

zip: build
	cd $(app_dir); zip main.zip bootstrap

cdk-deploy: zip
	cd $(cdk_dir); cdk deploy

cdk-cleanup:
	cd $(cdk_dir); cdk destroy
