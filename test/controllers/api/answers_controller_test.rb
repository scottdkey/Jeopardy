require 'test_helper'

class Api::AnswersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_answers_index_url
    assert_response :success
  end

  test "should get create" do
    get api_answers_create_url
    assert_response :success
  end

  test "should get update" do
    get api_answers_update_url
    assert_response :success
  end

  test "should get show" do
    get api_answers_show_url
    assert_response :success
  end

end
