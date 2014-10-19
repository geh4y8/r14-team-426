class User < ActiveRecord::Base

  attr_accessor :new_count, :old_count, :new_badge, :access_token

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      #user.name = auth["user_info"]["name"]
    end
  end

  def new_badge?
    new_count != old_count
  end

  def get_access_token(auth)
    consumer = OAuth::Consumer.new('M399NQr4R2tDncjW','jWSqFPCBpMhT9XN4', :site => "http://www.khanacademy.org", :scheme => :header )
    access_token = OAuth::AccessToken.from_hash(consumer, :oauth_token => auth.credentials.token, :oauth_token_secret => auth.credentials.secret )
    self.get_badge_count(access_token)
    access_token
  end

  def get_badge_count(access_token)
    response = access_token.get("http://www.khanacademy.org/api/v1/user")
    badge_counts = JSON.parse(response.body).to_hash["badge_counts"]
    self.old_count ||= {}
    self.new_count = badge_counts
    self.new_badge?
    self.old_count = self.new_count
  end

private

end
