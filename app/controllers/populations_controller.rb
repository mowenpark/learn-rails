class PopulationsController < ApplicationController

  def new
    @populations = Population.all
    render :new
  end

end
