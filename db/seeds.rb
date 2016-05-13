# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'csv'
require "byebug"

csv_file = 'app/assets/Population_E_All_Area_Groups_1.csv'

CSV.foreach(csv_file, headers: true) do |row|
    country = row["Country"]
    element = row["Element"]
    population = row["Y2016"]
    new_population = Population.create({
      country: country,
      element: element,
      population: population
    })
end
