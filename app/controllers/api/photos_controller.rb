class Api::PhotosController < ApplicationController
    def index
        if params[:album_id] 
            @photos = Photo.where({album_id: params[:album_id]})
            render :index
        elsif params[:user_id]
            @photos = Photo.where({user_id: params[:user_id]})
            render :index 
        else
            @photos = Photo.all
            render :index
        end

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
            # render json: {message: "You did it"}
        else
            render json: @photo.errors.full_messages, status: 422
        end

    end
end
