# Plugin's routes
# See: http://guides.rubyonrails.org/routing.html
get 'problems', :to => 'problem#index'
post 'problem/:id', :to => 'problem#add'
get 'problem/:id', :to => 'problem#show'
put 'problem/:id', :to => 'problem#edit'
delete 'problem/:id', :to => 'problem#delete'