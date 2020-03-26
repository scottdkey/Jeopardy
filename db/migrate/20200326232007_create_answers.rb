class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.string :a
      t.string :b
      t.string :c
      t.string :d
      t.string :correct
      t.belongs_to :card, null: false, foreign_key: true

      t.timestamps
    end
  end
end
