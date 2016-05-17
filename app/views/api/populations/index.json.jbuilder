json.array! @populations.each do |pop|
    json.country pop.country
    json.year pop.year
    json.population pop.population
end
