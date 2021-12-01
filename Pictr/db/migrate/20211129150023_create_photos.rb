class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :img_link, null: false
      t.integer :user_id, null: false
      t.string :body
      t.integer :album_id
      t.timestamps 
    end
    add_index :photos, :album_id
    add_index :photos, :user_id
  end
end
