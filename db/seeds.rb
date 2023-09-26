# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
greetings = [
  "Hello, how are you today?",
  "Good morning! Have a great day!",
  "Hi there! What's on your mind?",
  "Hey, hope you're doing well!",
  "Greetings! What's new?"
]

greetings.each do |greeting|
  Message.create(content: greeting)
end