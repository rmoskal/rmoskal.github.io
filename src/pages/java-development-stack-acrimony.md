---
title: java development stack acrimony
date: 2006-08-03
tags: java
layout: post
---
The buzz has it that Java is old hat for web development, that'll it'll soon be eclipsed by LAMP stack or more likely Ruby on Rails. Yet for the kind of applications I'm often called on to deliver, something on which a pure-play internet start-up might run its business, I find myself turning to Java more and more.

Maybe the problem is the embarrassment of riches.  You can choose between a half  dozen open source and proprietary frameworks for most everything a typical application needs to do: object relational mapping, creating web pages, consuming web services, templating.  There's so much code out there that if you're writing a lot of your own, you're probably doing something wrong.  But it certainly makes it difficult to come up with an acronym.  In this post I'm going to describe a Java development stack that I think as productive as anything  out there.  As for an acronym, I'll probably proppose a algorithm for constructing them, but will leave the any serious acronym development work as an exercise the to the reader.

Spring and Hibernate have become truly indispensable to me in my development practice, enabling me to deliver ever more significant applications faster and with less and less effort. It seems like I'm in touch with the zeitgeist on this. I see scores of web-sites, blogs, and books touting "better, faster, lighter" Java.  I even use them for my .net projects and there's more and more interest in spring and hibernate within that community as well.

### Spring

