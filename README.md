# aws-severless-express-app
AWS serverless express app with EJS Template engine basic structure.


1- You need to install/Configure serverless if you are not done already

    npm install -g serverless
    
    serverless config credentials --provider aws --key *AWS_KEY* --secret *AWS_SECRET_KEY* #you can get key and secret key from AWS IAM Console.

2- clone this repo

3- To install node modules

      npm install

4- To deploy serverless app(by default it will set DEV Environment)

      serverless deploy 

OR

4- To deploy the app on production

      serverless deploy --production



