class ApiController < ApplicationController

  def show
    @user = User.find(params[:id])
    respond_to do | format |
      @user.new_badge = @user.new_badge?
      asdg
      format.html
      format.json do
          render :json => @user
      end
    end

  end

end
