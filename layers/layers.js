var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_2_modified_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Россошь 2_modified<br />\
    <img src="styles/legend/2_modified_1_0.png" /> 1<br />\
    <img src="styles/legend/2_modified_1_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2_modified_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4403650.518350, 6474531.334954, 4409177.732817, 6480187.870897]
        })
    });

lyr_GoogleSatellite_0.setVisible(true);lyr_2_modified_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_2_modified_1];
