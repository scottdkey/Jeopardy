# frozen_string_literal: true

class Card < ApplicationRecord
  belongs_to :category
  has_one :answers, dependent: :destroy
end
