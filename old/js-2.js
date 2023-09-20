load.onclick=function() {
    displaying.innerHTML=document.getElementById("t001").innerHTML
    alert("Successfully loaded")
}

scroll1.onclick=function() {
    displaying.innerHTML=document.getElementById("t002").innerHTML
    onscroll=function() {
        alert("Scrolling")
    }
}

click.onclick=function() {
    displaying.innerHTML=document.getElementById("t003").innerHTML
    q=displaying.children
    q.t003a.id="t003b"
    t003b.onclick=function() {
        alert("A Click")
    }
}

dblclick.onclick=function() {
    displaying.innerHTML=document.getElementById("t004").innerHTML
    q=displaying.children
    q.t004a.id="t004b"
    t004b.ondblclick=function() {
        alert("A Double Click")
    }
}

contextmenu.onclick=function() {
    displaying.innerHTML=document.getElementById("t005").innerHTML
    q=displaying.children
    q.t005a.id="t005b"
    t005b.oncontextmenu=function() {
        alert("A Contextmenu")
    }
}

mousedown.onclick=function() {
    displaying.innerHTML=document.getElementById("t006").innerHTML
    q=displaying.children
    q.t006a.id="t006b"
    t006b.onmousedown=function() {
        alert("Mousedown")
    }
}

mouseup.onclick=function() {
    displaying.innerHTML=document.getElementById("t007").innerHTML
    q=displaying.children
    q.t007a.id="t007b"
    t007b.onmouseup=function() {
        alert("Mouseup")
    }
}

mousemove.onclick=function() {
    displaying.innerHTML=document.getElementById("t008").innerHTML
    q=displaying.children
    q.t008a.id="t008b"
    t008b.onmousemove=function() {
        alert("Mousemove")
    }
}

mouseout.onclick=function() {
    displaying.innerHTML=document.getElementById("t009").innerHTML
    q=displaying.children
    q.t009a.id="t009b"
    t009b.onmouseout=function() {
        alert("Mouseout")
    }
}

mouseenter.onclick=function() {
    displaying.innerHTML=document.getElementById("t010").innerHTML
}

mouseleave.onclick=function() {
    displaying.innerHTML=document.getElementById("t011").innerHTML
}

keyup.onclick=function() {
    displaying.innerHTML=document.getElementById("t012").innerHTML
    onkeyup=function() {
        alert("Keyup")
    }
}

keydown.onclick=function() {
    displaying.innerHTML=document.getElementById("t013").innerHTML
    onkeydown=function() {
        alert("Keydown")
    }
}

keypress.onclick=function() {
    displaying.innerHTML=document.getElementById("t014").innerHTML
    onkeypress=function() {
        alert("Keypress")
    }
}

change.onclick=function() {
    displaying.innerHTML=document.getElementById("t015").innerHTML
    q=displaying.children
    q.t015a.id="t015b"
    t015b.onchange=function() {
        alert("Change")
    }
}

input.onclick=function() {
    displaying.innerHTML=document.getElementById("t016").innerHTML
    q=displaying.children
    q.t016a.id="t016b"
    t016b.oninput=function() {
        alert("input")
    }
}

submit.onclick=function() {
    displaying.innerHTML=document.getElementById("t017").innerHTML
    q=displaying.children
    q.t017a.id="t017b"
    t017b.onsubmit=function() {
        alert("Submitted")
    }
}

touchstart.onclick=function() {
    displaying.innerHTML=document.getElementById("t018").innerHTML
}

touchend.onclick=function() {
    displaying.innerHTML=document.getElementById("t019").innerHTML
}

touchmove.onclick=function() {
    displaying.innerHTML=document.getElementById("t020").innerHTML
}
