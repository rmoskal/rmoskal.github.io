module.exports = {
  title:`tablet hotels`, 
  link:'https://www.tablethotels.com/',
  when:'2019',
  stack:['B2C',  
  '<img alt="elasticsearch" title="elasticsearch" style="margin-Top:-3px" src="/images/elastic-elasticsearch.svg" width="16px"/>', 
  '<img alt="python" title="python" style="margin-Top:-3px" src="/images/python.svg" width="16px"/>'],
  roles: ['principal' ],
  long:true,
  body: `
Elasticsearch constitutes the primary funnel for this boutique hotel site. I upgraded from version 3 to 6.8 and made much needed improvements after teasing out lessons learned from years of production use.

The upgrade was fairly straightforward, though both the ES mapping and the query syntax had changed considerably across 3 major versions. A good deal of the work was carried out at the python client level, including enhancements to the imports from the operational data store.

We made significant improvements to to the auto-suggestion performance by taking advantage of the new autocomplete analyzer, refactoring the existing queries, and increasing the use of synonyms.

Tuning ES searches is an iterative process. I provided my client with some tooling that allowed us to quickly compare different versions of queries/mappings to arrive at the best possible behavior.

  `
}