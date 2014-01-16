class MusicPlayerController < ApplicationController
  layout Proc.new { |controller| controller.request.xhr? ? false : 'application' }
  require 'open-uri'

  def home
    @hash = params[:play]
    
  end

  def fetch

 
    @query = params[:q].nil?  ? '' : params[:q]

    #######################################################
<<<<<<< HEAD
    @apiKey = 'YOU API KEY HERE' #Will return 401 if not set :)
=======
    @apiKey = 'YOUR API KEY' #Will return 401 if not set :)
>>>>>>> 0be350da5cdbd70c25f1ead0e39829f0a8079c67
    #######################################################

    doc = JSON.parse(open('http://api.soundcloud.com/tracks.json?q=' + @query.to_s + '&client_id=' + @apiKey.to_s ).read)
    @final = doc.map do |track|
       { 
        :id          => track['id'], 
        :artwork_url => track['artwork_url'], 
        :label_name  => track['label_name'], 
        :title       => track['title'],
        :desc        => track['description']
      } 
    end
  end

  def transpondertrack
    @trackid = params[:id]

<<<<<<< HEAD
    @resolve = JSON.parse( open('https://api.soundcloud.com/tracks/' + @trackid.to_s + '?client_id=41becea728ba6323a7402d268b6a5410&format=json' ).read )
    @json =  @resolve
    
=======
    @resolve = JSON.parse( open('http://api.soundcloud.com/tracks/' + @trackid.to_s + '.json?client_id=41becea728ba6323a7402d268b6a5410' ).read )
    @json =  @resolve
>>>>>>> 0be350da5cdbd70c25f1ead0e39829f0a8079c67

  end 

  def addListaned
    #still developing, add music after pushstate hash set
    #see config/schema for info abouut migration
    MusicPlayer.create(:music => params[:musicname], :musicid => params[:id] ) 
  end

<<<<<<< HEAD
end
=======
end
>>>>>>> 0be350da5cdbd70c25f1ead0e39829f0a8079c67
