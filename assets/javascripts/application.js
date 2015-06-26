var Application = function () {
	var initialized = false;

	return {
		initialize: function()
		{
			jQuery(document).ready( function() {
                jQuery('#preloader').fadeOut(); // Hide preloader, when everything is ready...

                initialized = true;
                console.log('Application Initialized');
            });
		},
	}
}();
