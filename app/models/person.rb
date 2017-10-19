class Person < ActiveRecord::Base
    def self.csv_import(file)
		items = []
		item_columns = [:name, :date, :number, :description ]
		items = read_csv(file)
		items.each_slice(1000) do |item_values|
		    Person.import item_columns, item_values, :validate => false, on_duplicate_key_ignore: true
		end
    end

    def self.read_csv(file)
       items = []
       if !file.blank?
	      case File.extname(file.original_filename)
	         when ".csv" then
	         	CSV.foreach(file.path, headers: true) do |row|
	         		items << [ row["name"], row["date"], row["number"], row["description"]]
		         end
		     end
        end
        items
     end
end