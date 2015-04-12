(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        {
            name: "Dodecahedron",
            price : 2.95,
            description: '. . .',
            canPurchase: true,
            soldOut: false,
            images: [
                "images/gem-06.gif",
                "images/gem-07.gif",
                "images/gem-10.gif"
            ]
        },
        {
            name: "Pentagonal Gem",
            price : 5.95,
            description: '. . .',
            canPurchase: true,
            soldOut: false,
            images: [
                "images/gem-01.gif",
                "images/gem-03.gif",
                "images/gem-04.gif"
            ]

        }
    ];

})();
