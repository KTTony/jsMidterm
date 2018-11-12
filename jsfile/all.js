var xhr = new XMLHttpRequest();
xhr.open('get', 'https://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery', true);
xhr.send();
var data;
xhr.onload = function () {
    data = JSON.parse(xhr.responseText);
    var strZipn = '<option value="0">請選擇地區</option>';
    var strInfo = '<option value="0">請選擇災害類型</option>';
    var name = {};
    var Info = {};
    for (var i = 0; i < data.length; i++) {
        var nc = data[i].ZipName_;
        if (name[nc] == undefined) {
            name[nc] = '';
            strZipn += '<option value="' + nc + '">' + nc + '</option>';
        }
        var ic = data[i].InformDesc_;
        if (Info[ic] == undefined) {
            Info[ic] = '';
            strInfo += '<option value="' + ic + '">' + ic + '</option>'
        }
    }
    document.querySelector('#area').innerHTML = strZipn;
    document.querySelector('#type').innerHTML = strInfo;
};

function search() {
    var area = document.querySelector('#area').value;
    var type = document.querySelector('#type').value;
    var print = '';
    var carry = '';
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        var nc = data[i].ZipName_;
        if (nc == area) {
            var ic = data[i].InformDesc_;
            if (ic == type) {
                count++;
                carry += '<li><h4>地點：' + data[i].address_ + '</h4>';
                carry += '<h5>報案狀況：' + data[i].BeforeDesc_ + '</h5></li>';
            }
        }
    }
    print = '<h3><span class="areaPrint">' + area + ' </span><span class="typePrint">' + type + '</span>有 <em>' + count + '</em> 處</h3><ul>' + carry + '</ul>';
    document.querySelector('.output').innerHTML = print;
}
// ZipName_
// InformDesc_