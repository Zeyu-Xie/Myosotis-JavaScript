function queryStringfy(obj) {
    let str=""
    for(let i in obj) str+=`${i}=${obj[i]}&`
    return str.slice(0,-1)
}

function ajax(options) {

    let defaultoptions= {
        url:"",
        method:"GET",
        async:true,
        data:{},
        headers:{},
        success: function() {},
        error: function() {}
    }
    let {url,method,async,data,headers,success,error}= {
        ...defaultoptions,
        ...options
    }

    console.log(url,method,async,data,headers,success,error)

    if(typeof(data)=="object" && headers["content-type"]?.indexOf("json")>-1) {
        data=JSON.stringify(data)
    }
    else {
        data=queryStringfy(data)
    }
    console.log(data)

    xhr=new XMLHttpRequest()

    if(/^get$/i.test(method) && data) {
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
    }

    for(let i in headers) xhr.setRequestHeader(i,headers[i])

    if(/^get$/i.test(method)) {
        xhr.send()
    } else {
        xhr.send(data)
    }
}