class CreatePopulations < ActiveRecord::Migration
  def change
    create_table :populations do |t|
      t.string :country
      t.integer :year
      t.integer :population

      t.timestamps null: false
    end
  end
end
