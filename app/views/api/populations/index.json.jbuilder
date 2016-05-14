json.array! @populations.each do |pop|
    json.country pop.country
    json.element pop.element
    json.population pop.population
end
