# frozen_string_literal: true

class Api::AnswersController < ApplicationController
  before_action :set_answer, only: %i[show update destroy]

  def index
    render json: Answer.all
  end

  def show
    render json: @answer
  end

  # error 446 represents error in creating a creation
  def create
    answer = Answer.new(answer_params)
    if answer.save
      render json: answer
    else
      render json: answer.errors, status: 446
    end
  end

  # error 447 represents error in updating a updating
  def update
    answer = @answer.update(answer_params)
    if answer.save
      render json: answer
    else
      render json: answer.errors, status: 447
    end
  end

  def destroy
    @answer.destroy
  end

  private

  def answer_params
    params.require(:answer).permit(:a, :b, :c, :d, :correct, :card_id)
  end

  def set_answer
    @answer = Answer.find(params[:id])
  end
end
