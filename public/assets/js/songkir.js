function loadProvinsi() {
  fetch('/apiOngkir/provinsi')
    .then(res => res.json())
    .then(data => {
      let temp = '<option value="" selected="" disabled="">-- Pilih Provinsi --</option>';
      data.rajaongkir.results.forEach((rs) => {
        temp += `<option value="${rs.province_id}">${rs.province}</option>`
      })
      document.getElementById('prov1').innerHTML = temp
      document.getElementById('prov2').innerHTML = temp
    })
    .catch(err => alert(err))
}

function loadKota(id, el) {
  fetch(`/apiOngkir/kota/${id}`)
    .then(res => res.json())
    .then(data => {
      let temp = '<option value="" selected="" disabled="">-- Pilih Kota --</option>';
      data.rajaongkir.results.forEach((rs) => {
        temp += `<option value="${rs.city_id}">${rs.city_name}</option>`
      })
      document.getElementById(el).innerHTML = temp
    })
    .catch(err => alert(err))
}

function cekOngkir() {
  const asal = document.getElementById('kot1').value,
        tujuan = document.getElementById('kot2').value,
        berat = document.getElementById('berat').value,
        kurir = document.getElementById('kurir').value;

  if (asal != '' && tujuan != '' && berat != '' && kurir != '') {
    fetch(`/apiOngkir/ongkos/${asal}/${tujuan}/${berat}/${kurir}`)
      .then(res => res.json())
      .then(data => {
        let temp = ''
        const ro = data.rajaongkir
        if (ro.status.code == 200) {
        temp += `<table class="table table-bordered">
            <thead><tr><td colspan="4" style="text-align: center">${ro.results[0].name}</td></tr>
            <tr>
              <th>Service</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Estimated</th>
            </tr></thead>`
          const costs = ro.results[0].costs
          for(let i=0; i < costs.length; i++) {
            temp += `<tbody><tr>
              <td>${costs[i].service}</td>
              <td>${costs[i].description}</td>
              <td>${costs[i].cost[0].value.toLocaleString()}</td>
              <td>${costs[i].cost[0].etd} DAY</td>
            </tr></tbody>`
          }
          temp += `</table>`
          document.getElementById('hasil').innerHTML = temp
        } else {
          alert('Sepertinya ada gangguan dari rajaongkir / koneksi internet anda, silahkan coba lagi')
        }
      })
      .catch(err => alert(err))
  } else {
    alert('Mohon lengkapi data terlebih dahulu!')
  }
}