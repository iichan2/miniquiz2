class Quiz < ApplicationRecord
  validates :question,presence: true, length: { maximum: 100 }
  validates :choice1, presence: true, length: { maximum: 50 }
  validates :choice2, presence: true, length: { maximum: 50 }
  validates :choice3, presence: true, length: { maximum: 50 }
  validates :answer, presence: true
end
