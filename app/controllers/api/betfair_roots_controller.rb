class Api::BetfairRootsController < ApplicationController

  # GET /betfair_roots
  # GET /betfair_roots.json
  def index
    $betfair_roots = Betfair.new.data

    respond_to do |format|
      format.json do
        render json: $betfair_roots.to_json
      end
    end
  end

end
