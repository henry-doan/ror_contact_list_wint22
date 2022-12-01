class CreateLists < ActiveRecord::Migration[7.0]
  def change
    create_table :lists do |t|
      t.string :lname
      t.text :desc

      t.timestamps
    end
  end
end
