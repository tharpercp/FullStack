class Api::AlbumsController < ApplicationController
    def index
        if current_user
            @albums = Album.all.select{ |album| album.user_id === current_user.id}
            render :index
        else
            @albums = nil
        end
    end

    def create
        @album = Album.new(album_params)
        @album.user_id = current_user.id

        if @album.save
            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end
    end

    def show
        @album = Album.find(params[:id])
        if @album
            @photos = @album.photos
            render :show
        else
            render json: ["there is no album with that id"]
        end
    end

    def album_params
        params.require(:album).permit(:title, :description)
    end
end