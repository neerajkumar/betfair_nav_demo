require 'test_helper'

class BetfairRootsControllerTest < ActionController::TestCase
  setup do
    @betfair_root = betfair_roots(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:betfair_roots)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create betfair_root" do
    assert_difference('BetfairRoot.count') do
      post :create, betfair_root: {  }
    end

    assert_redirected_to betfair_root_path(assigns(:betfair_root))
  end

  test "should show betfair_root" do
    get :show, id: @betfair_root
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @betfair_root
    assert_response :success
  end

  test "should update betfair_root" do
    patch :update, id: @betfair_root, betfair_root: {  }
    assert_redirected_to betfair_root_path(assigns(:betfair_root))
  end

  test "should destroy betfair_root" do
    assert_difference('BetfairRoot.count', -1) do
      delete :destroy, id: @betfair_root
    end

    assert_redirected_to betfair_roots_path
  end
end
