$.ajax({
  url: "https://api.npoint.io/99c279bb173a6e28359c/data",
  type: "get",
  dataType: "json",
  success: function(result) {
    // console.log(result)
    $.each(result, function(i, data){
      $("#daftar-surat").append(`
        <div class="col-md-4 mb-3">
          <ul class="list-group">
            <a href="" style="text-decoration: none;" class="shadow detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.nomor +`">
              <li class="list-group-item d-flex justify-content-between align-items-start text-success">
                <h4>`+ data.nomor +`</h4>
                <div class="ms-3 me-auto">
                  <div class="fw-bold">`+ data.nama +` (`+ data.ayat +` ayat)</div>
                  `+ data.arti +`
                </div>
                <h5 class="" style="font-family: 'lpmq';">`+ data.asma +`</h5>
              </li>
            </a>
          </ul>
        </div>
      `)
    })
  }
})

$("#daftar-surat").on("click", ".detail", function(){
  let nomor = $(this).data("id")
  console.log(nomor)
  $.ajax({
    url: "https://api.npoint.io/99c279bb173a6e28359c/surat/" + nomor +"/",
    type: "get",
    dataType: "json",
    success: function(result) {
      // console.log(result)
      $.each(result, function(i, data){
        $(".modal-detail").append(`
            <li class="list-group-item">
              <h3 class="text-end" style="font-family: 'lpmq'">`+ data.ar +`</h3>
              <p>`+ data.tr +`</p>
              <p>`+ data.id +`</p>
            </li>
        `)
      })
    }
  })
})

$.ajax({
  url: "https://api.aladhan.com/v1/asmaAlHusna",
  type: "get",
  dataType: "json",
  success: function(result) {
    // console.log(result)
    let hasil = result.data
    $.each(hasil, function(i, data){
      $("#asmaul-husna").append(`
        <div class="col-md-4 mb-3">
          <ul class="list-group">
            <a href="" style="text-decoration: none;" class="shadow detail">
              <li class="list-group-item d-flex justify-content-between align-items-start text-success">
                <h4>`+ data.number +`</h4>
                <div class="ms-3 me-auto">
                  <div class="fw-bold">`+ data.transliteration +`</div>
                  `+ data.en.meaning +`
                </div>
                <h5 class="" style="font-family: 'lpmq';">`+ data.name +`</h5>
              </li>
            </a>
          </ul>
        </div>
      `)
    })
  }
})

$.ajax({
  url: "https://tanyadoa-api.herokuapp.com/all",
  type: "get",
  dataType: "json",
  success: function(result) {
    console.log(result)
    let hasilDoa = result.data
    $.each(hasilDoa, function(i, data){
      $("#daftar-doa").append(`
        <div class="col-md-6">
          <p>
            <a class="btn btn-primary d-block" data-bs-toggle="collapse" href="#kkk`+ data.id_doa +`" role="button"
              aria-expanded="false" aria-controls="collapseExample">
              `+ data.nama +`
            </a>
          </p>
          <div class="collapse mb-3" id="kkk`+ data.id_doa +`">
            <div class="card card-body">
              <ul class="list-group list-group-flush modal-detail">
                <li class="list-group-item">
                  <h3 class="text-end" style="font-family: 'lpmq'">`+ data.lafal +`</h3>
                  <p>`+ data.transliterasi +`</p>
                  <p>`+ data.arti +`</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `)
    })
  }
})


// https://doa-doa-api-ahmadramadhan.fly.dev/api
// https://api.npoint.io/99c279bb173a6e28359c/surat/1
// https://api.aladhan.com/v1/asmaAlHusna