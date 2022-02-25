class Like < ApplicationRecord

    belongs_to  :photo

    
    validates :photo_id, presence: true
    validates :user_id, presence: true
end
