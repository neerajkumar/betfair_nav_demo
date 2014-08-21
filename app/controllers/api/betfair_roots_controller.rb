class Api::BetfairRootsController < ApplicationController

  # GET /betfair_roots
  # GET /betfair_roots.json
  def index
    @betfair_roots ||= Resourceful.get('https://d1zgsxlgpxt59q.cloudfront.net/exchange/betting/rest/v1/en/navigation/lhm.json')

    respond_to do |format|
      format.json do
        render json: JSON.parse(@betfair_roots.body)["children"].to_json
      end
    end
  end

end
