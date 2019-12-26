json.set! :quizs do
  json.array! @quizs do |quiz|
    json.extract! quiz, :id, :question , :choice1 , :choice2 , :choice3 , :answer
  end
end