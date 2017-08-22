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
    },
    priceValues = [],
    numberOfDomains = 0,
    qualifierText = '';

    if (priceType == 'monthly') {
      qualifierText = 'per month';
      priceValues = priceValuesMonthly;
    } else if (priceType == 'annual') {
      qualifierText = 'per year';
      priceValues = priceValuesAnnual;
    }
    // Update pricing table & slider costs
    $.each( priceValues, function( key, value ) {
      $('#priceLevel'+key+' strong').html('$'+value);
      $('#packageSlider'+key).attr('data-domain-price',value);
      $('#packageSlider'+key+' .cost').html('$'+value);
      numberOfDomains = $('#packageSlider'+key).attr('data-domain-count');
      updateSliderPrice(key,numberOfDomains);
    });
    // Update Price Qualifier Text
    $('[rel="price-qualifier"]').html(qualifierText);
    // Coloring on Sliders
    $('.rangeslider').toggleClass('secondary');
    // Update total cost for all sliders
    updateTotalPrice();
  }


  if (thisPage == 'pricingPage') {
    // Price Range Slider ------------------------------------------------------
    $('input[type="range"]').rangeslider({
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

        var labelIndex = this.$element.attr('value')-1,
            labelValue = rangeLabels[labelIndex],
            rangeID = this.$element.attr('id');

        updateSliderPrice(rangeID,labelValue);
      },

      // Callback function
      onSlide: function(position, value) {
      },

      // Callback function
      onSlideEnd: function(position, value) {

        var rangeLabels = this.$element.attr('labels');
        rangeLabels = rangeLabels.split(', ');

        var labelValue = rangeLabels[(this.value-1)],
            rangeID = this.$element.attr('id');

        updateSliderPrice(rangeID,labelValue);

      }
    });

  }

  function updateSliderPrice(sliderID,numberOfDomains) {
    var priceType = sliderID.replace('range-','');
        unitPrice = $('#packageSlider'+priceType).attr('data-domain-price'),
        subPrice = numberOfDomains * unitPrice;

    // update data attribute
    $('#packageSlider'+priceType).attr('data-domain-count',numberOfDomains);
    // update Input with new price
    $('#slider-price-'+priceType).val(subPrice);

    updateTotalPrice();
  }

  function updateTotalPrice() {
    var totalPrice = 0;

    // Add all slider prices together
    $('[rel="slider-price"]').each(function(index, value) {
      totalPrice += parseInt($(this).val());
    });

    $('#estimatedCost').text('$'+totalPrice);
  }










});