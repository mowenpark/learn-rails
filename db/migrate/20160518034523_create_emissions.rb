class CreateEmissions < ActiveRecord::Migration
  def change
    create_table :emissions do |t|
      t.string :country
      t.integer :year
      t.integer :emission
      t.string :emission_type


      t.timestamps null: false
    end
  end
end
