# Team Tracker for Alexa

## Lambda

* Login to to your Deeson AWS account and create a a new Lambda function. https://eu-west-1.console.aws.amazon.com/lambda/home?region=eu-west-1#/create/select-blueprint?firstrun=true

* Use akexa-skill-kit-sdk-factskill as a blueprint

* Use Alexa Skills Kit as a trigger - Note that Not all regions offer this. Ireland Does (As does Virginia)

* Provide a name and a description and node.js as the runtime.

* Use upload a zip as the input method and upload a zip of the Github archive after running npm install - include the node_modules directory. TODO is there a better way?

* Add your SLACK_API_TOKEN and a SLACK_CHANNEL to use as the search point in slack as environment variables

## Alexa Skill

* Sign in to developer.amazon.com and click alexa, then alexa skills kit > getting started

* Click add new skill.

* Give it a name. Don't use Audio player. Click next.

* Add the intent schema form the helpers directory of the repository.

* Add a custom slot for Deeson Employees. Grab a list of Deeson employees and paste it in the values list.

* Add some sample utterances from the utterances in the helper directory. Click next

* Add the details of your Lambda instance

* Don't do account linking. Click Next.

* In the service simulator type "Where is Tim Deeson? Verify that you get a lambda response saying where Tim Deeson is."

@TODO add more detail about the Alexa app and testing with the Echo. 
