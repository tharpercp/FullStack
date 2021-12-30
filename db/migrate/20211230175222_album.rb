class Album < ActiveRecord::Migration[5.2]
    create_table :albums do |t|
      t.integer :user_id, null: false
      t.string :body, null: false
      t.timestamps
    end 
    add_index :albums, :user_id
end
