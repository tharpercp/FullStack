class EditTags < ActiveRecord::Migration[5.2]
  def change
    rename_table :tags, :likes
    remove_column :likes, :tag_name
    add_column :likes, :user_id, :integer 
  end
end
