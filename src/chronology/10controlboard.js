module.exports = {
  title:`controlbaord.app`, 
  link:'https://www.controlboard.app/',
  when:'2020 – <b>Present</b> ',
  stack:['B2B', 'SAAS', 'AWS'],
  roles: [ 'founder', 'leader'],
  body: `
This established provider of construction logistics software had to replace their windows based scheduling and resource management software with a cloud based software as a service offering.We built the application using the usual suspects, react on the front speaking to a node server. The complex interconnected domain model was uniquely suited to being exposed through graphql. A super-mature scheduling and resource management engine is written in c#, was ported over to .net core for deployment in linux containers. The node server translates the graphql to a custom API understood by the logistics engine.

The entire thing runs on AWS, with the core running on AWS fargate, the AWS serverless container platform. Application CRUD screens are driven from graphql and JSON Schema auto generated from the c# domain entities on every release deployment. The same process generates test data for automated unit tests.
Aside from the technical challenges the project appealed because everybody involved coded. We got very good UX results without needing a dedicated designer by using the Google material ui design system. I took the lead on the over-all architecture, ci-cd, and coded much of the back and front ends.

We've released an initial version that meets the needs of the existing customer base, while providing features that were not possible with the desktop version. We are actively migrating existing users into the cloud and selling to this original market. Now we're testing features that in the hope of unlocking new markets and adding tooling that automates on-boarding new customers.
  `
}