json.array! @photos do |photo|
    json.extract! photo, :id, :album_id,
    json.photoUrl url_for(photo.photo)
end