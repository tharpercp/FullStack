class Comment < ActiveRecord::Migration[5.2]
  create_table :comments do |t|
    t.integer :user_id, null: false
    t.integer :photo_id, null: false
    t.string :body, null: false
    t.timestamps
  end 
  add_index :comments, :user_id
  add_index :comments, :photo_id
end
