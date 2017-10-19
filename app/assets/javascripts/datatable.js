$(function() {
  return $.extend($.fn.DataTable.defaults, {
    searching: true,
    ordering: true,
    deferRender: true,
    lengthMenu: [5,10],
    serverSide: true,

    initComplete() {
      return $('.filters input, .filters select', this).on('change', e => {
        const th = $(e.target).closest("th");
        
        return this.api().column(th.index()).search($(e.target).val()).draw();
      });
    }
  }
  );
});