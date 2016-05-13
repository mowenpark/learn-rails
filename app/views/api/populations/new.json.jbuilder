json.array! @populations.each do |pop|
    json.country follow.title
    json.element follow.company.logo
    json.population
end
