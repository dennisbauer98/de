var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EZG_WhiteBlank_1 = new ol.format.GeoJSON();
var features_EZG_WhiteBlank_1 = format_EZG_WhiteBlank_1.readFeatures(json_EZG_WhiteBlank_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EZG_WhiteBlank_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EZG_WhiteBlank_1.addFeatures(features_EZG_WhiteBlank_1);
var lyr_EZG_WhiteBlank_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EZG_WhiteBlank_1, 
                style: style_EZG_WhiteBlank_1,
                popuplayertitle: 'EZG_WhiteBlank',
                interactive: true,
                title: '<img src="styles/legend/EZG_WhiteBlank_1.png" /> EZG_WhiteBlank'
            });
var format_EZG_gesamt_2 = new ol.format.GeoJSON();
var features_EZG_gesamt_2 = format_EZG_gesamt_2.readFeatures(json_EZG_gesamt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EZG_gesamt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EZG_gesamt_2.addFeatures(features_EZG_gesamt_2);
var lyr_EZG_gesamt_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EZG_gesamt_2, 
                style: style_EZG_gesamt_2,
                popuplayertitle: 'EZG_gesamt',
                interactive: true,
                title: '<img src="styles/legend/EZG_gesamt_2.png" /> EZG_gesamt'
            });
var format_PP_EW_Schacht_R_3 = new ol.format.GeoJSON();
var features_PP_EW_Schacht_R_3 = format_PP_EW_Schacht_R_3.readFeatures(json_PP_EW_Schacht_R_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PP_EW_Schacht_R_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PP_EW_Schacht_R_3.addFeatures(features_PP_EW_Schacht_R_3);
var lyr_PP_EW_Schacht_R_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PP_EW_Schacht_R_3, 
                style: style_PP_EW_Schacht_R_3,
                popuplayertitle: 'PP_EW_Schacht_R',
                interactive: true,
    title: 'PP_EW_Schacht_R<br />\
    <img src="styles/legend/PP_EW_Schacht_R_3_0.png" /> Auslaufbauwerk<br />\
    <img src="styles/legend/PP_EW_Schacht_R_3_1.png" /> Auslass, fiktiv<br />\
    <img src="styles/legend/PP_EW_Schacht_R_3_2.png" /> Schacht, fiktiv<br />\
    <img src="styles/legend/PP_EW_Schacht_R_3_3.png" /> Schacht, vorhanden<br />\
    <img src="styles/legend/PP_EW_Schacht_R_3_4.png" /> Nicht im Modell<br />' });
var format_Blattschnitt_A0_4 = new ol.format.GeoJSON();
var features_Blattschnitt_A0_4 = format_Blattschnitt_A0_4.readFeatures(json_Blattschnitt_A0_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blattschnitt_A0_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blattschnitt_A0_4.addFeatures(features_Blattschnitt_A0_4);
var lyr_Blattschnitt_A0_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Blattschnitt_A0_4, 
                style: style_Blattschnitt_A0_4,
                popuplayertitle: 'Blattschnitt_A0',
                interactive: true,
                title: '<img src="styles/legend/Blattschnitt_A0_4.png" /> Blattschnitt_A0'
            });
var group_Plan = new ol.layer.Group({
                                layers: [lyr_EZG_WhiteBlank_1,lyr_EZG_gesamt_2,lyr_PP_EW_Schacht_R_3,],
                                fold: 'open',
                                title: 'Plan'});
var group_Hinterlegungen = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Hinterlegungen'});
var group_K5_SW = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'K5_SW'});
var group_Legende = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Legende'});

