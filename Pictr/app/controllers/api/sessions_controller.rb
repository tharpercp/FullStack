class Api::SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
      if @user.nil?
        render json: ['Incorrect credentials!'], status: 401
      else
        sign_in!(@user)
        render 'api/users/show';
      end
    end
  
    def destroy
      sign_out!
      render json: { message: 'Logout successful.' }
    end
  end