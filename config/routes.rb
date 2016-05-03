Rails.application.routes.draw do
  resources :posts do
    resources :comments, :only => [:create]
  end
  resources :contacts, only: [:new, :create]
  resources :visitors, only: [:new, :create]
  root to: 'static_pages#index'
end
