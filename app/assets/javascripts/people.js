App.People = class People extends App.Base {

  index() {
    return $(() =>
      $('#dataTable').dataTable({
        ajax: Routes.people_index_path(),
        columns: [
            {searchable: true, orderable: true, data: "name"}
          ,
            {searchable: false, orderable: true, data: "date"}
          ,
            {searchable: false, orderable: true, data: "number"}
          ,
            {searchable: false, orderable: false, data: "description"}
          
        ]}));
  }
};
