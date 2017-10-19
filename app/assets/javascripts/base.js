if (!window.App) { window.App = {}; }
App.Base = class Base {

  constructor() {
    if (window.jQuery) { this.setClearEventHandlers(); } // clearing application event handlers only possible with jQuery
    return this;
  }


  /*
  Run the new action for the create action.  Generally the create action will 'render :new' if there was a problem.
  This prevents doubling the code for each action.
  */
  create() {
    if (typeof $this.new === 'function') {
      return $this.new();
    }
  }


  /*
  Run the edit action for the update action.  Generally the update action will 'render :edit' if there was a problem.
  This prevents doubling the code for each action.
  */
  update() {
    if (typeof $this.edit === 'function') {
      return $this.edit();
    }
  }


  /*
  Clear event handlers with a blank namespace.  This will prevent window and document event handlers from stacking
  when each new page is fetched.  Adding a namespace to your events will prevent them from being removed between page
  loads, i.e. "$(window).on 'scroll.app', myHandler"
  */
  setClearEventHandlers() {
    return jQuery(document).on('page:before-change', () =>
      [window, document].map((element) =>
        (() => {
          const result = [];
          const object = jQuery._data(element, 'events') || {};
          for (var event in object) {
            var handlers = object[event];
            result.push((() => {
              const result1 = [];
              for (let handler of Array.from(handlers)) {
                if ((handler != null) && (handler.namespace === '')) {
                  result1.push(jQuery(element).off(event, handler.handler));
                } else {
                  result1.push(undefined);
                }
              }
              return result1;
            })());
          }
          return result;
        })())
    );
  }
};
