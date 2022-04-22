class AddColumnsToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :album_title, :string
    add_column :albums, :photo_id, :integer
    add_index :albums, :photo_id
  end
end
