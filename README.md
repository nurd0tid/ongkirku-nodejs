![Screenshot 2022-06-01 201328](https://user-images.githubusercontent.com/48532204/171413392-43cbd97b-1de6-4b10-bc4a-e0094883cad8.png)

![Screenshot 2022-06-01 201815](https://user-images.githubusercontent.com/48532204/171413814-e6ac1c00-651e-490e-bc4a-bbaaa098cf95.png)


# Ongkirku-NodeJS
Apps NodeJS Ongkirku adalah Apps Sederhana untuk kalian pelajari menggunakan framework **Nodejs dan ExpressJS**, ongkirku sudah include templating menggunakan template NiceAdmin dan juga sudah tersedia cek ongkir beserta cek resi ( lacak pengiriman ) dengan dua API yang berbeda, jika ingin menggunakan API yang sama tinggal menyesuaikan dari kedua penyedia tersebut ke dalam code.

## API
- [X] [Daftar](https://rajaongkir.com/) RajaOngkir ( Untuk Cek Ongkir )
- [x] [Daftar](https://dashboard.binderbyte.com/) BinderByte ( Untuk Melacak Pengiriman ) 

### Fitur
- [x] **Cek Ongkir** ( JNE, POS Indonesia, TIKI )
- [x] **Lacak Pengiriman** ( JNE, J&T, POS Indonesia, Wahana, Ninja, Lion, Anter Aja, Sicepat, Tiki ) Account Free (Limit 50 Tracking)

## Instalasi
Gunakan Command untuk menginstal apps ini.
```sh
$ npm install
```

## Running
Gunakan Command untuk menginstal apps ini.
```sh
$ node server.js
```

## Konfigurasi API
Pada Folder **Routes/apiOngkir.js** Silahkan ganti API dengan API kalian yang sudah kalian daftarkan sebelumnya untuk Cek Ongkir.
```sh
axios.defaults.headers.common['key'] = 'API_KEY_ANDA'
```
Pada Folder **Routes/apiResi.js** Silahkan ganti API dengan API kalian yang sudah kalian daftarkan sebelumnya untuk Cek Resi ( Lacak Pengiriman ).
```sh
https://api.binderbyte.com/v1/track?api_key=API_KEY_ANDA&courier=${kurir}&awb=${noresi}
```

Semoga Bermanfaat, Boleh kali dikasih Bintang nya atau mau traktir saya juga oooo boleh banget mwehehehee
Jajanin Saya di [Saweria](https://saweria.co/itsPOPOY)
