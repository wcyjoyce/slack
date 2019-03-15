require "faker"

puts "Cleaning database..."
Message.destroy_all && User.destroy_all && Channel.destroy_all

nicknames = ["Britta", "Abed", "Jeff", "Annie", "Troy", "Shirley", "Pierce", "Dean"]
users = nicknames.each { |nickname| User.create(email: "#{nickname.downcase}@community.org", password: "community")}

puts "Users created!"

names = ["general", "react", "london"]
channels = names.each { |name| Channel.create(name: name) }

puts "Channels created!"

20.times do
  Message.create(user_id: rand(users.length), channel_id: rand(channels.length), content: Faker::TvShows::Community.quotes)
end

puts "Messages created!"

# names = %w(general paris react)
# nicknames = %w(Papillard ssaunier monsieurpaillard krokrob Eschults)

# channels = names.map do |name|
#   Channel.find_or_create_by(name: name)
# end

# users = nicknames.map do |nickname|
#   User.create(email: "#{nickname.downcase}@lewagon.com", password: "testtest")
# end

# 20.times do
#   Message.create! user: users.sample, channel: channels.sample, content: Faker::TvShows::HowIMetYourMother.quote
# end

# puts "Seeds created!"
