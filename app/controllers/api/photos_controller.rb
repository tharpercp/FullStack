class Api::PhotosController < ApplicationController
    def index
        @photos = Photo.where(user_id: current_user.id)
        render :index
    end
    def create
      @photo = Photo.new(photo_params)
      if @photo.save
        sign_in!(@user)
        render json: @user
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def photo_params
        params.require(:photo).permit(:img_link, :user_id, :body, :album_id)
    end
end