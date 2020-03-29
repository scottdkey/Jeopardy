# frozen_string_literal: true

react_questions = [
  { question: 'What is state?',
    a: 'All the internal data that defines an application at a given point in time',
    b: 'Build abstractions',
    c: 'Interfaces are magnitudes more interactive and complex than they used to be',
    d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
    correct: 'All the internal data that defines an application at a given point in time',
    points: 100 },
  { question: "How did the web 'used' to work?",
    a: 'Single Page Application',
    b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
    c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    d: 'A bunch of hampsters on wheels running',
    correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    points: 200 }
]
ruby_questions = [
  { question: 'What is state?',
    a: 'All the internal data that defines an application at a given point in time',
    b: 'Build abstractions',
    c: 'Interfaces are magnitudes more interactive and complex than they used to be',
    d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
    correct: 'All the internal data that defines an application at a given point in time',
    points: 100 },
  { question: "How did the web 'used' to work?",
    a: 'Single Page Application',
    b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
    c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    d: 'A bunch of hampsters on wheels running',
    correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    points: 200 }
]
javascript_questions = [
  {
    question: 'What is state?',
    a: 'All the internal data that defines an application at a given point in time',
    b: 'Build abstractions',
    c: 'Interfaces are magnitudes more interactive and complex than they used to be',
    d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
    correct: 'All the internal data that defines an application at a given point in time',
    points: '100'
  },
  {
    question: "How did the web 'used' to work?",
    a: 'Single Page Application',
    b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
    c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    d: 'A bunch of hampsters on wheels running',
    correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    points: 200
  }
]
rails_questions = [
  { question: 'What is state?',
    a: 'All the internal data that defines an application at a given point in time',
    b: 'Build abstractions',
    c: 'Interfaces are magnitudes more interactive and complex than they used to be',
    d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
    correct: 'All the internal data that defines an application at a given point in time',
    points: 100 },

  { question: "How did the web 'used' to work?",
    a: 'Single Page Application',
    b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
    c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    d: 'A bunch of hampsters on wheels running',
    correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    points: 200 }
]
star_wars_questions = [
  { question: 'What is state?',
    a: 'All the internal data that defines an application at a given point in time',
    b: 'Build abstractions',
    c: 'Interfaces are magnitudes more interactive and complex than they used to be',
    d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
    correct: 'All the internal data that defines an application at a given point in time',
    points: 100 },
  { question: "How did the web 'used' to work?",
    a: 'Single Page Application',
    b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
    c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    d: 'A bunch of hampsters on wheels running',
    correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    points: 200 }
]

categories = [
  { category: 'React', questions: react_questions },
  { category: 'Ruby', questions: ruby_questions },
  { category: 'Javascript', questions: javascript_questions },
  { category: 'Rails', questions: rails_questions },
  { category: 'Star Wars', questions: star_wars_questions }
]
# Category.delete_all
# puts 'database cleared to begin seed'

def createCategory(category_name)
  category = Category.create(name: category_name, complete: false)
  puts "category  #{category_name} created"
  category
end

def createQuestion(name, points, category)
  question = category.cards.create(
    name: name,
    complete: false,
    points: points
  )
  puts "Question:#{question[:name]} for #{category[:name]} created"
  question
end

def supplyAnswers(a, b, c, d, correct, question)
  question.answers.create(
    a: a,
    b: b,
    c: c,
    d: d,
    correct: correct
  )
  puts "Answers for #{question[:name]} created"
end

categories.each do |c|
  category = c[:category]
  questions = c[:questions]
  @c = createCategory(category)
  questions.each do |q|
    name = q[:question]
    points = q[:points]
    a = q[:a]
    b = q[:b]
    c = q[:c]
    d = q[:d]
    correct = q[:correct]
    question = createQuestion(name, points, @c)
    supplyAnswers(a, b, c, d, correct, question)
  end
end

puts '        '
puts 'SEEEDED'
