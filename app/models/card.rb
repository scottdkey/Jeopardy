# frozen_string_literal: true

class Card < ApplicationRecord
  belongs_to :category
  has_many :answers
end
