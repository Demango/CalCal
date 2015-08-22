jQuery(document).ready(function() {
    var products = getProductData();
    var volumes = getVolumeData();
    for (var key in products) {
        jQuery('#product-selector').append('<option>'+products[key].name+'</option>');
    }
    for (var key in volumes) {
        jQuery('#volume-selector').append('<option>'+volumes[key].name+'</option>');
    }
    jQuery('#count').val(1);
})
