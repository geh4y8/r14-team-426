Rails.application.routes.draw do
  root to: "articles#index"

  get "/auth/khan_academy/callback" => "sessions#create"

  get "/signout" => "sessions#destroy", :as => :signout
  resources :articles
end
