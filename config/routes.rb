Music::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
  root to: 'music_player#home'
  get "music_player/fetch"
  get '/null' => 'music_player#home' 
  post '/' => 'music_player#home'  
  get '/canvas' => 'music_player#home'  
  post '/canvas' => 'music_player#home'  
   
  get '/:play' => 'music_player#home', :constraints => { :play => /[0-9]+(\%7C[0-9]+)*/ }

  get 'auth/:provider/callback', to: 'sessions#create', via: [:get, :post]
  get 'auth/failure', to: redirect('/'), via: [:get, :post]
  get 'signout', to: 'sessions#destroy', as: 'signout', via: [:get, :post]
  #map.todo ":play", :controller => "music_player", :action => "home"
end
