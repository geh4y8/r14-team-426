class User < ActiveRecord::Base
  attr_accessor :new_count, :old_count, :new_badge

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
end
