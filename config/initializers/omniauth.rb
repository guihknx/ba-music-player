OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '187006538132678', '29b5fa8f3ef7917c0a400376bfb95a45'
end