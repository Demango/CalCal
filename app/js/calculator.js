var calculate = function() {
    var products = getProductData();
    var volumes = getVolumeData();

    var product = products[jQuery('#product-selector').val().replace(' ', '_')];
    var volume = volumes[jQuery('#volume-selector').val().replace(' ', '_')];
    var count = jQuery('#count').val();

    if (!count) {
        count = 1;
    }

    if (volume.type === 'weight') {
        product.density = 1;
    }

    var calories = product.density * volume.volume * product.calories * count;
    var sodium = product.density * volume.volume * product.sodium * count;

    var out = '<p>Calories: '+calories.toFixed(2)+'</p>';
    out += '<p>Sodium: '+sodium.toFixed(2)+' mg</p>';

    jQuery('#calculated-values').html(out)
}
