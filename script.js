
  let page = {
  body: {
    readability: false,
    readabilityLabels: {
      readability: 'view in readability mode', 
      obnoxious: 'view in obnoxious mode'
    }
  },
  sidebar: {
    collapsed: false
  }
};

$(document).ready(function () {
  
  init();
  

  $("#sidebar-collapse").click(function () {
    $(".blurb").slideToggle();
    page.sidebar.collapsed = !page.sidebar.collapsed;
    let text = (page.sidebar.collapsed) ? 'show' : 'hide';
    $("#sidebar-collapse").text(text);
    
  });
  
  $('#readability-msg a').click(function() {
    toggleReadability(true);
    $('#readability-msg').slideToggle();
  });
  
  $('#mode-toggle').click(function() {
    toggleReadability(!page.body.readability);
  });
  
});



function init() {
  checkStyleCookie();
  
  if (page.body.readability) {
    $('#readability-msg').hide();
    $('#mode-toggle').html(page.body.readabilityLabels.obnoxious)
  } else {
    $('#mode-toggle').html(page.body.readabilityLabels.readability);
  }
}

function toggleReadability(readability) {
    const d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = "readability=" + readability.toString() + ";" + expires + ";path=/";
    page.body.readability = readability;
    
    const linkEl = document.getElementById('page-style');
    if (readability) {
      linkEl.href = '/readability.css';
      $('#mode-toggle').text(page.body.readabilityLabels.obnoxious);
      $('#readability-msg').hide();
    } else {
      linkEl.href = '/obnoxious.css';
      $('#mode-toggle').text(page.body.readabilityLabels.readability);
    }
    
}

function checkStyleCookie() {
  // check if it's already there 
  let cookieArray = document.cookie.split(';');
  let cookie = (function() {
    for(let i = 0; i < cookieArray.length; i++) {
      const name = cookieArray[i].split("=");
      if (name[0].trim() == 'readability') {
        return name[1].trim();
      }
    }
    return -1;
  })();
  
  // if not, set it to the default
  if (cookie === -1) {
    toggleReadability(false);
  } 
  
  // set the property 
  if (cookie == 'true') {
    page.body.readability = true;
    toggleReadability(true);
  } else {
    page.body.readability = false;
  }
  
  
}

  
  
  
