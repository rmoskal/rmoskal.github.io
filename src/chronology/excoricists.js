module.exports = {
  title:`Exorcists vs Demons`, 
  link:'https://evd-sandbox.herokuapp.com/#/battle-school',
  when:'2012 – 2014',
  stack:['B2C', 'game!', 
  '<img alt="javascript" title="javascript" style="margin-Top:-3px" src="/images/js.svg" width="16px"/>'
],
  roles: ['principal', 'leader', 'founder'],
  long:true,
  body: `
  Leading the build of this browser based RPG is part of my ongoing collaboration with DarkRoast Media.

A big challenge on this project was growing and managing a development team for a non-traditionally funded project (everyone took a cut in rate in exchange for points on the back end). Another was keeping the codebase responsive to changes in the creative content and game rules.

Using javascript up and down the entire stack reduced conceptual surface area and made new developers productive right away. Significant amounts of code of was shared between the client and server, largely doing away with the distinction between front and back end developers. The code is supported by nearly a thousand unit tests, allowing us to to progress quickly and safely, even with a revolving cast of developers. Finally, Angular kept the team disciplined on the front end (where spaghetti code is all too frequently still the norm). Angular is an opinionated framework. It enforces certain coding practices and patterns that prevent folks from going astray.

We kept up with changing creative, and game mechanics, by driving business rules from the contents of google spreadsheets which could be loaded into our mongo database at will. Our creative team could experiment with game parameters and see the effects in the game world instantly.

We used the isogenic HTML 5 game engine to build our levels and integrated it with Angular.

You can still play with the battle school: https://evd-sandbox.herokuapp.com/#/battle-school

  
  `
}