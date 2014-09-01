class EventTypesController < ApplicationController

  layout "application"

  def show
    render text: "hello", layout: "application"
  end
end