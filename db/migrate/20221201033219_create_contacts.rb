class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.boolean :fav
      t.belongs_to :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
