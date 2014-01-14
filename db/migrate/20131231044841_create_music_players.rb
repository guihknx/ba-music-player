class CreateMusicPlayers < ActiveRecord::Migration
  def change
    create_table :musicp do |t|
      t.string :music
      t.string :ip

      t.timestamps
    end
  end
end
