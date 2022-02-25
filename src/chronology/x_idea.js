module.exports = {
  title:`idea`, 
  link:'https://aboutus.com/Zivaguide.com',
  when:'2006',
  stack:['B2B', '<i title="java" class="fa-brands fa-java"></i>'],
  roles: ['principal'],
  body: `
  Digital technologies have changed the balance of power in the music business. IDEA helps independent artists and labels capitalize on this by distributing their own music.

  Integrating their application with the various digital services wasn’t so easy, requiring substantial development and testing effort to provision a new service. My charge was to create a system by which new services could be brought on line with minimal effort.
  
  Publishing music to different services like iTunes and Napster involves similar steps, but with a fair amount of variation. Files must be encoded (but in different formats) and transferred (but using different protocols). Metadata must be transferred along with the music files (but each service requires a differently formatted XML file).
  
  I encapsulated this variation by creating a domain specific language for e-music publishing. The framework handles common tasks such as error handling, workflow and provides primitive operations for file encoding, art generation, file transfer, and metadata creation. Most variability is driven parametrically, via Spring configuration files, rather than programatically, eliminating most of the code that would otherwise need to be written (and tested) to integrate with each service. Metadata is generated via an XML pipeline which includes XLST processing.
  
  Provisioning a new service is a matter of stringing together a set of already written and tested tasks via a Spring configuration file. A new service can often be brought online in less than a day
  
  
    
  `
}