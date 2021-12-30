json.extract! album, :id, :title, :description, :user_id, :photo_ids
json.photos album.photos, partial: 'api/photos/photo'