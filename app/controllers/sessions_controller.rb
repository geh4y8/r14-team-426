class SessionsController < ApplicationController
  def create
    auth = request.env["omniauth.auth"]
    user = User.find_by_provider_and_uid(auth["provider"], auth["uid"]) || User.create_with_omniauth(auth)
    session[:user_id] = user.id
    redirect_to root_url, :notice => "Signed in!"
    consumer = OAuth::Consumer.new('M399NQr4R2tDncjW','jWSqFPCBpMhT9XN4', :site => "http://www.khanacademy.org", :scheme => :header )
    access_token = OAuth::AccessToken.from_hash(consumer, :oauth_token => auth.credentials.token, :oauth_token_secret => auth.credentials.secret )
    response = access_token.get("http://www.khanacademy.org/api/v1/user")
    badge_counts = JSON.parse(response.body).to_hash["badge_counts"]
    user.old_count ||= {}
    user.new_count = badge_counts
    user.new_badge?
    user.old_count = user.new_count
    user.save
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, :notice => "Signed out!"
  end
end
