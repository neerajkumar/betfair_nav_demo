json.array!(@betfair_roots) do |betfair_root|
  json.extract! betfair_root, :id
  json.url betfair_root_url(betfair_root, format: :json)
end
