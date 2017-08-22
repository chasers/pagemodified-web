// Main JS File Unminified 
$(function(){
  var thisPage = $('body').attr('id');

  /*
   * Mobile Nav
   */
	$('.mobile-toggle').click(function(event) {
	    event.preventDefault();
		$('.nav').toggleClass('nav-open');
	});

  /*
   * Scroll to 
   */
  $('[rel="scrollTo"]').click(function() {
      event.preventDefault();
      var tag = $(this).attr('data-scrollTo');
      scrollToAnchor(tag);
  });
  function scrollToAnchor(aid){
      var aTag = $('#'+ aid);
      var aTagTop = aTag.offset().top,
          aTagAddOffset = 60,
          aTagOffset = aTagTop-aTagAddOffset;
      //console.log('aTagTop:'+aTagTop+'aTagAddOffset:'+aTagAddOffset+'aTagOffset:'+aTagOffset);
      $('html,body').animate({scrollTop: aTagOffset},'slow');
  }

  /*
   * Video Player Modal
   */
  $('a[rel="videoPlayerToggle"]').click(function(event) {
    event.preventDefault();
    var videoID = $(this).attr('data-videoID');
   
    $('#videoPlayerContainer iframe').attr('src','//www.youtube.com/embed/'+videoID+'?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0');
    $('#videoPlayerContainer').show('slow');
    
  });
  $('#videoPlayerContainer').click(function() {
    $('#videoPlayerContainer').hide('fast');
    $('#videoPlayerContainer iframe').attr('src','');
  });

  // Monthly/Annual Pricing Toggle ------------------------------------------------------------
  changePrice('monthly');

  $('#annualPriceSwitch').change(function() {
      if (this.checked) {
        //checked = Annual Pricing
        changePrice('annual');
      } else {
        //unchecked = Monthly
        changePrice('monthly');
      }
  });

  function changePrice(priceType) {
    var priceValuesMonthly = {
      1: 0,
      2: 3,
      3: 5,
      4: 10,
      5: 25
    },
    priceValuesAnnual = {
      1: 0,
      2: 29,
      3: 48,
      4: 96,
      5: 240
    };
    if (priceType == 'monthly') {
      $.each( priceValuesMonthly, function( key, value ) {
        $('#priceLevel'+key+' strong').html('$'+value);
        $('#priceLevel'+key+' span').html('per domain <br>per month');
      });
    } else if (priceType == 'annual') {
      $.each( priceValuesAnnual, function( key, value ) {
        $('#priceLevel'+key+' strong').html('$'+value);
        $('#priceLevel'+key+' span').html('per domain <br>per year');
      });
    }
  }
  if (thisPage == 'pricingPage') {
    // Price Range Slider ------------------------------------------------------
    $('input[type="range"]').val(1).rangeslider({
      polyfill: false,

      // Callback function
      onInit: function() {
        $rangeEl = this.$range;
        // add value label to handle
        var $handle = $rangeEl.find('.rangeslider__handle');
        // get range index labels 
        var rangeLabels = this.$element.attr('labels');
        rangeLabels = rangeLabels.split(', ');
        // add labels
        $rangeEl.append('<div class="rangeslider__labels"></div>');
        $(rangeLabels).each(function(index, value) {
          $rangeEl.find('.rangeslider__labels').append('<span class="rangeslider__labels__label">' + value + '</span>');
        })
        var thisSliderID = this.$element.attr('id').replace('range-','');
        estimatedPrice(thisSliderID,this.value);
      },

      // Callback function
      onSlide: function(position, value) {
        //var $handle = this.$range.find('.rangeslider__handle__value');
        //$handle.text(this.value);
        var thisSliderID = this.$element.attr('id').replace('range-','');
        estimatedPrice(thisSliderID,this.value);
      },

      // Callback function
      onSlideEnd: function(position, value) {}
    });
    function estimatedPrice(type,value) {
      var priceType = type,
          unitPrice = 0,
          subPrice = 0,
          totalPrice = 0,
          otherPrice = 0,
          countValues = [];

      if (priceType == 'business') {
        unitPrice = 10;
        countValues = {
          1: 5,
          2: 10,
          3: 20,
          4: 50,
          5: 100
        };
        otherPrice = parseInt($('#slider-price-enterprise').val());
      } else if (priceType == 'enterprise') {
        unitPrice = 50;
        countValues = {
          1: 1,
          2: 5,
          3: 10,
          4: 15,
          5: 20
        };
        otherPrice = parseInt($('#slider-price-business').val());
      }

      subPrice = countValues[value] * unitPrice;
      totalPrice = subPrice + otherPrice;

      $('#slider-price-'+priceType).val(subPrice);
      $('#estimatedCost').text('$'+totalPrice);
    }
  }












});