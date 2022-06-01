function cekResi() {
  const kurir = document.getElementById('kurir').value,
        noresi = document.getElementById('noresi').value

  if (kurir != '' && noresi != '') {
    fetch(`/apiResi/tracking&courier=${kurir}&awb=${noresi}`)
      .then(res => res.json())
      .then(data => {
        let temp = ''
        const ro = data.data
        // if (ro.status == 200) {
        // temp += `<p>${ro.summary.courier}</p>`

        const history = ro.history
          for(let i=0; i < history.length; i++) {
            temp += `<div class="activity-item d-flex">
                        <div class="activite-label">${history[i].date}</div>
                        <i class='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                        <div class="activity-content">
                          ${history[i].desc}
                        </div>
                      </div>`
          }
          document.getElementById('hasil').innerHTML = temp
        // } else {
        //   alert('Sepertinya ada gangguan dari rajaongkir / koneksi internet anda, silahkan coba lagi')
        // }
      })
      .catch(err => alert(err))
  } 
}