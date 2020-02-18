# Plugin's routes
# See: http://guides.rubyonrails.org/routing.html
get 'problem', :to => 'problem#index'
get 'problem/:id', :to => 'problem#show'
post 'problem/:id', :to => 'problem#edit'
delete 'problem/:id', :to => 'problem#delete'