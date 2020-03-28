# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
categories = ['React', 'Ruby', 'Javascript', 'Rails', 'Star Wars']

react_questions = [
  { cat: 'React',
    question: 'What is state?',
    a: 'All the internal data that defines an application at a given point in time',
    b: 'Build abstractions',
    c: 'Interfaces are magnitudes more interactive and complex than they used to be',
    d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
    correct: 'All the internal data that defines an application at a given point in time',
    points: 100 },

  { cat: 'React',
    question: "How did the web 'used' to work?",
    a: 'Single Page Application',
    b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
    c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    d: 'A bunch of hampsters on wheels running',
    correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    points: 200 }

]
ruby_questions = [
  { cat: 'React',
    question: 'What is state?',
    a: 'All the internal data that defines an application at a given point in time',
    b: 'Build abstractions',
    c: 'Interfaces are magnitudes more interactive and complex than they used to be',
    d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
    correct: 'All the internal data that defines an application at a given point in time',
    points: 100 },

  { cat: 'React',
    question: "How did the web 'used' to work?",
    a: 'Single Page Application',
    b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
    c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    d: 'A bunch of hampsters on wheels running',
    correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    points: 200 }

]
javascript_questions = [
  { cat: 'React',
    question: 'What is state?',
    a: 'All the internal data that defines an application at a given point in time',
    b: 'Build abstractions',
    c: 'Interfaces are magnitudes more interactive and complex than they used to be',
    d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
    correct: 'All the internal data that defines an application at a given point in time',
    points: 100 },

  { cat: 'React',
    question: "How did the web 'used' to work?",
    a: 'Single Page Application',
    b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
    c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    d: 'A bunch of hampsters on wheels running',
    correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    points: 200 }

]
rails_questions = [
  { cat: 'React',
    question: 'What is state?',
    a: 'All the internal data that defines an application at a given point in time',
    b: 'Build abstractions',
    c: 'Interfaces are magnitudes more interactive and complex than they used to be',
    d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
    correct: 'All the internal data that defines an application at a given point in time',
    points: 100 },

  { cat: 'React',
    question: "How did the web 'used' to work?",
    a: 'Single Page Application',
    b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
    c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    d: 'A bunch of hampsters on wheels running',
    correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    points: 200 }

]
star_wars_questions = [
  { cat: 'React',
    question: 'What is state?',
    a: 'All the internal data that defines an application at a given point in time',
    b: 'Build abstractions',
    c: 'Interfaces are magnitudes more interactive and complex than they used to be',
    d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
    correct: 'All the internal data that defines an application at a given point in time',
    points: 100 },

  { cat: 'React',
    question: "How did the web 'used' to work?",
    a: 'Single Page Application',
    b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
    c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    d: 'A bunch of hampsters on wheels running',
    correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    points: 200 }

]
# Category.delete_all
# puts 'database cleared to begin seed'
@category = Category.create(name: 'Ruby', complete: false)
puts "category #{@category[:name]} created"
ruby_questions.each do |q|
  card = @category.cards.create(name: q[:question], complete: false)
  puts "Question: #{q[:question]} created"
  Answer.create(a: q[:a], b: q[:b], c: q[:c], d: q[:d], correct: q[:correct])
end
puts "Questions and answers created for #{@category[:name]}"

@category = Category.create(name: 'Rails', complete: false)
puts "category #{@category[:name]} created"
rails_questions.each do |q|
  card = @category.cards.create(name: q[:question], complete: false)
  puts "Question: #{q[:question]} created"
  Answer.create(a: q[:a], b: q[:b], c: q[:c], d: q[:d], correct: q[:correct])
end
puts "Questions and answers created for #{@category[:name]}"

@category = Category.create(name: 'Javascript', complete: false)
puts "category #{@category[:name]} created"
javascript_questions.each do |q|
  card = @category.cards.create(name: q[:question], complete: false)
  puts "Question: #{q[:question]} created"
  Answer.create(a: q[:a], b: q[:b], c: q[:c], d: q[:d], correct: q[:correct])
end
puts "Questions and answers created for #{@category[:name]}"

@category = Category.create(name: 'React', complete: false)
puts "category #{@category[:name]} created"
react_questions.each do |q|
  card = @category.cards.create(name: q[:question], complete: false)
  puts "Question: #{q[:question]} created"
  Answer.create(a: q[:a], b: q[:b], c: q[:c], d: q[:d], correct: q[:correct])
end
puts "Questions and answers created for #{@category[:name]}"

@category = Category.create(name: 'Star Wars', complete: false)
puts "category #{@category[:name]} created"
star_wars_questions.each do |q|
  card = @category.cards.create(name: q[:question], complete: false)
  puts "Question: #{q[:question]} created"
  Answer.create(a: q[:a], b: q[:b], c: q[:c], d: q[:d], correct: q[:correct])
end
puts "Questions and answers created for #{@category[:name]}"

puts '5 categories created'
