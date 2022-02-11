class Api::TagsController < ApplicationController
    def index
        render :index
    end

    end

    def show
        @photos = Photo.where({photo_id: params[:photo_id]})
        if @photos
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def create
        @tag = Tag.new(tag_params)
        if @tag.save
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def destroy(id)
        @tag = Tag.find(id)
    end 

    def tag_params
        params.require(:tag).permit(:tag_name, :photo_id)
    end

  end