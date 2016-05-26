class Api::PopulationsController < ApplicationController

  def index
    @populations = Population.where(population: 100000..100000000)
    render :index
  end

end
