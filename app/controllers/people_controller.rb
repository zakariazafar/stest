class PeopleController < ApplicationController
  respond_to :html, :json

  def index
    respond_to do |format|
      format.html
      format.json do
        render json: PersonDatatable.new(view_context)
      end
    end
  end

  def upload
  end

  def import
    Person.csv_import(params[:file])
    redirect_to people_index_url, notice: "People imported."
  end
end