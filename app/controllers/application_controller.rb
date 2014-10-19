class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  def self.get_access_token
    @@access_token
  end

  def self.set_access_token(token)
    @@access_token = token
  end

  protect_from_forgery with: :exception
  helper_method :current_user
  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
