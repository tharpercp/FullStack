class Photo < ApplicationRecord
    validates :user_id, presence: true

    belongs_to :user

    belongs_to :album

    has_many :tags

    has_one_attached :photo

end