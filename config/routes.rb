Rails.application.routes.draw do
  get  'people/index'
  post 'people/import'
  get  'people/upload'
  root "people#upload"
end
