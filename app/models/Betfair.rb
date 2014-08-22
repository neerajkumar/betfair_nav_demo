require 'resourceful'

class Betfair

  attr_accessor :data

  @@data ||= JSON.parse(Resourceful.get('https://d1zgsxlgpxt59q.cloudfront.net/exchange/betting/rest/v1/en/navigation/lhm.json').body)["children"]

  def initialize
    @data = @@data
  end

  def self.events(parent=nil, hash = @@data)
    myvalue = ""

    hash.each do |key, value|
      puts "key: #{key}"
      puts "value: #{value}"
      if key.is_a?(Hash)
        if key["name"] == parent.to_s
          myvalue = key["children"].to_json
          break
        end
      elsif key.is_a?(String)
        if value.first["name"] == parent.to_s
          myvalue = value.first["children"].to_json
          break
        end
      else
        events('children', key["children"].first)
      end
    end
    return myvalue
  end

end