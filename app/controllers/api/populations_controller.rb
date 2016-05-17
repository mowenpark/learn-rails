class Api::PopulationsController < ApplicationController

  def index
    @populations = Population.where(year: 2016).where(population: 100..10000000)
    render :index
  end

end
