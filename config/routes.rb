Rails.application.routes.draw do
  
  namespace :api do 
    resources :lists do
      resources :contacts
    end
  end
end
