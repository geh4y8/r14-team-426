class BackToYaml < ActiveRecord::Migration
  def change
    remove_column :users, :access_token
    add_column :users, :access_token, :text
  end
end
