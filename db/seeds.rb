# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
react_questions =
  [
    {
      question: 'What is state?',
      a: 'All the internal data that defines an application at a given point in time',
      b: 'Build abstractions',
      c: 'Interfaces are magnitudes more interactive and complex than they used to be',
      d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
      correct: 'All the internal data that defines an application at a given point in time',
      points: 100
    }
    # {
    #   question: "How did the web 'used' to work?",
    #   a: 'Single Page Application',
    #   b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
    #   c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    #   d: 'A bunch of hampsters on wheels running',
    #   correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
    #   points: 200
    # }

  ],
  @ruby_questions =
    [
      # {
      #   question: 'What is state?',
      #   a: 'All the internal data that defines an application at a given point in time',
      #   b: 'Build abstractions',
      #   c: 'Interfaces are magnitudes more interactive and complex than they used to be',
      #   d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
      #   correct: 'All the internal data that defines an application at a given point in time',
      #   points: 100
      # },

      # {
      #   question: "How did the web 'used' to work?",
      #   a: 'Single Page Application',
      #   b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
      #   c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
      #   d: 'A bunch of hampsters on wheels running',
      #   correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
      #   points: 200
      # }

    ],
  @javascript_questions =
    [
      # {
      #   question: 'What is state?',
      #   a: 'All the internal data that defines an application at a given point in time',
      #   b: 'Build abstractions',
      #   c: 'Interfaces are magnitudes more interactive and complex than they used to be',
      #   d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
      #   correct: 'All the internal data that defines an application at a given point in time',
      #   points: '100'
      # },

      # {
      #   question: "How did the web 'used' to work?",
      #   a: 'Single Page Application',
      #   b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
      #   c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
      #   d: 'A bunch of hampsters on wheels running',
      #   correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
      #   points: 200
      # }

    ],
  @rails_questions =
    [
      # {
      #   question: 'What is state?',
      #   a: 'All the internal data that defines an application at a given point in time',
      #   b: 'Build abstractions',
      #   c: 'Interfaces are magnitudes more interactive and complex than they used to be',
      #   d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
      #   correct: 'All the internal data that defines an application at a given point in time',
      #   points: 100
      # },

      # {
      #   question: "How did the web 'used' to work?",
      #   a: 'Single Page Application',
      #   b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
      #   c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
      #   d: 'A bunch of hampsters on wheels running',
      #   correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
      #   points: 200
      # }

    ],
  @star_wars_questions =
    [
      # {
      #   question: 'What is state?',
      #   a: 'All the internal data that defines an application at a given point in time',
      #   b: 'Build abstractions',
      #   c: 'Interfaces are magnitudes more interactive and complex than they used to be',
      #   d: 'Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.',
      #   correct: 'All the internal data that defines an application at a given point in time',
      #   points: 100
      # },
      # {
      #   question: "How did the web 'used' to work?",
      #   a: 'Single Page Application',
      #   b: 'Refs give you direct access to a DOM element. You create a ref and then pass it as a property of an element.',
      #   c: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
      #   d: 'A bunch of hampsters on wheels running',
      #   correct: 'For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on).',
      #   points: 200
      # }
    ]

categories = [
  { category: 'React', questions: react_questions }
  # { category: 'Ruby', questions: @ruby_questions },
  # { category: 'Javascript', questions: @javascript_questions },
  # { category: 'Rails', questions: @rails_questions },
  # { category: 'Star Wars', questions: @star_wars_questions }
]
# Category.delete_all
# puts 'database cleared to begin seed'
categories.each do |c|
  current_category = c[:category]
  current_questions = c[:questions]
  # puts current_category
  category = Category.create(name: current_category, complete: false)
  puts "category  #{c[:category]} created"
  current_questions.each do |q|
    puts q['question']
    # question = q[:q]
    # puts question
    # puts q[:points].to_i

    # card = category.cards.create(
    #   name: q[:question],
    #   complete: false,
    #   points: q[:points]
    # )
    # puts "Question: #{q[:question]} created"
    # card.answers.create(
    #   a: q[:a],
    #   b: q[:b],
    #   c: q[:c],
    #   d: q[:d],
    #   correct: q[:correct]
    #   # )
  end
  # puts "Questions and answers created for #{category[:name]}"
end

puts '5 categories created'
