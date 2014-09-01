class EventsController < ApplicationController

  def show
    render text: "hello", layout: "application"
  end

end