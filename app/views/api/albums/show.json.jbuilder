json.album do
    json.extract! @album, :id, :title, :description, :user_id
end

