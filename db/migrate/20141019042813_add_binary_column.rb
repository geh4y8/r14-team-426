class AddBinaryColumn < ActiveRecord::Migration
  def change
    remove_column :users, :access_token
    add_column :users, :access_token, :binary
  end
end
