(function($) {
    $.fn.cryptoCase = function(address) {
      const URL = 'https://api.cryptokitties.co/kitties?owner_wallet_address='
          + address;
      const INDIVIDUAL_URL = 'https:\/\/www.cryptokitties.co\/kitty\/';
      var location = this;
      const COLORS = new Object();
        COLORS['sizzurp'] = '#c1c1ea';
        COLORS['bubblegum'] = '#fcdede';
        COLORS['limegreen'] = '#d9f5cb';
        COLORS['topaz'] = '#d1eeeb';
        COLORS['thundergrey'] = '#eee9e8';
        COLORS['chestnut'] = '#efe1da';
        COLORS['mintgreen'] = '#cdf5d4';
        COLORS['pumpkin'] = '#fae1ca';
        COLORS['gold'] = '#faf4cf';
        COLORS['babypuke'] = '#eff1e0';
        COLORS['strawberry'] = '#efbaba';
      var newColors = new Object();
      var cats = "";
      $.ajax({
        url: URL,
        cache: false,
        success: function(response) {
          cats += "<div class=\"container\"><div class=\"well\ wellColor\">"
              + "<div><a href=\"https:\/\/www.cryptokitties.co\">"
              + "<img class=\"logo\""
              + " src=\"https:\/\/www.cryptokitties.co\/downloads\/logo.svg\">"
              + "<\/a><\/div><div class=\"row\">";
          var max = 12;
          if (response.total < 12) {
            max = response.total;
          };
          var j = max;
          for (i = 0; i < max; i++) {
            var cat = response.kitties[i];
            var details = "";
            details += "<div class=\"textbox\" align=\"left\">"
                + "<span class=\"kittyTextID\">Kitty #"
                + cat.id + "<\/span><span class=\"details\"> &#xB7; Gen "
                + cat.generation + "<\/span>";
            if (cat.is_exclusive) {
              details += "<span class=\"details\"> &#xB7; Exclusive<\/span>";
            } if (cat.is_fancy) {
              details += "<span class=\"details\"> &#xB7; Fancy<\/span>";
            }
              details += "<\/div>";
            if (i == 4 || i == 8) {
              cats += "<div class=\"row\">";
            }
            cats += "<div class=\"col-sm-6 col-md-3\" align=\"center\">"
                + "<div class=\"kittyCard\" id=\"" + j + "\">"
                + "<a href=\"" + INDIVIDUAL_URL + cat.id + "\"><img class=\""
                + "image img-responsive\" src=" + cat.image_url + " id=\""
                + i + "\"><\/a></div>" + "<div>" + details + "</div></div>";
            if (i == 3 || i == 7 || i == 11) {
              cats += "<\/div>";
            }
            newColors[i] = COLORS[cat.color];
            newColors[j] = COLORS[cat.color];
            j++;
          }
          cats += "</div></div>";
          $(location).html(cats);
          for (i = 0; i < max; i++) {
            var change = "#" + i;
            $(change).css('background-color', newColors[i]);
            $(change).css('border-radius', '5px');
          }
          for (l = max; l < (max * 2); l++) {
            var change2 = "#" + l;
            $(change2).css('background-color', newColors[j]);
          }
        }
      });
    };
}(jQuery));
