require 'resourceful'

class Betfair

  attr_accessor :data, :nested_data

  #@@data ||= JSON.parse(Resourceful.get('https://d1zgsxlgpxt59q.cloudfront.net/exchange/betting/rest/v1/en/navigation/lhm.json').body)["children"]
  @@data ||= JSON.parse(File.read("#{Rails.root}/app/assets/javascripts/ampersandtest/data.json"))

  def initialize
    @data = @@data
    @nested_data = ""
  end

  def events(parent=nil, hash=self.data)

    hash.each do |key, value|
      puts "key: #{key}"
      puts "value: #{value}"
      if key["type"] == "MARKET"
        next
      elsif key.is_a?(Hash)
        if (key["name"] == parent.to_s || key["id"] == parent.to_s)
          self.nested_data = key["children"]
          break
        else
          events(parent, key["children"])
        end
      elsif key.is_a?(String)
        if (value.first["name"] == parent.to_s || value.first["id"] == parent.to_s)
          self.nested_data = value.first["children"]
          break
        else
          events(parent, value.first["children"])
        end
      else
        events(parent, key["children"].first)
      end
    end
    return self.nested_data
  end

end