At first I was skeptical about Spring. Inversion of control, composition, and declarative programming  are things every competent developer eventually discovers as they enable you to write easily testable and extensible systems with a minimum of fuss. I guess I was jealous of my secret sauce (you can read about some of my reservations on the [spring.net discussion list](http://forum.springframework.net/showthread.php?t=130). However, in the last year I've been compelled by the excellent Hibernate and JDBC templates, easy to use annotation based transaction support, aspect oriented programming features, and now the ability to do asynchronous messaging. I can scarcely imagine creating a java application without it.

### Hibernate

When circumstances allow,  I'll choose Hibernate for object relational mapping.  Hibernate just does its job well, especially with release 3  and the ability to directly annotate domain classes instead of creating xml mapping files. I needed little prompting to give up both entity beans and  my home-grown persistence layer.  Of course where there's no need to back a significant domain model with a relational database, Hibernate drops out of the equation as do any of the other java mapping tools I could have picked.  Still, applications are so commonly backed by a database that an ORM component has to be considered as a core part of any java development stack. I think Hibernate has reached a tipping point in terms of popularity, to where it's the de facto standard for java ORM; much in the same was as Struts has been the standard for the web tier.

### ActiveMQ

Most significant applications can benefit from a dose of asynchronicity. Nothing makes separation of concerns easier to implement on the back end. In addition to ensuring a reliable connection to external systems, JMS functions as an application service bus which, combined with the sort of [workflows you can create with Spring](http://www.javaworld.com/javaworld/jw-04-2005/jw-0411-spring.html), gives you the hooks you need to easily evolve an application over time.

There are many propprietary JMS implementations, but ActiveMQ is fast, free and supports clustering, peer networks, discovery, TCP, SSL, multicast, persistence, and XA transactions. It also integrates with scripting languages and crosses the .net divide via Open Wire.

### Tomcat

Until recently I'd almost always recommend a full-blown J2EE server to my clients for two reasons.  None of the open source JMS implementations seemed truly ready for prime time, so you'd use one that came with a proprietary server like WebSphere, WebLogic, or Oracle. Or you'd use JBoss.  Plus it always seemed to me that message driven beans seemed like the most elegant wrapper around JMS (and the only part of the J2EE spec that seemed worth holding onto for my purposes).  With the maturation of ActiveMQ and Spring 2.0 providing a nice wrapper around JMS we can eliminate the J2EE container for the vast majority of applications.

Why not use Tomcat? It's ubiquitous and free and perfornance is very good in the latest versions.  If you don't like Tomcat, try Jetty.

### Wicket?

This brings me to a crucial point. I primarily create web apps, and if there's' one thing that's been horribly broken in the Java space, it's the web tier. I've dealt with the situation two ways. When I can, I run away from it and concentrate on server side coding where java seems to give me super powers.  Still, as often as not, I'll  inherit Struts application whose owners seem surprised when the only answer I can give them to an interminably long list of new features is "You can't get there from here, at least not easily."  Even when I get to select the web tier technology I haven't found anything with the same power and elegance Spring and Hibernate provide me in their respective domains.

Things may have changed. A few weeks ago I stumbled on a development framework called [Wicket](http://wicket.sourceforge.net/index.html).  The hype sounded good. Wicket is "_designed to handle one problem well: enabling component-oriented, programmatic manipulation of markup._" It has built in support for AJAX controls and building JSR-168 portlets. The mailing lists are very active and it's becoming an Apache incubator project.

As a test I decided to port the web tier of a user preferences engine  I've created from Struts-JSP to Wicket.  The results were very encouraging. Its approach seems to be a cross between asp.net (with its code behind pages) and swing. Lines of code went from 1166 for the struts version to 409.  What code there was in the Wicket version was more straight forward (primarily because it took a lot of work to translate the map backed forms I used in struts to the the data structures used by the engine).  Here's an example of the code that renders a one of n multiple choice question as a group of  radio buttons and processes the input:

<pre>public class OneOfNPanel extends Panel {  

    public OneOfNPanel(String arg0,QuestionnaireItem myData) {  
        super(arg0);  
        add(new FeedbackPanel("feedback"));  
        add(new Label("q.question", myData.getContents()));  
        add (new ResponseForm("form",myData));  

    }  
    private class ResponseForm extends Form  
    {  

        @SpringBean protected  QuestionaireFacade2 myManager;  
        protected  QuestionnaireItem myQuestion;  
        protected List<QuestionnaireAnswer> data;  
        private QuestionnaireResponseItem mySelection;  

        public  ResponseForm(final String componentName,QuestionnaireItem anItem )  
        {  
            super(componentName);  
            data = anItem.getAnswers();  
            myQuestion = anItem;  

            mySelection = new QuestionnaireResponseItem();  
            List<QuestionnaireResponseItem> state = myManager.get(anItem.getId());  
            if (!state.isEmpty())  
                mySelection = state.get(0);  

            mySelection.setQuestionId(anItem.getId());  
            RadioGroup myGroup = new RadioGroup("group",new PropertyModel(mySelection,"responseId"));  
            add(myGroup);  
            myGroup.add(new ListView("list", data)  
                {  
                    protected void populateItem( ListItem item)  
                    {  
                        QuestionnaireAnswer anItem= (QuestionnaireAnswer)item.getModelObject();  
                        item.add(new Label("name", anItem.getName()));  
                        item.add(new Radio("check", new Model(anItem.getId())));  
                    }  
                    });  

        }  

            public  void onSubmit()  
            {  
                List<QuestionnaireResponseItem> questionAnwers = new ArrayList<QuestionnaireResponseItem>();  
                if (mySelection.getResponseId() != null)  
                    questionAnwers.add(mySelection);  

                myManager.update(questionAnwers );  

            }  
    }  

}</pre>

You have to be careful reading Wicket code,  it leads you to make liberal use of anonymous inner classes (one of the ways it cuts down on the proliferation of artifacts in frameworks like Struts). In any case, I think my port was a pretty realistic exercise of the framework and I'm pretty stoked (and I'm not even a swing programmer).  Next time I get to choose the presentation layer for a web app, I think I'll add Wicket to the stack.

### Conclusion

I'm not saying the java stack is always the best solution. For simple CRUD applications backed by a database, whose schema I control Ruby on Rails seems ubeatable.  In many situations I recommend eschewing a traditional database entirely. Zope/Plone works well for portal sites and uses the Zope object oriented data store. You can easily spin out new out new content types and get ui screens, persistence, workflows, permissions, etc for free.  In a MS shop Sharepoint provides similar advantages.

But for significant applications, with a rich domain model, complex and variable workflows, complex integration requirements, and a need to evolve, Spring-Hibernate-ActiveMQ seem like an unbeatable base.  If you're building a web app hen pile Wicket and Tomcat on top. Do whatever else needs doing by selecting from the incredible variety of Java libraries: for templating you can't go wrong with Velocity or FreeMarker, for XSLT try Xalan or Saxon.

So I might call an application built with Spring, Hibernate, ActiveMQ, Wicket, and running on Tomcat a SWATH application.  But if I subsitute JettyI get WAIJS and so on. It seems impossible to get a handle on a stable acronym. All I can think of is to form the first or last "syllable" of our acronym from the Spring, Hibernate, ActiveMQ troika.  So SHA or ASH, then to optionally pile additional letters on the front or the back _pro re nata_.