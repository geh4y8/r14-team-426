class ApiuserController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token

  def create

    @user = User.find_by_email(params[:email].downcase)
    respond_to do |format|
      format.json do
        render :json => {id: @user.id,
                           sum: @user.sum}
      end
    end
  end

end
