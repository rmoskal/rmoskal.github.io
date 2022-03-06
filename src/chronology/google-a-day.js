module.exports = {
  title:`A Google a Day`, 
  link:'http://www.agoogleaday.com/',
  when:'2012',
  long:true,
  stack:['B2C', 'GCLOUD', '<i class="fa-brands fa-python"></i>' ],
  roles: ['dev-partner'],
  body: `
  My development partner was presented with the opportunity to take over a plum Internet property, gamify it and to move it over to google +. The only hard requirement wast hat it had to be built using the google app engine (GAE) . My partner had gaming, design and development chops, but no experience with the google app engine, nor with python or java, the languages supported on the GAE at the time.
  I proposed a development style in which the application would be built as a single page javascript application communicating with the server via a REST API. This happens to be my favorite way of developing web applications, maximizing productivity and demarcating a good separation of concerns. For my partner, it meant working with the tools they were most comfortable and expert with. The only change to their process was to have to run a shell script that uploaded the application to a local copy of the google app engine. A virtual python environment we built made this a snap.
  I built the server side of the application using python. On the app engine, it's all about minimizing the resources used. The super lightweight flask micro-framework provided just the features we needed. Our API put most the business logic in the javascript client, allowing for the game rules to evolve without needing changes to the back-end.
  There were a few challenges and reversals. It turned the social network didn't support client side sessions so we had to re-architect the initial version of the application. My partner had to learn how to architect a more complex javascript application than they were used to, but soon settled on an event publication and subscription system that allowed them to proceed quickly.
  This project marks the beginning of my on-going collaborations with Dark Roast Media.

  
  `
}