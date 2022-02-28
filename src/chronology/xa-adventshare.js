module.exports = {
  title:`adventshare`, 
  link:'',
  when:'2003 – 2004',
  stack:['B2C', '<i class="fa-brands fa-java"></i>'],
  roles: [ 'founder'],
  body: `
  Like instagram, but for extreme sports practitioners, and 7 years too early (no really!).

  It needed to be bullet proof and able to support potentially thousands of simultaneous users. It needed a flexible architecture that could evolve in response to new opportunities.
  
  I built it using the J2EE application stack, putting into play the lessons learned over five years of server side java development.
  
  I selected a light-weight version of the J2EE, eschewing the use of entity beans entirely. Instead the Hibernate framework was used for object-relational mapping. Much of the dynamic content is generated using XSL transformations, but only when the underlying data changed. Serving “static” content in this way garnered huge performance increases.
  
  Application components were loosely connected using the java messaging service. This application service bus provided a great deal of flexibility in adding new features, and also in provisioning and deployment. Finally, a test driven development methodology and the appropriate use of design patterns ensured even deep changes could be made safely and quickly.
  
  The application was linked to Paypal for e-commerce functionality, with photo printing services provided by Club Photo. Integration was using the REST protocol.
  

    
  `
}