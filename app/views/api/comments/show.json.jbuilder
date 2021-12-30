json.extract! @comment, :id, :body, :user_id, :photo_id
json.username @comment.user.username