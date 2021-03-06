var sheet = document.createElement('style');
var text = ""
var mainItem = browser.storage.sync.get('main');
var accentItem = browser.storage.sync.get('accent');
var textItem = browser.storage.sync.get('text');
var wojItem = browser.storage.sync.get('woj');

mainItem.then((res) => {
    text = text + `section.content, .page-col, div.passage-col, body, footer, div.sticky-resources div, div.bbl-fontsize, .search-form, .search-form-nav, footer.footer-flex-row {
        background-color: ${res.main || "#121212"} !important;
      }
      
      div.resources-content .go2401971732 span, .fontsize-dropdown .r-dropdown div div div:hover, nav li.top-menu:hover  {
        color: ${res.main || "#121212"} !important;
      }

      `;
      accentItem.then((res)=> {
        text = text + `.top-wrapper, div.search-bar input, span.autocomplete div, div.testaments>:hover div, div.bcv-dropdown div:hover, nav .logo-menu-user, nav, nav .logo-menu-user, .an-mobile-menu-closed,div.r-dropdown div, .content-section, div.search-bar-version div, .passage-box, .sub-menu.expanded ul{
            background-color: ${res.accent || "#383838"} !important;
          }
    
          nav li.top-menu:hover .text, nav li.top-menu:hover .fa-plus-square, .votd-subscribe-btn, .homepage-block-button a,div.testaments li:hover,.sub-menu.expanded ul li:hover a, h1.passage-display .translation .r-dropdown div div:nth-child(2) div:hover,  div.passage-tools>:hover, .r-dropdown div div span:hover{
            color: ${res.accent || "#383838"} !important;
          }
    
          nav li.top-menu:hover svg, .search-submit svg, div.passage-tools svg{
            fill: ${res.accent || "#383838"} !important;
          }
    
          `
          textItem.then((res)=>{
            text = text + `div.resources-content .go2401971732, .search-submit, div.testaments li:hover, .bcv-dropdown table tr:hover, nav li.top-menu:hover, div.passage-tools>:hover, .r-dropdown div div span:hover,.fontsize-dropdown .r-dropdown div div div:hover, h1.passage-display .translation .r-dropdown div div:nth-child(2) div:hover, .homepage-block-button a,.votd-subscribe-btn, .sub-menu.expanded ul li:hover{
                background-color: ${res.text || "#9cb9d3"} !important;
              }
              
              div div h4, p span.text, div.footnotes a, div.crossrefs a, div.resources-content a, div.resources-content span, 
          .copyright-table a, .copyright-table a:visited, .testaments .current span, div.footnotes a:visited, .bcv-dropdown table tr.current a, div.top-wrapper .login a, span.autocomplete div, div.search-bar input, .toggle-fontsize:hover span, .sidebar-tabs li:hover a, .sidebar-tabs li:active a, .sidebar-tabs li:hover, .sidebar-tabs li:active, .footer-menu a:hover, .page-user ul.info-viewer-nav li.active a, .info-viewer-row a:hover, div.search-bar-version div, .footer-menu h3, .passage-box .verse-bar a, .passage-box p a:hover, div.votd-subscribe-form h6, .passage-box p a, .homepage-block-heading{
            color: ${res.text || "#9cb9d3"} !important;
          }
        
          .user-icon svg, .toggle-fontsize:hover svg, .testaments .current svg{
            fill: ${res.text || "#9cb9d3"} !important;
          }
        
          div.passage-col{
            border-color: ${res.text || "#9cb9d3"} !important;
          }
        
          .sidebar-tabs li:hover a, .sidebar-tabs li:active a, .page-user ul.info-viewer-nav li.active{
            border-bottom: 2px solid ${res.text || "#9cb9d3"} !important;
          }
          .content hr.content-divider {
            border-top: 2px solid ${res.text || "#9cb9d3"} !important;
          }
        
              `;
              wojItem.then((res)=>{
                text = text + `section div.wrapper {
                    background-color: ${res.woj || "#b36c38"} !important;
                  }
                  
                  .s-woj .woj{
                    color: ${res.woj || "#b36c38"} !important;
                  }
            
                  div.passage-col, div.dropdown-display-text, h3, .chapternum, .versenum, div.crossrefs a.crossref-link, sup.crossreference a, sup.footnote a, div.resources-content, div.sticky-resources div, .copyright-table, div.testaments li:hover span, .bcv-dropdown table tr.current:hover a, .footer-menu a, .sidebar-tabs a, div.testaments div:hover, div.bcv-dropdown div:hover, div.testaments li, .bcv-dropdown table a, div.top-wrapper a, div.bbl-fontsize span, .r-dropdown div div div , r-dropdown div div div span, .r-dropdown div div div span, .login span.user-name, .r-dropdown div div div:hover, .info-viewer-row a, .passage-box #verse-text, .passage-box p, .homepage-block-description{
                    color: #FFFFFF !important;
                  }
                  
                  .toggle-fontsize svg, div.testaments li:hover svg, .login span.user-menu-icon svg{
                    fill: #ffffff !important;
                  }
                  
                  .sidebar-tabs li, .r-dropdown div div div span{
                    border-bottom: 0px !important;
                  }`;
                  sheet.innerHTML = text;
                  var head = document.querySelector("head");
                head.appendChild(sheet);
            });
        });
    });
});




