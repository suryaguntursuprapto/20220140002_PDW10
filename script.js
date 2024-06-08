function kirimData() {
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var tanggal = document.getElementById("tanggal").value;
    var semester = document.getElementById("semester").options[document.getElementById("semester").selectedIndex].text; 
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value;

    alert(
        "Nama : " + name +
        "\nNIM : " + nim +
        "\nTanggal : " + tanggal +
        "\nSemester : " + semester +
        "\nPeminatan : " + peminatan +
        "\nAlamat : " + alamat
    );
}
