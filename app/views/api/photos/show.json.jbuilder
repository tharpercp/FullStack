json.extract! @photo, :id, :user_id, :img_url
if @photo.photo.attached?
    json.photoUrl url_for(@photo.photo)
end 