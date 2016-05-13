class CreatePopulations < ActiveRecord::Migration
  def change
    create_table :populations do |t|
      t.string :country
      t.string :element
      t.integer :population

      t.timestamps null: false
    end
  end
end
