class Contact < ApplicationRecord
  belongs_to :list
  has_many :comments, dependent: :destroy
  validates :first_name, :last_name, :phone, :email, presence: true
end
