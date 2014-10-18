class User < ActiveRecord::Base
  # before_create :get_user
  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["user_info"]["name"]
    end
  end

  # private

  # def get_user
  #   response = RestClient::Request.new(
  #     :method => :get,
  #     :url => 'http://www.khanacademy.org/api/v1/user')
end
