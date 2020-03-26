# frozen_string_literal: true

class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.text :answers
      t.boolean :complete
      t.integer :points
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
