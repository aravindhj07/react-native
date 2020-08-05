import Config from "./Config";

// For Screen Styles Start : By Mathan 20 July 2020
export function getIndexedStyle(index, screenStyleJson) {
    if(Object.keys(screenStyleJson).length > 0){
        var item = screenStyleJson[index]
        if(item != undefined && item != null){
            return item
        }
    }
    return {}
}

export function convertStyleJsonIntoNewFormat(screenKeyJson) {
    var styles = {}
    if(screenKeyJson != undefined){
        Object.keys(screenKeyJson).forEach(function (key, index) {
            var item = screenKeyJson[key]
            if(checkNullAndReturnString(item.style)){
                var style = item.style
                if(checkNullAndReturnString(style.fontSize)){
                    if(style.fontSize.replace != undefined)
                        style.fontSize = parseFloat(style.fontSize.replace( /px/g, ''))
                }
                if(checkNullAndReturnString(style.letterSpacing)){
                    if(style.letterSpacing.replace != undefined)
                        style.letterSpacing = parseFloat(style.letterSpacing.replace( /px/g, ''))
                }
                styles[key] = item.style
            }
        });
    }
    return styles;
}
// For Screen Styles End

export function doGetConnect(subUrl) {
    return fetch(Config.dataUrl + subUrl, {
        method: "GET",
        mode: 'cors',
        redirect: 'follow',
    }).then(
        function (response) {
            return response.json();
        }
    ).then(function (dataresponse) {
        return dataresponse;
    });
}

export function isObject(obj) {
    return obj === Object(obj);
}

export function getMessageFromId(messageJson, id, message) {
    if(messageJson != undefined && messageJson != null && checkNullAndReturnString(messageJson)){
        let msgJson = messageJson[id];
        if(msgJson != undefined && msgJson != null && checkNullAndReturnString(msgJson)) {
            return msgJson["message"]
        }
    }
    return message
}

export function refilljsonData(json, data, type)
{
    let screenJson  = json

    if(type == 'style')
    {
        if(checkNullAndReturnString(screenJson[data]))
        {
            if(isObject(screenJson[data]))
            {
                if(checkNullAndReturnString(screenJson[data].letterSpacing) && typeof screenJson[data].letterSpacing == "string")
                {
                    screenJson[data].letterSpacing = parseFloat(screenJson[data].letterSpacing.replace( /px/g, ''))
                }
                else {
                    if(!checkNullAndReturnString(screenJson[data].letterSpacing))
                    {
                        delete screenJson[data].letterSpacing
                    }
                }
                if(checkNullAndReturnString(screenJson[data].fontSize) && typeof screenJson[data].fontSize == "string")
                {
                    screenJson[data].fontSize = parseFloat(screenJson[data].fontSize.replace( /px/g, ''))
            }
                else {
                    if(!checkNullAndReturnString(screenJson[data].fontSize))
                    {
                        delete screenJson[data].fontSize
                    }
                }
               /* if(checkNullAndReturnString(screenJson[data].fontFamily) && typeof screenJson[data].fontFamily == "string")
                {
                    screenJson[data].fontFamily = screenJson[data].fontFamily.replace( 'Open-Sans-Light', 'OpenSans-Light')
                    screenJson[data].fontFamily = screenJson[data].fontFamily.replace( 'Open-Sans-Regular', 'OpenSans-Regular')
                    screenJson[data].fontFamily = screenJson[data].fontFamily.replace( 'Open-Sans-Bold', 'OpenSans-Bold')
                }*/

                return screenJson[data]
            }
        }
        return {}
    }
    else {
        if(checkNullAndReturnString(screenJson[data]))
        {
            return screenJson[data]
        }
        return null
    }
}

export function refilljsonDataMappingCat(json, data, data1)
{
    var screenJson = json;
    if(checkNullAndReturnString(screenJson[data]))
    {
        if(checkNullAndReturnString(screenJson[data][data1]))
        {
            return screenJson[data][data1]
        }
        if(isObject(screenJson[data]))
        {
            return screenJson[data]
        }
        return screenJson[data]
    }
    return null
}

