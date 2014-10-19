class User < ActiveRecord::Base

  attr_accessor :sum, :new_badge, :access_token, :email

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.email = auth["info"].email
      #user.name = auth["user_info"]["name"]
    end
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
    sum = 0
    badge_counts.values.each { |a| sum+=a }
    self.sum = sum
  end

private

end
