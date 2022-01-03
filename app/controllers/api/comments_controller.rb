class Api::CommentsController < ApplicationController
    def index
        if current_user
            @comments = Comment.all.select{ |comment| comment.photo_id === params[:photo_id]}
            render :index
        else
            @albums = nil
        end
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end
    end


    def comment_params
        params.require(:comment).permit(:user_id, :photo_id, :body)
    end
end