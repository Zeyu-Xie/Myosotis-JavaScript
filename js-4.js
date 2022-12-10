function queryStringfy(obj) {
    let str=""
    for(let i in obj) str+=`${i}=${obj[i]}&`
    return str.slice(0,-1)
}

function ajax(options) {

    let defaultoptions= {
        url:"http://localhost:3000/users",
        method:"GET",
        async:true,
        data: "",
        headers:{
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(res) {
            console.log("Success",res)
        },
        error: function(err) {
            console.log("Error",err)
        }
    }
    let {url,method,async,data,headers,success,error}= {
        ...defaultoptions,
        ...options
    }

    if(typeof(data)=="object" && headers["content-type"]?.indexOf("json") > -1) {
        data=JSON.stringify(data)
    }
    else {
        data=queryStringfy(data)
    }

    xhr=new XMLHttpRequest()

    if(/^get$/i.test(method)) url+="?"+data

    xhr.open(method,url,async)
    xhr.onload=function() {
        if(!/^2\d{2}$/.test(xhr.status)) {
            error(`Wrong Status Code: ${xhr.status}`)
            return
        }
        try {
            let result=JSON.parse(xhr.responseText)
            success(result)
        } catch(err) {
            error("Request fails! Because the server didn't return a JSON string.")
        }
    }

    for(let i in headers) xhr.setRequestHeader(i,headers[i])

    if(/^get$/i.test(method)) {
        xhr.send()
    } else {
        xhr.send(data)
    }
}
