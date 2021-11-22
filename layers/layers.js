var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_puno_limite_provincia_1 = new ol.format.GeoJSON();
var features_puno_limite_provincia_1 = format_puno_limite_provincia_1.readFeatures(json_puno_limite_provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puno_limite_provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puno_limite_provincia_1.addFeatures(features_puno_limite_provincia_1);
var lyr_puno_limite_provincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puno_limite_provincia_1, 
                style: style_puno_limite_provincia_1,
                interactive: true,
    title: 'puno_limite_provincia<br />\
    <img src="styles/legend/puno_limite_provincia_1_0.png" /> AZANGARO<br />\
    <img src="styles/legend/puno_limite_provincia_1_1.png" /> CARABAYA<br />\
    <img src="styles/legend/puno_limite_provincia_1_2.png" /> CHUCUITO<br />\
    <img src="styles/legend/puno_limite_provincia_1_3.png" /> EL COLLAO<br />\
    <img src="styles/legend/puno_limite_provincia_1_4.png" /> HUANCANE<br />\
    <img src="styles/legend/puno_limite_provincia_1_5.png" /> LAMPA<br />\
    <img src="styles/legend/puno_limite_provincia_1_6.png" /> MELGAR<br />\
    <img src="styles/legend/puno_limite_provincia_1_7.png" /> MOHO<br />\
    <img src="styles/legend/puno_limite_provincia_1_8.png" /> PUNO<br />\
    <img src="styles/legend/puno_limite_provincia_1_9.png" /> SAN ANTONIO DE PUTINA<br />\
    <img src="styles/legend/puno_limite_provincia_1_10.png" /> SAN ROMAN<br />\
    <img src="styles/legend/puno_limite_provincia_1_11.png" /> SANDIA<br />\
    <img src="styles/legend/puno_limite_provincia_1_12.png" /> YUNGUYO<br />'
        });
var format_puno_rios_2 = new ol.format.GeoJSON();
var features_puno_rios_2 = format_puno_rios_2.readFeatures(json_puno_rios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puno_rios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puno_rios_2.addFeatures(features_puno_rios_2);
var lyr_puno_rios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puno_rios_2, 
                style: style_puno_rios_2,
                interactive: true,
                title: '<img src="styles/legend/puno_rios_2.png" /> puno_rios'
            });
var format_puno_infraestructura_salud_3 = new ol.format.GeoJSON();
var features_puno_infraestructura_salud_3 = format_puno_infraestructura_salud_3.readFeatures(json_puno_infraestructura_salud_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puno_infraestructura_salud_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puno_infraestructura_salud_3.addFeatures(features_puno_infraestructura_salud_3);
var lyr_puno_infraestructura_salud_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puno_infraestructura_salud_3, 
                style: style_puno_infraestructura_salud_3,
                interactive: true,
                title: '<img src="styles/legend/puno_infraestructura_salud_3.png" /> puno_infraestructura_salud'
            });
