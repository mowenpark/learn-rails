# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'csv'
require 'byebug'

population_csv = 'app/assets/population.csv'
emissions_csv = 'app/assets/emissions.csv'

CSV.foreach(population_csv, headers: true) do |row|
  country = row["AreaName"]
  year = row["Year"]
  population = row["Value"]
  new_population = Population.create({
    country: country,
    year: year,
    population: (population == "NaN") ? 0 : population
  })
end

CSV.foreach(emissions_csv, headers: true) do |row|
  country = row["AreaName"]
  year = row["Year"]
  emission = row["Value"]
  emission_type = row["ElementName"]
  new_emission = Emission.create({
    country: country,
    year: year,
    emission: emission,
    emission_type: emission_type
    })
end
