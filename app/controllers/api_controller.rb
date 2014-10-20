class ApiController < ApplicationController

  def show
    auth = request.env["omniauth.auth"]
    @user = User.find(params[:id])
    respond_to do | format |
      @user.get_badge_count(ApplicationController.get_access_token)
      format.json do
          render :json => {id: @user.id,
                           sum: @user.sum}
      end
    end

  end

end
