Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: { format: :json } do
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create]
      resources :albums, only: [:index, :create, :show]
      resources :photos do 
        resources :comments
        resources :likes
      end
      resources :users do
        resources :photos, only: [:index, :show, :create]
        resources :albums, only: [:index]
        resources :comments, only: [:index]
      end

    end
    
    root to: 'static_pages#root'
end
