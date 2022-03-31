module.exports = {
  title:`cOOL`, 
  link:'https://cool.culturalheritage.org/',
  when:'2019 – <b>Present</b>',
  stack:['internal-tools',  
  '<img alt="elasticsearch" title="elasticsearch" style="margin-Top:-3px" src="/images/elastic-elasticsearch.svg" width="16px"/>', 
  '<img alt="aws" title="AWS" style="margin-Top:-3px" src="/images/aws.svg" width="16px"/>'],
  roles: ['principal' ],
  long:true,
  body: `
Created a cms and publishing system for the "long tail" content that is the institutional memory for Foundation for Advancement in Conservation (FAIC). cOOL is an archive of some quarter of a million documents comprised of web sites, journals, and email lists dating back to the 1980s. It's an authoritative and invaluable resource for museum conservators from around the world.

This is the sort of thing worth engaging me for and is representative of how I work these days, using free and open source software and the cloud to solve a problem simply and elegantly; along the way, giving back, improving the code I used: <a href="https://github.com/pgherveou/gulp-awspublish" target="_blank">gulp-awspublish</a> and <a href="https://github.com/etylsarin/gulp-ssi"  target="_blank">gulp-ssi</a>.

The publishing system is based on aws hosted git, a CI/CD pipeline in CloudBuild,  with CloudFront and lambda edge functions serving contents from an S3 bucket. The FAIC can more easily manage additions to the site and can operate on the corpus en-masse to better serve their community.
  `
}