export function refilljsonScreenData(json, index, data, data1)
{
    var screenJson = json;
    if(checkNullAndReturnString(screenJson[index]))
    {
        var indexJson = screenJson[index]
        if(data == "label" || data == "placeholderColor")
        {
            if(checkNullAndReturnString(indexJson[data]))
            {
                return indexJson[data]
            }
        }
        if(data == "style")
        {
            if(checkNullAndReturnString(indexJson[data]))
            {

                if(checkNullAndReturnString(indexJson[data].fontSize) && typeof indexJson[data].fontSize == "string")
                {
                    indexJson[data].fontSize = parseFloat(indexJson[data].fontSize.replace( /px/g, ''))
                }
                else {
                    if(!checkNullAndReturnString(indexJson[data].fontSize))
                    {
                        delete indexJson[data].fontSize
                    }
                }

                if(checkNullAndReturnString(indexJson[data].letterSpacing) && typeof indexJson[data].letterSpacing == "string")
                {
                    indexJson[data].letterSpacing = parseFloat(indexJson[data].letterSpacing.replace( /px/g, ''))
                }
                else {
                    if (!checkNullAndReturnString(indexJson[data].letterSpacing)) {
                        delete indexJson[data].letterSpacing
                    }
                }




                        //  indexJson[data].fontSize = parseFloat(indexJson[data].fontSize.toString().replace( /px/g, ''))
                //indexJson[data].letterSpacing = parseFloat(indexJson[data].letterSpacing.toString().replace( /px/g, ''))
                return indexJson[data]
            }
            return {}
        }
        if(data == "colors")
        {
            if(checkNullAndReturnString(indexJson[data]))
            {
                if(checkNullAndReturnString(indexJson[data][data1]))
                {
                    return indexJson[data][data1]
                }
            }
            return ""
        }
    }
    return null
}
export function checkNullAndReturnString(str) {
    if(str!=null && str!=undefined && str!="")
    {
        return true
    }
    return false
}

export function getTimeDiff(Current) {

    var CalcTime = new Date().getTime() - Current ; // Current - Initiallized
    var Years = Math.floor(CalcTime / 1000 / 60 / 60 / 24 / 7 / 4 / 12);
    CalcTime -= Years * (1000 * 60 * 60 * 24 * 7 * 4 * 12);
    var Months = Math.floor(CalcTime / 1000 / 60 / 60 / 24 / 7 / 4);
    CalcTime -= Months * (1000 * 60 * 60 * 24 * 7 * 4);
    var Weeks = Math.floor(CalcTime / 1000 / 60 / 60 / 24 / 7);
    CalcTime -= Weeks * (1000 * 60 * 60 * 24 * 7);
    // The calculation seconds to days works properly & The calculation of weeks to years may be off slightly
    var Days = Math.floor(CalcTime / 1000 / 60 / 60 / 24);
    CalcTime -= Days * (1000 * 60 * 60 * 24);
    var Hours = Math.floor(CalcTime / 1000 / 60 / 60);
    CalcTime -= Hours * (1000 * 60 * 60);
    var Minutes = Math.floor(CalcTime / 1000 / 60);
    CalcTime -= Minutes * (1000 * 60);
    var Seconds = Math.floor(CalcTime / 1000 / 60);
    return (Years != 0 ? Years + ((Years == 1) ? 'year ' : 'years ') : '') + (Months != 0 ? Months + ((Months == 1) ? 'month ' : 'months ') : '') + (Weeks != 0 ? Weeks + ((Weeks == 1) ? 'week ' : 'weeks ') : '') + (Days != 0 ? Days + ((Days == 1) ? 'day ' : 'days ') : '') + (Hours != 0 ? ((Hours <= 9) ? '0' + Hours : Hours) + ((Hours == 1) ? 'hr ' : 'hrs ') : '') + (Minutes != 0 ? ((Minutes <= 9) ?  Minutes : Minutes) + ((Minutes == 1) ? 'min ' : 'mins ') : '') + (Seconds != 0 ? ((Seconds <= 9) ?  Seconds : Seconds) + ((Seconds == 1) ? 'sec ' : 'secs ') : '');

}

export function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist;
    }
}

export function getParsedDate(strDate){
    var strSplitDate = String(strDate).split('-');
    if (strSplitDate[1] < 10) {
        strSplitDate[1] = '0' + strSplitDate[1];
    }
    if (strSplitDate[2] < 10) {
        strSplitDate[2] = '0' + strSplitDate[2];
    }
    var date = new Date(strSplitDate[0]+"-"+strSplitDate[1]+"-"+strSplitDate[2]);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date =  yyyy + "-" + mm + "-" + dd;
    return date.toString();
}

export async function doConnect(subUrl, method, postJson) {
    return fetch(Config.dataUrl + subUrl, {
        method: method,
        mode: 'cors',
        redirect: 'follow',
        body: JSON.stringify(postJson),


    }).then(
        function (response) {
            return response.json();
        }
    ).then(function (dataresponse) {
        return dataresponse;
    });
}

export function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year;
    return time;
}

export function getMonthAndDate(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = month + ' ' + date;
    return time;
}

export function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
