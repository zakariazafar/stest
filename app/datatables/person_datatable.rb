class PersonDatatable < AjaxDatatablesRails::Base

  def view_columns
    @view_columns ||= {
      name: { source: "Person.name" , searchable: true},
      date: { source: "Person.date" , searchable: false},
      number: { source: "Person.number" , searchable: false},
      description: { source: "Person.description", searchable: false, orderable: false},
    }
  end

  private
  def data
    records.map do |person|
      {
        name: person.name,
        date: person.date,
        number: person.number,
        description: person.description
      }
    end
  end

  def get_raw_records
  	Person.all
  end

end