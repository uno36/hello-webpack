require 'rails_helper'

RSpec.describe 'Api::Greetings', type: :request do
  describe 'GET /random_greeting' do
    it 'returns http success' do
      get '/api/greetings/random_greeting'
      expect(response).to have_http_status(:success)
    end
  end
end
