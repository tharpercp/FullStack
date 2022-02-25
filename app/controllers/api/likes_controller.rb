class Api::LikesController < ApplicationController
    def index
        @likes = Like.where({photo_id: params[:photo_id]})
        if @likes
            render :index
        else
            render :json "If you like this photo, give it a thumbs-up!"
        end 
    end

    end

    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy(id)
        @like = Like.find(id)
        if @like
            @like.destroy
        else
            render json: @like.errors.full_messages, status: 422
        end
    end 

    def like_params
        params.require(:like).permit(:user_id, :photo_id)
    end

  end