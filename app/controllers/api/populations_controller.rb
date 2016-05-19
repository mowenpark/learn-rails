class Api::PopulationsController < ApplicationController

  def index
    @populations = Population.where(population: 1000..100000000)
    render :index
  end

end