var format_puno_centros_poblados_4 = new ol.format.GeoJSON();
var features_puno_centros_poblados_4 = format_puno_centros_poblados_4.readFeatures(json_puno_centros_poblados_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puno_centros_poblados_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puno_centros_poblados_4.addFeatures(features_puno_centros_poblados_4);
var lyr_puno_centros_poblados_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puno_centros_poblados_4, 
                style: style_puno_centros_poblados_4,
                interactive: true,
    title: 'puno_centros_poblados<br />\
    <img src="styles/legend/puno_centros_poblados_4_0.png" /> CIUDAD<br />\
    <img src="styles/legend/puno_centros_poblados_4_1.png" /> PUEBLO<br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_puno_limite_provincia_1.setVisible(true);lyr_puno_rios_2.setVisible(true);lyr_puno_infraestructura_salud_3.setVisible(true);lyr_puno_centros_poblados_4.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_puno_limite_provincia_1,lyr_puno_rios_2,lyr_puno_infraestructura_salud_3,lyr_puno_centros_poblados_4];
lyr_puno_limite_provincia_1.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'ccdd': 'ccdd', 'nombdep': 'nombdep', 'ccpp': 'ccpp', 'nombprov': 'nombprov', 'capital': 'capital', 'idprov': 'idprov', 'shape_star': 'shape_star', 'shape_stle': 'shape_stle', 'orig_fid': 'orig_fid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_puno_rios_2.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'clasificac': 'clasificac', 'nombre': 'nombre', 'ubigeo': 'ubigeo', 'nomdep': 'nomdep', 'ccdd': 'ccdd', 'nomprov': 'nomprov', 'ccpp': 'ccpp', 'nomdist': 'nomdist', 'ccdi': 'ccdi', 'idprov': 'idprov', 'shape_stle': 'shape_stle', 'orig_fid': 'orig_fid', 'shape_leng': 'shape_leng', 'tipo': 'tipo', });
lyr_puno_infraestructura_salud_3.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'id': 'id', 'institucio': 'institucio', 'nombre': 'nombre', 'clasificac': 'clasificac', 'tipo': 'tipo', 'departamen': 'departamen', 'provincia': 'provincia', 'distrito': 'distrito', 'ubigeo': 'ubigeo', 'direccion': 'direccion', 'disa': 'disa', 'red': 'red', 'microrred': 'microrred', 'u_ejecutor': 'u_ejecutor', 'categoria': 'categoria', 'telefono': 'telefono', 'inicio': 'inicio', 'responsabl': 'responsabl', 'estado': 'estado', 'condicion': 'condicion', 'norte': 'norte', 'este': 'este', 'cota': 'cota', 'camas': 'camas', });
lyr_puno_centros_poblados_4.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'provincia': 'provincia', 'distrito': 'distrito', 'region_nat': 'region_nat', 'longitud': 'longitud', 'latitud': 'latitud', 'categoria': 'categoria', 'codigo': 'codigo', 'ubigeo': 'ubigeo', 'departamen': 'departamen', 'altitud': 'altitud', 'descripcio': 'descripcio', 'cpv2017_gi': 'cpv2017_gi', 'poblacion': 'poblacion', 'origen': 'origen', 'ccdd': 'ccdd', 'ccpp': 'ccpp', 'ccdi': 'ccdi', 'cod_grupo': 'cod_grupo', 'flag_tipo_': 'flag_tipo_', });
lyr_puno_limite_provincia_1.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'ccdd': 'TextEdit', 'nombdep': 'TextEdit', 'ccpp': 'TextEdit', 'nombprov': 'TextEdit', 'capital': 'TextEdit', 'idprov': 'TextEdit', 'shape_star': 'TextEdit', 'shape_stle': 'TextEdit', 'orig_fid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_puno_rios_2.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'clasificac': 'TextEdit', 'nombre': 'TextEdit', 'ubigeo': 'TextEdit', 'nomdep': 'TextEdit', 'ccdd': 'TextEdit', 'nomprov': 'TextEdit', 'ccpp': 'TextEdit', 'nomdist': 'TextEdit', 'ccdi': 'TextEdit', 'idprov': 'TextEdit', 'shape_stle': 'TextEdit', 'orig_fid': 'TextEdit', 'shape_leng': 'TextEdit', 'tipo': 'TextEdit', });
lyr_puno_infraestructura_salud_3.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'institucio': 'TextEdit', 'nombre': 'TextEdit', 'clasificac': 'TextEdit', 'tipo': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'ubigeo': 'TextEdit', 'direccion': 'TextEdit', 'disa': 'TextEdit', 'red': 'TextEdit', 'microrred': 'TextEdit', 'u_ejecutor': 'TextEdit', 'categoria': 'TextEdit', 'telefono': 'TextEdit', 'inicio': 'TextEdit', 'responsabl': 'TextEdit', 'estado': 'TextEdit', 'condicion': 'TextEdit', 'norte': 'TextEdit', 'este': 'TextEdit', 'cota': 'TextEdit', 'camas': 'TextEdit', });
lyr_puno_centros_poblados_4.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'region_nat': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'categoria': 'TextEdit', 'codigo': 'TextEdit', 'ubigeo': 'TextEdit', 'departamen': 'TextEdit', 'altitud': 'TextEdit', 'descripcio': 'TextEdit', 'cpv2017_gi': 'TextEdit', 'poblacion': 'TextEdit', 'origen': 'TextEdit', 'ccdd': 'TextEdit', 'ccpp': 'TextEdit', 'ccdi': 'TextEdit', 'cod_grupo': 'TextEdit', 'flag_tipo_': 'TextEdit', });
lyr_puno_limite_provincia_1.set('fieldLabels', {'gid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'ccdd': 'no label', 'nombdep': 'no label', 'ccpp': 'no label', 'nombprov': 'no label', 'capital': 'no label', 'idprov': 'no label', 'shape_star': 'no label', 'shape_stle': 'no label', 'orig_fid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_puno_rios_2.set('fieldLabels', {'gid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'clasificac': 'no label', 'nombre': 'no label', 'ubigeo': 'no label', 'nomdep': 'no label', 'ccdd': 'no label', 'nomprov': 'no label', 'ccpp': 'no label', 'nomdist': 'no label', 'ccdi': 'no label', 'idprov': 'no label', 'shape_stle': 'no label', 'orig_fid': 'no label', 'shape_leng': 'no label', 'tipo': 'no label', });
lyr_puno_infraestructura_salud_3.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'id': 'no label', 'institucio': 'no label', 'nombre': 'no label', 'clasificac': 'no label', 'tipo': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'distrito': 'no label', 'ubigeo': 'no label', 'direccion': 'no label', 'disa': 'no label', 'red': 'no label', 'microrred': 'no label', 'u_ejecutor': 'no label', 'categoria': 'no label', 'telefono': 'no label', 'inicio': 'no label', 'responsabl': 'no label', 'estado': 'no label', 'condicion': 'no label', 'norte': 'no label', 'este': 'no label', 'cota': 'no label', 'camas': 'no label', });
lyr_puno_centros_poblados_4.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'provincia': 'header label', 'distrito': 'no label', 'region_nat': 'no label', 'longitud': 'no label', 'latitud': 'no label', 'categoria': 'no label', 'codigo': 'no label', 'ubigeo': 'no label', 'departamen': 'no label', 'altitud': 'no label', 'descripcio': 'no label', 'cpv2017_gi': 'no label', 'poblacion': 'no label', 'origen': 'no label', 'ccdd': 'no label', 'ccpp': 'no label', 'ccdi': 'no label', 'cod_grupo': 'no label', 'flag_tipo_': 'no label', });
lyr_puno_centros_poblados_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});