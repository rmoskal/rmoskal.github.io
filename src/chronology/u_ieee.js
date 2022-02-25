module.exports = {
  title:`ieee spectrum`, 
  link:'https://spectrum.ieee.org/',
  when:'2006 – 2008',
  stack:['B2C', '<i title="java" class="fa-brands fa-java"></i>'],
  roles: ['dev-partner', 'leader'],
  body: `

  The original development team that created the on-line version of the IEEE magazine jumped ship leaving our partner in the lurch, unable to service an important client.

Sometimes the problem with java development is the abundance of riches, especially in the hands of an inexperienced team. In reviewing the technology behind the magazine I found a snake pit: four web frameworks: Tapestry, Webwork, Vignette, and a home grown front controller; two different templating engines: Velocity and FreeMarker.

It was all too much. Plus, the original application dated from 2004, forcing many architectural choices that seem wrongheaded in 2008. Many basic functions were built from scratch (and so hard to evolve), whereas today we could turn to any number of open source frameworks to accomplish more in a sustainable manner.

My partners were surprised to hear that my answer for adding new features was always “let's eliminate some code”. The home-grown blogging system was the first to go. We replaced it with a hosted version of Movable Type integrated with the main application via RSS and JSON. We removed the home-grown caching system replacing it with Akamai, eliminating pernicious errors that would crop up under heavy loads.

I successfully the mastered a complex technology stack to allow our partner to service an valuable clients needs and to expand the engagement.

As the code base was brought under control, new features can be added more and more quickly and with less and less risk. 30% of the code has been removed since we began.

    
  `
}