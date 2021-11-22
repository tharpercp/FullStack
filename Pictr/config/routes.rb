Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: { format: :json } do
      resources :users, only: [:create]
    end

    resource :session, only: [:create, :destroy]
    
    root to: 'root#root'
end
