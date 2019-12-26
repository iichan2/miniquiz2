class CreateQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
      t.text :question, null: false
      t.string :choice1, null: false
      t.string :choice2, null: false
      t.string :choice3, null: false
      t.integer :answer, null: false

      t.timestamps
    end
  end
end
