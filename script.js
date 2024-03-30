function yes(){
    document.getElementById("label").textContent="Anda Berbohong!"
    document.getElementById("bar").src="image 3.png"
    document.getElementById("border").style.backgroundColor = "#E12E2E"
    document.getElementById("ask").textContent="Anda adalah seorang Teknisi"
    document.getElementById("btn").style.display="none"
    
}

function no(){
    document.getElementById("label").textContent="Anda Benar!"
    document.getElementById("bar").src="image 2.png"
    document.getElementById("border").style.backgroundColor = "#6FD240"
    document.getElementById("ask").textContent="Anda adalah seorang Mahasiswa"
    document.getElementById("btn").style.display="none"
}

