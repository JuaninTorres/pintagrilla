var main = function (argument) {
	console.log('main');

	var grid = new Grid();
	grid.render( $('#grid') );

	window.client = io.connect(window.location.href);

	client.on('pintar', function (data) {
		grid.pintar(data.x, data.y, data.color);
	});


    // Color picker
    $('#colorPicker').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('#colorPicker div').css('backgroundColor', '#' + hex);
            $('#color').val('#'+hex);
        }
    });
}

$(document).on('ready', main)