var ripplyScott = (function() {
  var circle = document.getElementById('js-ripple'),
      ripple = document.querySelectorAll('.js-ripple');

  function rippleAnimation(event, timing) {
    var tl           = new TimelineMax();
        x            = event.offsetX,
        y            = event.offsetY,
        w            = event.target.offsetWidth,
        h            = event.target.offsetHeight,
        offsetX      = Math.abs( (w / 2) - x ),
        offsetY      = Math.abs( (h / 2) - y ),
        deltaX       = (w / 2) + offsetX,
        deltaY       = (h / 2) + offsetY,
        scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    /*console.log('x is:' + x);
    console.log('y is:' + y);
    console.log('offsetX is:' + offsetX);
    console.log('offsetY is:' + offsetY);
    console.log('deltaX is:' + deltaX);
    console.log('deltaY is:' + deltaY);
    console.log('width is:' + w);
    console.log('height is:' + h);
    console.log('scale ratio is:' + scale_ratio);*/

    tl.fromTo(ripple, timing, {
      x: x,
      y: y,
      transformOrigin: '50% 50%',
      scale: 0,
      opacity: 1,
      ease: Linear.easeIn
    },{
      scale: scale_ratio,
      opacity: 0
    });

    return tl;
  }

  return {
    init: function(target, timing) {
      var button = document.getElementsByClassName(target);

      $(target).mouseover(function(event) {
        rippleAnimation.call(this, event, timing);
      });
      /*button.addEventListener('mouseover', function(event) {
        rippleAnimation.call(this, event, timing);
      });*/
    }
  };
})();

ripplyScott.init('#js-ripple-btn', 0.75);


var ripplyScott = (function() {
  var circle = document.getElementById('js-ripple2'),
      ripple = document.querySelectorAll('.js-ripple2');

  function rippleAnimation(event, timing) {
    var tl           = new TimelineMax();
        x            = event.offsetX,
        y            = event.offsetY,
        w            = event.target.offsetWidth,
        h            = event.target.offsetHeight,
        offsetX      = Math.abs( (w / 2) - x ),
        offsetY      = Math.abs( (h / 2) - y ),
        deltaX       = (w / 2) + offsetX,
        deltaY       = (h / 2) + offsetY,
        scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    /*console.log('x is:' + x);
    console.log('y is:' + y);
    console.log('offsetX is:' + offsetX);
    console.log('offsetY is:' + offsetY);
    console.log('deltaX is:' + deltaX);
    console.log('deltaY is:' + deltaY);
    console.log('width is:' + w);
    console.log('height is:' + h);
    console.log('scale ratio is:' + scale_ratio);*/

    tl.fromTo(ripple, timing, {
      x: x,
      y: y,
      transformOrigin: '50% 50%',
      scale: 0,
      opacity: 1,
      ease: Linear.easeIn
    },{
      scale: scale_ratio,
      opacity: 0
    });

    return tl;
  }

  return {
    init: function(target, timing) {
      var button = document.getElementsByClassName(target);

      $(target).mouseover(function(event) {
        rippleAnimation.call(this, event, timing);
      });
      /*button.addEventListener('mouseover', function(event) {
        rippleAnimation.call(this, event, timing);
      });*/
    }
  };
})();

ripplyScott.init('#js-ripple-btn2', 0.75);

/*****************************************/

var ripplyScott = (function() {
  var circle = document.getElementById('js-ripple3'),
      ripple = document.querySelectorAll('.js-ripple3');

  function rippleAnimation(event, timing) {
    var tl           = new TimelineMax();
        x            = event.offsetX,
        y            = event.offsetY,
        w            = event.target.offsetWidth,
        h            = event.target.offsetHeight,
        offsetX      = Math.abs( (w / 2) - x ),
        offsetY      = Math.abs( (h / 2) - y ),
        deltaX       = (w / 2) + offsetX,
        deltaY       = (h / 2) + offsetY,
        scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    tl.fromTo(ripple, timing, {
      x: x,
      y: y,
      transformOrigin: '50% 50%',
      scale: 0,
      opacity: 1,
      ease: Linear.easeIn
    },{
      scale: scale_ratio,
      opacity: 0
    });

    return tl;
  }

  return {
    init: function(target, timing) {
      var button = document.getElementsByClassName(target);

      $(target).mouseover(function(event) {
        rippleAnimation.call(this, event, timing);
      });
      /*button.addEventListener('mouseover', function(event) {
        rippleAnimation.call(this, event, timing);
      });*/
    }
  };
})();
ripplyScott.init('#js-ripple-btn3', 0.75);


/*****************************************/

var ripplyScott = (function() {
  var circle = document.getElementById('js-ripple4'),
      ripple = document.querySelectorAll('.js-ripple4');

  function rippleAnimation(event, timing) {
    var tl           = new TimelineMax();
        x            = event.offsetX,
        y            = event.offsetY,
        w            = event.target.offsetWidth,
        h            = event.target.offsetHeight,
        offsetX      = Math.abs( (w / 2) - x ),
        offsetY      = Math.abs( (h / 2) - y ),
        deltaX       = (w / 2) + offsetX,
        deltaY       = (h / 2) + offsetY,
        scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    tl.fromTo(ripple, timing, {
      x: x,
      y: y,
      transformOrigin: '50% 50%',
      scale: 0,
      opacity: 1,
      ease: Linear.easeIn
    },{
      scale: scale_ratio,
      opacity: 0
    });

    return tl;
  }

  return {
    init: function(target, timing) {
      var button = document.getElementsByClassName(target);

      $(target).mouseover(function(event) {
        rippleAnimation.call(this, event, timing);
      });
      /*button.addEventListener('mouseover', function(event) {
        rippleAnimation.call(this, event, timing);
      });*/
    }
  };
})();
ripplyScott.init('#js-ripple-btn4', 0.75);


var ripplyScott = (function() {
  var circle = document.getElementById('js-ripple5'),
      ripple = document.querySelectorAll('.js-ripple5');

  function rippleAnimation(event, timing) {
    var tl           = new TimelineMax();
        x            = event.offsetX,
        y            = event.offsetY,
        w            = event.target.offsetWidth,
        h            = event.target.offsetHeight,
        offsetX      = Math.abs( (w / 2) - x ),
        offsetY      = Math.abs( (h / 2) - y ),
        deltaX       = (w / 2) + offsetX,
        deltaY       = (h / 2) + offsetY,
        scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    tl.fromTo(ripple, timing, {
      x: x,
      y: y,
      transformOrigin: '50% 50%',
      scale: 0,
      opacity: 1,
      ease: Linear.easeIn
    },{
      scale: scale_ratio,
      opacity: 0
    });

    return tl;
  }

  return {
    init: function(target, timing) {
      var button = document.getElementsByClassName(target);

      $(target).mouseover(function(event) {
        rippleAnimation.call(this, event, timing);
      });
      /*button.addEventListener('mouseover', function(event) {
        rippleAnimation.call(this, event, timing);
      });*/
    }
  };
})();
ripplyScott.init('#js-ripple-btn5', 0.75);