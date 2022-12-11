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

var mylist=new Array()
var n=-1

function print(obj) {
    mylist=obj.map(item => `
        <div>
            <p><b>ID:</b> ${item.id}</p>
            <p><b>Username:</b> ${item.username}</p>
            <p><b>Password:</b> ${item.password}</p>
        </div>
    `)
    n=mylist.length
    box.innerHTML=``
    for(let i=0;i<n;i++)
      box.innerHTML+=mylist[i]
    console.log(box.innerHTML)

    var nod=document.getElementById("box")
}

function render() {
    xhr1=new XMLHttpRequest()
    xhr1.open("GET","http://localhost:3000/users")
    xhr1.onload=function() {
        if(/^2\d{2}$/.test(xhr1.status)) {
            print(JSON.parse(xhr1.responseText))
        }
        else {
            location.href="404.html"
        }
    }
    xhr1.send()
}

render()

post.onclick=function() {
    form1.style.display="block"
    form2.style.display="none"
    form3.style.display="none"
}

put.onclick=function() {
    form1.style.display="none"
    form2.style.display="block"
    form3.style.display="none"
}

delete1.onclick=function() {
    form1.style.display="none"
    form2.style.display="none"
    form3.style.display="block"
}

var id=-1
var username=""
var password=""

postsubmit.onclick=function() {
    username=username1.value
    password=password1.value
    username1.value=""
    password1.value=""
    ajax({
        url: "http://localhost:3000/users",
        method: "POST",
        async: false,
        data: {
            username: username,
            password: password
        }
    })
    render()
}

putsubmit.onclick=function() {
    id=id2.value
    username=username2.value
    password=password2.value
    id2.value=""
    username2.value=""
    password2.value=""
    ajax({
        url: "http://localhost:3000/users"+"/"+id,
        method: "PUT",
        async: false,
        data: {
            username: username,
            password: password
        }
    })
    render()
}

deletesubmit.onclick=function() {
    id=id3.value
    id3.value=""
    ajax({
        url: "http://localhost:3000/users"+"/"+id,
        method: "DELETE",
        async: false,
        data: {}
    })
    render()
}