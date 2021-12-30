class Album < ApplicationRecord
    validates :user_id, presence: true
    validates :title, presence: true

    belongs_to :user

    has_many :photos

    has_many :album_photos, through: :photos

end