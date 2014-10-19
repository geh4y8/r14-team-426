class ApiuserController < ApplicationController

  def show
    @user = User.find(params[:id])
    respond_to do | format |
      format.html
      format.json do
          render :json => {email: @user.email,
                          }
      end
    end

  end

end
