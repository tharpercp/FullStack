class Api::SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
      if @user.nil?
        render json: ['Incorrect credentials!'], status: 401
      else
        sign_in!(@user)
        render json: @user;
      end
    end
  
    def destroy
      @user = current_user;
      if @user 
        sign_out!
        render json: ['Logout successful']
      else
        render json: ['No User Logged In']
    end
  end