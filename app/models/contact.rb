class Contact < ApplicationRecord
  belongs_to :list

  validates :first_name, :last_name, :phone, :email, presence: true
end
