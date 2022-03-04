module.exports = {
  title:`tablet hotels`, 
  link:'https://www.tablethotels.com/',
  when:'2019',
  stack:['B2C', 'elasticsearch', '<i class="fa-brands fa-python"></i>'],
  roles: ['principal' ],
  body: `
Elasticsearch is the front door to this site's hotel recommendation engine. I upgraded it from version 3 to 7 and made much needed improvments to the search behavior based on lessons learned from years of production use.

The upgrade was fairly straightforward, though both the ES mapping and the query syntax had changed considerably across 4 major versions. A good deal of the work was carried out at the python client level, including improvements to the imports from the operational data store.

We made significant improvements to to the auto-suggestion performance by taking advantage of the new autocomplete analyzer, refactoring the existing queries, and increasing the use of synonyms.

Tuning ES searches is an iterative process. I provided tooling that allowed us to quickly compare different versions of queries/mappings to arrive at the best possible behavior.

  `
}