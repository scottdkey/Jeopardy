# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create(name: 'first', complete: false)
Category.create(name: 'Second', complete: false)
Category.create(name: 'Third', complete: true)
Category.create(name: 'Fourth', complete: false)
Category.create(name: '5th', complete: true)

puts '5 categories created'
