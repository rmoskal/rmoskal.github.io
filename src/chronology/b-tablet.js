module.exports = {
  title:`tablet hotels`, 
  link:'https://www.tablethotels.com/',
  when:'2019',
  stack:['B2C', 'elasticsearch'],
  roles: ['principal' ],
  body: `
Elasticsearch is the front door to this site's recommendation engine has been a full-text/auto-complete search across locations and hotel names, powered by ES 3.x. A migration to AWS was the perfect time to upgrade to a newer version of ES and to make improvements based on learnings from years of production use.

The upgrade was fairly straightforward, though both the ES mapping and the query syntax had changed considerably across 3 major versions. A good deal of the work was carried out at the python api level, including improvements to the imports from the operational data store.

On the other hand, we made significant improvements to to the auto-suggestion performance by taking advantage of the new autocomplete analyzer in 6.8, refactoring the existing queries, increasing the use of synonyms, and finally by introducing a new collection type for location searches.

Tuning ES searches is an iterative process. I provided tooling that allowed us to quickly compare different versions of queries/mappings to arrive at the best possible behavior. I'm looking forward to working together on further improvements as the sites property inventory will grow after their acquisition by Michelin.

  `
}