lyr_OSMStandard_0.setVisible(true);lyr_EZG_WhiteBlank_1.setVisible(true);lyr_EZG_gesamt_2.setVisible(true);lyr_PP_EW_Schacht_R_3.setVisible(true);lyr_Blattschnitt_A0_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_Plan,lyr_Blattschnitt_A0_4];
lyr_EZG_WhiteBlank_1.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'cat_': 'cat_', 'uuid': 'uuid', 'bezeich': 'bezeich', 'afl': 'afl', 'fsko': 'fsko', 'zae': 'zae', 'nen': 'nen', 'gmk': 'gmk', 'namgmk': 'namgmk', 'fln': 'fln', 'gdz': 'gdz', 'namgem': 'namgem', 'zde': 'zde', 'dst': 'dst', 'beg': 'beg', 'statusdat': 'statusdat', 'OBJECTID': 'OBJECTID', 'ISTGEBUCHT': 'ISTGEBUCHT', 'innerhalb_rezg': 'innerhalb_rezg', 'area': 'area', 'shape_index': 'shape_index', 'Bereich': 'Bereich', 'Aufteilen': 'Aufteilen', 'pp_kommentar': 'pp_kommentar', 'vorlaeufiger_name': 'vorlaeufiger_name', });
lyr_EZG_gesamt_2.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'cat_': 'cat_', 'uuid': 'uuid', 'bezeich': 'bezeich', 'afl': 'afl', 'fsko': 'fsko', 'zae': 'zae', 'nen': 'nen', 'gmk': 'gmk', 'namgmk': 'namgmk', 'fln': 'fln', 'gdz': 'gdz', 'namgem': 'namgem', 'zde': 'zde', 'dst': 'dst', 'beg': 'beg', 'statusdat': 'statusdat', 'OBJECTID': 'OBJECTID', 'ISTGEBUCHT': 'ISTGEBUCHT', 'innerhalb_rezg': 'innerhalb_rezg', 'area': 'area', 'shape_index': 'shape_index', 'Bereich': 'Bereich', 'Aufteilen': 'Aufteilen', 'pp_kommentar': 'pp_kommentar', 'vorlaeufiger_name': 'vorlaeufiger_name', });
lyr_PP_EW_Schacht_R_3.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'objectid': 'objectid', 'obj_kennz': 'obj_kennz', 'bwb_strassen_id': 'bwb_strassen_id', 'strasse': 'strasse', 'schachtnummer': 'schachtnummer', 'entwaesserungskennzeichen': 'entwaesserungskennzeichen', 'schachtart': 'schachtart', 'schachtart_lang': 'schachtart_lang', 'grafische_darstellung': 'grafische_darstellung', 'schachtprofil': 'schachtprofil', 'datum_baubeginn': 'datum_baubeginn', 'datum_bauende': 'datum_bauende', 'bauendequalitaet': 'bauendequalitaet', 'baujahresqualitaet': 'baujahresqualitaet', 'stilllegungsdatum': 'stilllegungsdatum', 'material': 'material', 'material_lang': 'material_lang', 'schachttiefe': 'schachttiefe', 'hoehe_schachtsohle': 'hoehe_schachtsohle', 'qualitaet_hoehe_schachtsohle': 'qualitaet_hoehe_schachtsohle', 'hoehe_deckel': 'hoehe_deckel', 'qualitaet_hoehe_deckel': 'qualitaet_hoehe_deckel', 'abstand_verzogener_deckel': 'abstand_verzogener_deckel', 'gruendungsart': 'gruendungsart', 'vermessungsnummer': 'vermessungsnummer', 'qualitaet_lage': 'qualitaet_lage', 'betriebszustand': 'betriebszustand', 'oertliche_lage': 'oertliche_lage', 'bestandsplan': 'bestandsplan', 'eigentuemer': 'eigentuemer', 'betreiber': 'betreiber', 'auslaufbauwerk': 'auslaufbauwerk', 'grundleitung': 'grundleitung', 'doklinks': 'doklinks', 'symfb': 'symfb', 'diffstat': 'diffstat', 'pp_modell': 'pp_modell', 'pp_kommentar': 'pp_kommentar', 'baujahr': 'baujahr', 'pp_schachttiefe': 'pp_schachttiefe', 'HE_scheitelhoehe': 'HE_scheitelhoehe', 'pp_ueberdeckung': 'pp_ueberdeckung', 'pp_plausi_anpassungen': 'pp_plausi_anpassungen', 'dgm_hoehe': 'dgm_hoehe', 'pp_druckdicht': 'pp_druckdicht', 'pp_durchmesser': 'pp_durchmesser', 'risikoklasse_bwb': 'risikoklasse_bwb', 'risikoklasse_pp': 'risikoklasse_pp', 'risikoklasse_beschreibung': 'risikoklasse_beschreibung', 'tmp_bearb': 'tmp_bearb', 'pp_hochpunkt': 'pp_hochpunkt', 'bezgfk_puffer_30m': 'bezgfk_puffer_30m', 'anf_nutzung_puffer_30m': 'anf_nutzung_puffer_30m', 'risikoklasse_pp_int': 'risikoklasse_pp_int', 'tmp_bearb_int': 'tmp_bearb_int', 'risikoklasse_bearb_nach_SRS_20250930': 'risikoklasse_bearb_nach_SRS_20250930', 'Begehung': 'Begehung', 'zul_ueberstauh_srs': 'zul_ueberstauh_srs', 'vorh_ueberstauh_srs': 'vorh_ueberstauh_srs', 'ueberstau_T3': 'ueberstau_T3', 'wasserstand_unter_GOK_T3': 'wasserstand_unter_GOK_T3', 'he_zusatztext_1': 'he_zusatztext_1', 'aussenwasserstand': 'aussenwasserstand', 'tiefste_Rohrsohle': 'tiefste_Rohrsohle', });
lyr_Blattschnitt_A0_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'EZG': 'EZG', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_EZG_WhiteBlank_1.set('fieldImages', {'fid': 'TextEdit', 'cat': 'Range', 'cat_': 'Range', 'uuid': 'TextEdit', 'bezeich': 'TextEdit', 'afl': 'TextEdit', 'fsko': 'TextEdit', 'zae': 'TextEdit', 'nen': 'TextEdit', 'gmk': 'TextEdit', 'namgmk': 'TextEdit', 'fln': 'TextEdit', 'gdz': 'TextEdit', 'namgem': 'TextEdit', 'zde': 'TextEdit', 'dst': 'TextEdit', 'beg': 'DateTime', 'statusdat': 'DateTime', 'OBJECTID': 'TextEdit', 'ISTGEBUCHT': 'TextEdit', 'innerhalb_rezg': 'Range', 'area': 'TextEdit', 'shape_index': 'TextEdit', 'Bereich': 'TextEdit', 'Aufteilen': 'Range', 'pp_kommentar': 'TextEdit', 'vorlaeufiger_name': 'TextEdit', });
lyr_EZG_gesamt_2.set('fieldImages', {'fid': 'TextEdit', 'cat': '', 'cat_': '', 'uuid': '', 'bezeich': '', 'afl': '', 'fsko': '', 'zae': '', 'nen': '', 'gmk': '', 'namgmk': '', 'fln': '', 'gdz': '', 'namgem': '', 'zde': '', 'dst': '', 'beg': '', 'statusdat': '', 'OBJECTID': '', 'ISTGEBUCHT': '', 'innerhalb_rezg': '', 'area': 'TextEdit', 'shape_index': '', 'Bereich': '', 'Aufteilen': '', 'pp_kommentar': '', 'vorlaeufiger_name': '', });
lyr_PP_EW_Schacht_R_3.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'objectid': 'Range', 'obj_kennz': 'TextEdit', 'bwb_strassen_id': 'Range', 'strasse': 'TextEdit', 'schachtnummer': 'TextEdit', 'entwaesserungskennzeichen': 'TextEdit', 'schachtart': 'TextEdit', 'schachtart_lang': 'TextEdit', 'grafische_darstellung': 'TextEdit', 'schachtprofil': 'TextEdit', 'datum_baubeginn': 'DateTime', 'datum_bauende': 'DateTime', 'bauendequalitaet': 'TextEdit', 'baujahresqualitaet': 'TextEdit', 'stilllegungsdatum': 'DateTime', 'material': 'TextEdit', 'material_lang': 'TextEdit', 'schachttiefe': 'TextEdit', 'hoehe_schachtsohle': 'TextEdit', 'qualitaet_hoehe_schachtsohle': 'TextEdit', 'hoehe_deckel': 'TextEdit', 'qualitaet_hoehe_deckel': 'TextEdit', 'abstand_verzogener_deckel': 'TextEdit', 'gruendungsart': 'TextEdit', 'vermessungsnummer': 'TextEdit', 'qualitaet_lage': 'TextEdit', 'betriebszustand': 'TextEdit', 'oertliche_lage': 'TextEdit', 'bestandsplan': 'TextEdit', 'eigentuemer': 'TextEdit', 'betreiber': 'TextEdit', 'auslaufbauwerk': 'TextEdit', 'grundleitung': 'TextEdit', 'doklinks': 'CheckBox', 'symfb': 'Range', 'diffstat': 'TextEdit', 'pp_modell': 'Range', 'pp_kommentar': 'TextEdit', 'baujahr': '', 'pp_schachttiefe': '', 'HE_scheitelhoehe': 'TextEdit', 'pp_ueberdeckung': '', 'pp_plausi_anpassungen': '', 'dgm_hoehe': '', 'pp_druckdicht': '', 'pp_durchmesser': '', 'risikoklasse_bwb': '', 'risikoklasse_pp': '', 'risikoklasse_beschreibung': '', 'tmp_bearb': '', 'pp_hochpunkt': '', 'bezgfk_puffer_30m': '', 'anf_nutzung_puffer_30m': '', 'risikoklasse_pp_int': '', 'tmp_bearb_int': '', 'risikoklasse_bearb_nach_SRS_20250930': '', 'Begehung': '', 'zul_ueberstauh_srs': '', 'vorh_ueberstauh_srs': '', 'ueberstau_T3': 'TextEdit', 'wasserstand_unter_GOK_T3': '', 'he_zusatztext_1': '', 'aussenwasserstand': '', 'tiefste_Rohrsohle': '', });
lyr_Blattschnitt_A0_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'EZG': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_EZG_WhiteBlank_1.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'cat_': 'no label', 'uuid': 'no label', 'bezeich': 'no label', 'afl': 'no label', 'fsko': 'no label', 'zae': 'no label', 'nen': 'no label', 'gmk': 'no label', 'namgmk': 'no label', 'fln': 'no label', 'gdz': 'no label', 'namgem': 'no label', 'zde': 'no label', 'dst': 'no label', 'beg': 'no label', 'statusdat': 'no label', 'OBJECTID': 'no label', 'ISTGEBUCHT': 'no label', 'innerhalb_rezg': 'no label', 'area': 'no label', 'shape_index': 'no label', 'Bereich': 'no label', 'Aufteilen': 'no label', 'pp_kommentar': 'no label', 'vorlaeufiger_name': 'no label', });
lyr_EZG_gesamt_2.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'cat_': 'no label', 'uuid': 'no label', 'bezeich': 'no label', 'afl': 'no label', 'fsko': 'no label', 'zae': 'no label', 'nen': 'no label', 'gmk': 'no label', 'namgmk': 'no label', 'fln': 'no label', 'gdz': 'no label', 'namgem': 'no label', 'zde': 'no label', 'dst': 'no label', 'beg': 'no label', 'statusdat': 'no label', 'OBJECTID': 'no label', 'ISTGEBUCHT': 'no label', 'innerhalb_rezg': 'no label', 'area': 'no label', 'shape_index': 'no label', 'Bereich': 'no label', 'Aufteilen': 'no label', 'pp_kommentar': 'no label', 'vorlaeufiger_name': 'no label', });
lyr_PP_EW_Schacht_R_3.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'objectid': 'no label', 'obj_kennz': 'no label', 'bwb_strassen_id': 'no label', 'strasse': 'no label', 'schachtnummer': 'no label', 'entwaesserungskennzeichen': 'no label', 'schachtart': 'no label', 'schachtart_lang': 'no label', 'grafische_darstellung': 'no label', 'schachtprofil': 'no label', 'datum_baubeginn': 'no label', 'datum_bauende': 'no label', 'bauendequalitaet': 'no label', 'baujahresqualitaet': 'no label', 'stilllegungsdatum': 'no label', 'material': 'no label', 'material_lang': 'no label', 'schachttiefe': 'no label', 'hoehe_schachtsohle': 'no label', 'qualitaet_hoehe_schachtsohle': 'no label', 'hoehe_deckel': 'no label', 'qualitaet_hoehe_deckel': 'no label', 'abstand_verzogener_deckel': 'no label', 'gruendungsart': 'no label', 'vermessungsnummer': 'no label', 'qualitaet_lage': 'no label', 'betriebszustand': 'no label', 'oertliche_lage': 'no label', 'bestandsplan': 'no label', 'eigentuemer': 'no label', 'betreiber': 'no label', 'auslaufbauwerk': 'no label', 'grundleitung': 'no label', 'doklinks': 'no label', 'symfb': 'no label', 'diffstat': 'no label', 'pp_modell': 'no label', 'pp_kommentar': 'no label', 'baujahr': 'no label', 'pp_schachttiefe': 'no label', 'HE_scheitelhoehe': 'no label', 'pp_ueberdeckung': 'no label', 'pp_plausi_anpassungen': 'no label', 'dgm_hoehe': 'no label', 'pp_druckdicht': 'no label', 'pp_durchmesser': 'no label', 'risikoklasse_bwb': 'no label', 'risikoklasse_pp': 'no label', 'risikoklasse_beschreibung': 'no label', 'tmp_bearb': 'no label', 'pp_hochpunkt': 'no label', 'bezgfk_puffer_30m': 'no label', 'anf_nutzung_puffer_30m': 'no label', 'risikoklasse_pp_int': 'no label', 'tmp_bearb_int': 'no label', 'risikoklasse_bearb_nach_SRS_20250930': 'no label', 'Begehung': 'no label', 'zul_ueberstauh_srs': 'no label', 'vorh_ueberstauh_srs': 'no label', 'ueberstau_T3': 'no label', 'wasserstand_unter_GOK_T3': 'no label', 'he_zusatztext_1': 'no label', 'aussenwasserstand': 'no label', 'tiefste_Rohrsohle': 'no label', });
lyr_Blattschnitt_A0_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'EZG': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_Blattschnitt_A0_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});