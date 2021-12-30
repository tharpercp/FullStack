class Album < ApplicationRecord
    validates :user_id, presence: true
    validates :title, presence: true

    belongs_to :user

    has_many :album_photos

    has_many :photos, through: :album_photos

end