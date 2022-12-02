Rails.application.routes.draw do
  
  namespace :api do 
    resources :lists do
      resources :contacts
    end

    resources :contacts, except: [:index, :show, :create, :update, :destroy] do
      resources :comments
    end

    # resources :comments, except: [:index, :show, :create, :update, :destroy] do 
    #   resources :likes
    # end

  end
end
