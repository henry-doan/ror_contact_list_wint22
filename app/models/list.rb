class List < ApplicationRecord
  has_many :contacts, dependent: :destroy
  validates :lname, :desc, presence: true  
end
