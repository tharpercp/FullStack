class Api::PhotosController < ApplicationController
    def index
        @photos = Photo.all
        render :index
    end


    def show
        @photo = Photo.find(params[:id])
        if @photo
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def create
        @photo = Photo.new(photo_params)
        @photo.user_id = current_user.id
        if @photo.save
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end

    end

    def photo_params
        params.require(:photo).permit(:user_id, :album_id, :img_url, :photo)
    end
end
