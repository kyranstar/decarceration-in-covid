var cases_prison_data_csv = `STATE,CASES,FIPS
Texas,1342,48
Florida,1040,12
California,763,06
Ohio,1143,39
Arkansas,2539,05
Michigan,1128,26
Tennessee,1604,47
New Jersey,1782,34
Virginia,752,51
North Carolina,462,37
Connecticut,1404,09
Arizona,352,04
Georgia,258,13
South Carolina,567,45
Kansas,1021,20
Idaho,1186,16
Louisiana,620,22
Colorado,544,08
Kentucky,743,21
Indiana,293,18
Maryland,345,24
New York,156,36
Missouri,238,29
Delaware,1250,10
New Mexico,798,35
Minnesota,606,27
Oregon,351,41
Mississippi,246,28
Massachusetts,547,25
Iowa,497,19
Illinois,117,17
Washington,227,53
Wisconsin,142,55
Pennsylvania,66,42
Alabama,109,01
Oklahoma,66,40
Vermont,1068,50
West Virginia,257,54
Utah,72,49
Alaska,55,02
Rhode Island,92,44
Wyoming,75,56
Montana,33,30
North Dakota,80,38
Nebraska,19,31
South Dakota,15,46
Maine,22,23
New Hampshire,4,33
Hawaii,0,15`

var cost_prison_data_csv = `Name,FIPS,Cost
Alabama,01,14780
Alaska,02,52633
Arizona,04,25397
Arkansas,05,20915
California,06,64642
Colorado,08,39303
Connecticut,09,62159
Delaware,10,39080
Florida,12,19069
Georgia,13,19977
Hawaii,15,29425
Idaho,16,22182
Illinois,17,33507
Indiana,18,18065
Iowa,19,37908
Kansas,20,24511
Kentucky,21,16681
Louisiana,22,16251
Maryland,24,44601
Massachusetts,25,55170
Michigan,26,35809
Minnesota,27,41366
Missouri,29,22187
Montana,30,33578
Nevada,32,17851
New Jersey,34,61603
New Mexico,35,36832
New York,36,69355
North Carolina,37,30180
North Dakota,38,38601
Ohio,39,26509
Oklahoma,40,16497
Oregon,41,44021
Pennsylvania,42,42727
Rhode Island,44,58564
South Carolina,45,20053
South Dakota,46,20748
Tennessee,47,23468
Texas,48,22012
Utah,49,22119
Vermont,50,57615
Virginia,51,21299
Washington,53,37841
West Virginia,54,27458
Wisconsin,55,38644`

var hotel_data_csv = `State,FIPS,Unhoused Prisoners
Louisiana,22,0.13324037263395241
Oklahoma,40,0.23401493021746186
Mississippi,28,0.03334957500947431
Arkansas,05,0.17816729531839362
Arizona,04,0.14397834239872837
Texas,48,0.12854096862625647
Missouri,29,0.06449435444280806
Kentucky,21,0.1911720973703216
Georgia,13,0.0
Alabama,01,0.0622154779969651
Florida,12,0.0
South Dakota,46,0.0
Nevada,32,0.0
Idaho,16,0.09481424148606811
Ohio,39,0.21867593923617856
Virginia,51,0.0
Wyoming,56,0.0
Tennessee,47,0.0
Delaware,10,0.06812592228234136
Michigan,26,0.12345585640094792
West Virginia,54,0.0
Wisconsin,55,0.0
Indiana,18,0.024614437906234375
South Carolina,45,0.0
Pennsylvania,42,0.09782834796355619
Oregon,41,0.0
Colorado,08,0.0
Montana,30,0.0
New Mexico,35,0.0
North Carolina,37,0.0
Kansas,20,0.0
California,06,0.0
Illinois,17,0.0
Maryland,24,0.0
Iowa,19,0.0
Nebraska,31,0.0
Connecticut,09,0.0
Washington,53,0.0
Alaska,02,0.0
New York,36,0.0
Hawaii,15,0.0
North Dakota,38,0.0
New Jersey,34,0.0
Utah,49,0.0
New Hampshire,33,0.0
Minnesota,27,0.0
Vermont,50,0.0
Rhode Island,44,0.0
Maine,23,0.0
Massachusetts,25,0.0`

totel_cost_data_csv = `State,FIPS,Cost
Louisiana,22,46000263.500000015
Oklahoma,40,37161019.35
Arkansas,05,24257575.4
Arizona,04,51884914.95
Texas,48,124278621.60000008
Missouri,29,34971544.69656463
Kentucky,21,31112673.250000007
Georgia,13,52677212.100000024
Alabama,01,35867129.400000006
Florida,12,133325755.86096877
South Dakota,46,5260363.227273544
Nevada,32,19526972.85
Idaho,16,5981830.800000001
Ohio,39,32412095.33850184
Virginia,51,31954022.10000001
Tennessee,47,18635589.0
Delaware,10,-2369461.5
Michigan,26,-5705954.099999994
West Virginia,54,4109459.3999999985
Wisconsin,55,-19836543.099999994
Indiana,18,30768283.350000016
South Carolina,45,19239091.550000004
Pennsylvania,42,-61671730.899999976
Oregon,41,-9570680.0
Colorado,08,-1577790.4755943716
Montana,30,-327088.0999999996
New Mexico,35,-4582628.050000001
North Carolina,37,-993216.4499999881
Kansas,20,5218871.250000004
California,06,-313399520.0
Illinois,17,-5685855.75
Maryland,24,-16020062.045895413
Iowa,19,-7207749.049999997
Connecticut,09,-24919691.72209803
Washington,53,5233789.0
Alaska,02,-3206392.9838964064
New York,36,-152265230.20597953
Hawaii,15,2344789.5410154015
North Dakota,38,-1488997.749999999
New Jersey,34,-55086531.98152251
Utah,49,5007664.150000002
Minnesota,27,-6030253.853247911
Vermont,50,-2232117.159978873
Rhode Island,44,-3868848.8000000007
Massachusetts,25,-12139404.299999997`

function convertCSVToJSON(str, delimiter = ',') {
    const titles = str.slice(0, str.indexOf('\n')).split(delimiter);
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');
    return rows.map(row => {
        const values = row.split(delimiter);
        return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
    });
};
var cases_prison_data = convertCSVToJSON(cases_prison_data_csv)
var cost_prison_data = convertCSVToJSON(cost_prison_data_csv)
var finance_data = convertCSVToJSON(totel_cost_data_csv)
var hotel_data = convertCSVToJSON(hotel_data_csv)
