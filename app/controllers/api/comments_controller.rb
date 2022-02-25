class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.where({photo_id: params[:photo_id]})
        if @comments
            render :index
        else
            render json: "No comments yet"
        end 
    end

    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :index
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy(id)
        @comment = Comment.find(id)
        if @comment.destroy
            render :index
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end 

    def comment_params
        params.require(:comment).permit(:user_id, :photo_id, :body)
    end

  end