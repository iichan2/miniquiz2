class Api::QuizsController < ApplicationController
  protect_from_forgery :except => [:create,:update,:destroy]
  def index
    @quizs = Quiz.all
    render 'index', formats: 'json', handlers: 'jbuilder'
  end

  def show
    @quiz = Quiz.find(params[:id])
    render 'show', formats: 'json', handlers: 'jbuilder'
  end


  def create
    @quiz = Quiz.new(quiz_params)
    if @quiz.save
      head :no_content
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  def update
    @quiz = Quiz.find(params[:id])
    if @quiz.update_attributes(quiz_params)
      render 'index', formats:'json', handlers: 'jbuilder'
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @quiz = Quiz.find(params[:id])
    if @quiz.destroy
      head :no_content
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  private

  def quiz_params
    params.fetch(:quiz, {}).permit(
      :question , :choice1 , :choice2 , :choice3 , :answer
    )
  end
end
