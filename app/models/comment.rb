class Comment < ApplicationRecord
  belongs_to :contact

  validates :author, :body, presence: true
end
