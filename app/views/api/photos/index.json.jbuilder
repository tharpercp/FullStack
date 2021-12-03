@photos.each do |photo| 
    json.set! photo.id do 
        json.extract! photo, :id, :user_id, :img_url
        if photo.photo.attached?
            json.photoUrl url_for(photo.photo)
        else 
            json.photoUrl nil 
        end 
    end
end