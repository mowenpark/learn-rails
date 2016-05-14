class Api::PopulationsController < ApplicationController

  def index
    @populations = Population.all
    render :index
  end

end
