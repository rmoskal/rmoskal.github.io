module.exports = {
  title:`Learning Heroes`, 
  link:'https://bealearninghero.org/',
  when:'2015',
  stack:['<i class="fa-brands fa-docker"></i>', '<i class="fa-brands fa-php"></i>'],
  roles: ['principal', 'turn-around'],
  long:true,
  body: `
  An educational non-profit outsourced the development of a suite of applications/web sites. The organization and applications were thriving, but they suffered mightily from vendor lock-in.

  The dependencies for each application were quite complex and specified nowhere but on the developer workstations and the server deployments. My client couldn't work with responsive and less expensive resources and was being pummelled by truly exorbitant hosting fees. They were stuck!
  
  The suite was created in symfony2 and used compose to handle dependencies. However this didn’t account for all the operating system level dependencies, not to mention the complete python, ruby, and java environments the symfony toolchain requires. That's one crazy toolchain, btw!
  
  Putting on my detective hat, I identified the dependencies for each application and made them explicit through a series of docker and docker-compose files. A development environment, including the support database could be spun up by running a single script. We used docker and the docker-cloud to deploy to automatically deploy to digital ocean. 

  Hosting costs went from $10,000 to $400 per month! The organization is no longer chained to the original vendor and savings go to improvements. New developers can be on-boarded and be productive within hours.
  
    
  `
}