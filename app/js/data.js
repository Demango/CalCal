var getProductData = function() {
    return {
        rice:{
            name: 'rice',
            calories: 1.3,
            sodium: 0.01,
            density: 0.9
        },
        strawberry: {
            name: 'strawberry',
            calories: 0.33,
            sodium: 0.01,
            density: 1.4
        },
        soy_sauce: {
            name: 'soy sauce',
            calories: 0.53,
            sodium: 54.93,
            density: 1
        }
    };
};

var getVolumeData = function() {
    return {
        tablespoon: {
            name: 'tablespoon',
            abbreviated: 'tbsp',
            volume: 25,
            type: 'volume'
        },
        teaspoon: {
            name: 'teaspoon',
            abbreviated: 'tspn',
            volume: 5,
            type: 'volume'
        },
        cup: {
            name: 'cup',
            volume: 250,
            type: 'volume'
        },
        g: {
            name: 'g',
            volume: 1,
            type: 'weight'
        },
        kg: {
            name: 'kg',
            volume: 1000,
            type: 'weight'
        }
    };
}
