module.exports = {
  title:`bluesky`, 
  link:'https://disney.fandom.com/wiki/Blue_Sky_Studios',
  when:'2011 - 2012',
  stack:['internal-tools', 'bpm', '<i class="fa-brands fa-java"></i>'],
  roles: ['principal', 'leader'],
  body: `
  A prominent digital movie studio needed to improve governance over and the transparency of their film production process. In a dynamic creative environment, it was difficult for them to know things like: “How close are we to finishing this movie?”, “How efficient are we on this movie as opposed to the last?”, or even “Is this scene done?”.

  Upon review, my unambiguous recommendation was for the studio to license the market leading studio management software. Top management disagreed and wanted to pursue a custom system. The studio had a strong tradition of in-house engineering; their process was unique; and they hoped to, perhaps, bring the software to market.
  
  I counseled that they would have to devote substantial resources to the project to match even a subset of the commercial product's features, and that they were committing themselves to a long-term development effort to evolve the product to keep up with the needs of the internal users, let alone bringing a product to market.
  
  I proposed, but management disposed. The project would be managed by a studio executive. I would help them put together an internal team and handle key portions of the architecture and the development effort.
  
  We decided to leap-frog the market leading project management software by building ours on top of a true BPM engine and exposing its services to as many clients as possible with a RESTFUL API. This was necessary because the client for such a system could as well be a python or a Maya animation script as a web page.
  
  Working closely with studio leaders, I modeled their process with a two level work flow. One at a high level to track assets (and aggregates of assets) through the big steps in production process. And another at a low level to track the more free-form nature of the work as actually done. There could be many alternate high level work flows (controlled by an external business rules engine). The system would emit and store vast quantities of business activity data to be presented by a Business Activity Monitoring System (BAM). We would display key performance indicators (KPIs) for the current film and have a wealth of historical data to analyze across films.
  
  Internal developers produced a flex/java based asset browser. I wrote a wrapper around the JBOSS JBPM work flow engine incorporating studio specific use cases, BAM instrumentation, and the two tiered system described above. I exposed this to clients via JAX-RS REST Services (built with JBOSS ReastEasy). When development of JBPM at JBOSS ceased, we first contributed fixes to the project and then quickly rewrote the services using Activiti BPMN.
  
  The project foundered because of lack of focus by the studio and secondarily for lack of resources.
  
  After a year and a half of effort the studio canceled the project licensed the market leading project management software. They are happy with the results
    
  `
}