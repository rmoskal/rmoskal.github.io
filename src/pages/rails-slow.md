---
title: Rails Slow
date: 2007-11-77 22:54:54
tags:
layout: post
---


Processor cycles are cheap, developer cycles are dear. Until you run the unit tests.

**Love Ruby!**

It's a little bit scary not being to lean on the compiler for things parameter type checking, but the Rubyistas assure me I'll get used to it. Being used to writing a lot of unit tests helps.

So I start my first Rails app.  Loving Ruby! Happy to use the equals operator instead of endless getters and setters. Happy to use duck typing instead of extracting another interface when I want to treat things polymorphically. A little sad to have to learn yet another markup language for the HTML templates.

So I write some tests and I write some code (sometimes I do it the other way around).

Lo, as soon as I require '/../test_helper' and run my rake task, the testing harness takes nearly a full minute to initialize. This happens every time! In contrast, I have an asp.net app with 200 tests, half of which, regenerate the database schema between runs. Everything  runs in well under a minute.

I've only see a few posts on the internet complaining about the Rails test fixtures. Using a statically typed language I'm used to running my unit test suite after almost every change to my code.  With Ruby I only want to do this more often.  A friend says that he likes Rails because it makes him do all the things he wouldn't do as a Perl hacker, separate concerns, write tests. Can it be that most  Rails developers don't actually run their tests?

I found myself writing tests (designing my software) so as to avoid requiring  '/../test_helper'.  This doesn't seem good. What the language and Rails gave, the pokeyness of the test harness took away.

I see that there are ways around this: [http://blog.jayfields.com/2006/06/ruby-on-rails-unit-tests.html](http://blog.jayfields.com/2006/06/ruby-on-rails-unit-tests.html "external-link"). But us this something an average Rails developer will do?  And eventually you are going to write tests that hit against the database, whether you call them unit tests or not.

It seems like a deal breaker to me, but no one else seems to have noticed.

