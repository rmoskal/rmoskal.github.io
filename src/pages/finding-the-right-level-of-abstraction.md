---
title: finding the right level of abstraction
date: 2010-09-04 23:18:51
tags:
layout: post
---
I moved the Most Media web site to the latest version of Plone this week.  It seems like a good opportunity to reflect on where the industry and my practice have moved in the last three years.

When I last posted, I was very excited about Apache Wicket as the way to develop line of business  applications with a domain model, CRUD screens for maintaining the model, and in the most interesting cases, doing something else useful besides.

I still like Wicket.  It has, as its web site says "a small conceptual surface area." It reminds me of python in that   "_You try something it usually just works._" In many respects, though, Wicket seems to be at the wrong level of abstraction for the for the sorts of line of business applications described above.  If your team is spending any time at all writing code to produce listing, filtering, and sorting behavior, not to mention creating CRUD screens and the back end logic for these operations, **they are probably working at the wrong level of abstraction**.

This is why I continue to move  my clients away from relational databases whenever it makes sense to, and it seems to make sense to more and more. It's just harder and harder justify creating a bespoke database schema to support a content management system or line of business application when mega frameworks like Plone, SharePoint, Drupal or Joomla are available.

Nevertheless, sometimes you just have to write against a relational database.  So I looked for a way forward among the frameworks that generate scaffolding for CRUD operations.  I was productive, but uncomfortable with Rails. Ruby is swell, but there is a real lack of third party libraries as compared to Java. And so to the extent that an application might have to do anything besides maintain a domain model, the pickings might be slim. For example there are no more than two or three work flow engines available in Ruby.  Whereas you can hardly count the full featured ones in Java.  SOA is another area in which it is interesting to compare.

One way around this is with  JRuby, running rails inside the JVM, which exposes the wealth of Java apis to Rails applications. But no one has pushed me down that path yet.

Recently I did a small project using Grails and was quite pleased.  Grails uses groovy a dynamic language compatible with Java and is based on the proven technologies that I know and love well: Spring, Hibernate, SiteMesh, Maven, etc. It is configured via convention, but still produces all the artifacts I understand in case I need to override default behaviors.

Not only did Grails produce nice scaffolding code that was easy to customize to support some persnickety client demands, but it afforded several surprisingly nice features:

GORM which is a simplified wrapper on top of Hibernate, which let me define my domain objects and validation rules simply and elegantly:

<pre class=" ">  
class Wine {  
 static searchable=true;  

 Distributor distributor;  
 Importer importer;  
 Producer producer;  
 Region region;  
 Region subRegion;  
 String name;  
 String notes;  
 String internalNotes;  
 String vineyard;  
 Date dateCreated  
 Date lastUpdated  

 static constraints = {  
 name(blank:false)  
 vineyard(nullable:true,blank:false)  
 region()  
 subRegion(nullable:true)  
 producer()  
 importer()  
 distributor()  
 dateCreated()  
 lastUpdated()  
 internalNotes(nullable:true, maxSize:1500)  
 notes(nullable:true, maxSize:1500)  
 }  

 String toString(){  
 return name  
 }  
}</pre>

That little bit of code gives me a domain object, database persistance,  relations  with it's dependent objects, validation, and lucene full text indexing.

Groovy gives me closures, functions as first class objects, easy creation of DSLs, and meta-programming. Adding a method to the Java string class is as easy as:

<pre class=" ">String.metaClass.intro = {len ->  
    return StringUtils.abbreviate(delegate, len) ?: ''  
 }</pre>

I get all the power of the Java ecosystem without the fustiness and lack of expressivity of the core language (no more getters and setters, ever!).

I still have the problem I complained about a few years ago: the problems that arise from mixing client side and server side markup in the same artifact.  Whereas three years ago I thought "clients without code" was solution to this problem, whether using Wicket or something like GWT. I've come to realize that the problem was not having logic in the web page, but in the mixing of client and server side markup.   In fact, for my last few projects I've been pushing most of the presenation layer logic into the web browser, taking advantage of javascript and JSON. This style of development already has acronyms: SOFEA (Service-Oriented Front-End Architecture) and  SOUI (Service-Oriented User Interface).

In a future post I'll explain how this style of development has made my applications both simpler, more powerful, and even more flexible.  Hopefully it won't take me three years to do.
