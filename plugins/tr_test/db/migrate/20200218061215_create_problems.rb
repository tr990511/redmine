class CreateProblems < ActiveRecord::Migration[5.2]
  def change
    create_table :problems do |t|
      t.string :question
      t.string :description
      t.string :applyPerson
    end
  end
end
