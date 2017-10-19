class CreatePeople < ActiveRecord::Migration[5.0]
  def change
    create_table :people do |t|
      t.string :name
      t.date :date
      t.integer :number
      t.string :description

      t.timestamps
    end
    add_index :people, [:name, :date], unique: true
  end
end
