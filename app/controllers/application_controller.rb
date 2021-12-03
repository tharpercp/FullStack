class ApplicationController < ActionController::Base

    helper_method :current_user, :signed_in?

    def current_user
        @current_user = User.find_by(session_token: session[:session_token])
    end

    def signed_in?
        !!current_user
    end

    def sign_in!(user)
        session[:session_token] = user.reset_session_token!
    end

    def sign_out!
        @current_user.reset_session_token! if signed_in?
        session[:session_token] = nil
        @current_user = nil
    end

    def require_signed_in!
        render json: ["You need to be logged in"] unless signed_in?
    end
end
