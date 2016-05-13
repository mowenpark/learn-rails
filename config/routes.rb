Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :populations
  end

  resources :posts do
    resources :comments, :only => [:create]
  end

  resources :contacts, only: [:new, :create]
  resources :visitors, only: [:new, :create]
  root to: 'static_pages#index'
end
