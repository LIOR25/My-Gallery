
function initPage() {
    console.log('Starting up');
    gProjs = createProjs()
    renderProj()

    // console.log(gProjs);

}


function renderProj() {
    var projs = getProj()
    var strHtmls = projs.map(function (proj, idx) {
        return `
      <div class="col-md-4 col-sm-6 portfolio-item" onClick = "renderModal(${idx})">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src='../img/portfolio/${proj.id}.jpg' alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>
     `
    })
    $('.proj-container').html(strHtmls.join(''))
}


function renderModal(idx) {
    var projs = getProj();
    var proj = projs[idx];
    var strHtmls =
        ` <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
        <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
        <div class="lr">
         <div class="rl"></div>
         </div>
         </div>
        <div class="container">
        <div class="row">
       <div class="col-lg-8 mx-auto">
     <div class="modal-body">
        <h2>${proj.name}</h2>
        <p class="item-intro text-muted">${proj.title}.</p>
        <img class="img-fluid d-block mx-auto" src='../img/portfolio/${proj.id}.jpg' alt="">
     <p>${proj.desc}</p>
            <ul class="list-inline">
        <li>Date: ${proj.publisheAt}</li>
        <li>Client: Threads</li>
      <li>Category: Illustration</li>
     </ul> 
    <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>
      <button class="btn btn-primary" onClick = "goToProj(${idx})" type="button">
    Check it out</button>
    </div>
     </div>
    </div>
    </div>
    </div>
    </div>
   </div>
`
    $('.modal-body').html(strHtmls).modal('show')
}

function goToProj(idx) {
    var projs = getProj();
    var proj = projs[idx];
    console.log(proj.url);
    
    return proj.url
}