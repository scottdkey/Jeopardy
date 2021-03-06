# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :categories
    resources :cards
    resources :answers
  end

  get '*other', to: 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
