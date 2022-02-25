---
title: clients without code
date: 2007-12-26 22:51:22
tags: 
    - java
    - wicket
layout: post
---
How many times has someone slaved over a web page with complex server side code embedded in it.  This page is passed over to a front end engineer. Next day you update your project from the repository and suddenly all the server side code is totally broken.

How many times does a simple change in presentation require getting a hold of the server side engineer to make the change even though it's trivial.

The problem is our primary artifact, the web page, consists of markup/code from three domains.  The html/css markup that governs presentation, javascript code that can govern both client side interaction and server communication, and server side markup/code like jsp/asp/rhtml/velocity/freemarker.

Often this mix results in the most modern and up to date spaghetti code where it is difficult to determine what is happening and where (especially as an app evolves over time). Plus you have pages that won't render outside of a complex test environment, resulting in some of your team members flying blind when making changes.

After some initial resistance, a front end guy I work with recently  picked up [velocity templating](http://velocity.apache.org/ "external-link").  But I think this was an exceptional situation.  To expect that he also pick up enough  jsp, struts, tapestry,rhtml, etc., etc, etc. to render a model or at least not to &%@#-up my server side code, is neither reasonable or desirable (though it would make my life infinitely better on legacy projects). Carlos, are you listening?

To counter these tendencies, I've been moving towards a style of web development which aims at a clean separation of concerns between tiers/technologies/ and project roles. I call it "**No code at all in the client!**"

In this approach, the web tier contains nothing but html and css. The Wicket framework is a good example of this way of doing things.  Here is the markup for a complex ajax page with lots of linked form elements:

~~~ xml
<?xml version="1.0" encoding="UTF-8"?>  
<html xmlns="http://www.w3.org/1999/xhtml" >  
<wicket:panel>  
<p>Grant Access</p>  
<form wicket:id="accessForm" >  
Select Department;<select wicket:id="selectedDepartment"></select><br/>  
Select name:<select wicket:id="selectedUser"></select><br/>  
<input type="submit" value="Add" wicket:id="ajax-button"/>  
</form>  
<p> The following accounts have been granted access to work on your behalf for your projects:</p>  
<form wicket:id="grantedForm" >  
<select wicket:id="grantedUsers"/>  
<input type="submit" value="Remove" wicket:id="ajax-button"/>  
</form>  
<p>The following users have requested access to your account's projects, pending your approval.   
Select whether to approve each account.</p>  
<form wicket:id="requestedForm" >  
<select wicket:id="requestedUsers"/>  
<input type="submit" value="Approve Accces" wicket:id="approve"/>  
<input type="submit" value="Deny Accces" wicket:id="deny"/>  
</form>  
</wicket:panel>  
</html>
~~~
This page will render properly in any browser. Css styles  be applied to it, and additional javascript functionality added,  without any risk of breaking the server side interaction. The complete form functionality is specified server side, taken care of in java.  Here's an example of adding a dropdown list to a form that updates the contents of another dropdown via AJAX when its selection changes:

<pre>departmentList.add(new AjaxFormComponentUpdatingBehavior("onchange") {  

     protected void aonUpdate(AjaxRequestTarget target) {                    

         target.addComponent(UIHelpers.resetDropDown(userList,   
                userManager.fetchForDepartment ( (Department)departmentList.getModel().getObject())));                 
      }  

                   });</pre>

A more radical version of this approach is to generate all the output server side and display it on the client via embedded script tags (like in this example from the R2J feed from CNET:

<pre>[<script src='http://i.i.com.com/cnwk.1d/html/export/r2j/News-19.html'></script>](http://i.i.com.com/cnwk.1d/html/export/r2j/News-19.html "external-link")</pre>

If you follow the link, you'll notice that it returns a javascript snippet that renders an rss feed in html. Here's a part of it:

<pre id="line1">document.write('<<span>div</span> <span>id</span>=<span>"r2j-feed"</span>><<span>div</span> <span>id</span>=<span>"r2j-title"</span>>  
<<span>a</span> <span>href</span>=<span>"http://www.news.com/&tag=r2j"</span>>CNET News.com</<span>a</span>></<span>div</span>>  
<<span>div</span> <span>id</span>=<span>"r2j-tdesc"</span>>Tech news and business reports by CNET News.com.   
Focused on information technology, core topics include computers, hardware,   
software, networking, and Internet media.</<span>div</span>>  
<<span>div</span> <span>id</span>=<span>"r2j-head"</span>>...');</pre>

The HTML developer can style the emitted content and there's almost no danger at all of breaking the  client-server interaction.  The web page can be deployed on any web server (no need for Tomcat, Rails, or whatever) and it can get its dynamic data from any other server on the internet without the need to worry about cross-site scripting issues. Richer interactivity can be gotten by passing JSON messages back and forth with javascript.  I've been increasingly using this style of development for clients with minimal IT expertise and infrastructure. If   A full featured featured web app can be deployed on a $10 a month Go-Daddy account with the back end provided by one of my hosted servers or one in the EC2 cloud.
