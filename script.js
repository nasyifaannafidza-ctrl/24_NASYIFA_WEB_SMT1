let usia = 10;
let hari = "sabtu";
let member = "ya";
let hargaDasar = 50000;

if (usia < 5) {
    harga = 0;
} else {

    let diskonUsia = 0;
    if (usia >= 5 && usia <= 12) {
        diskonUsia = 0.50;
    } else if (usia >= 60) {
        diskonUsia = 0.30;
    }
    harga = hargaDasar - (hargaDasar * diskonUsia);

    if (hari === "senin" || hari === "selasa" || hari === "rabu" || hari === "kamis") {
        harga = harga - (hargaDasar * 0.10);
         } else if (hari === "jumat") {
            harga = harga - 0;
         } else if (hari === "sabtu" || hari === "minggu") {
            harga = harga + (hargaDasar * 0.20);
        }
    if (harga < 0) {
        harga = 0;
    }
    if (member === "ya") {
        harga = harga - (harga * 0.15);
    }
}

alert(
    "usia : " + usia + " tahun\n" +
    "hari : " + hari + "\n" +
    "member : " + member + "\n" +
    "harga akhir : Rp" + harga
);