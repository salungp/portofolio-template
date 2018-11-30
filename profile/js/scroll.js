(function () {
    var SmoothAnchor = function (options) {
        this.defaultOptions = {
            linksClass: ".anchor-js", // Class of anchors
            duration: 500, // duration of scrolling
            easing: "linear" // easing of scrolling
        };
        var extend = function (object, extendWith) {
            var extendedObject;
            if (extendWith) {
                extendedObject = extendWith;
                for (prop in object) {
                    if (!(prop in extendedObject)) {
                        extendedObject[prop] = object[prop];
                    }
                }
            } else {
                extendedObject = object;
            }
            return extendedObject;
        }
        this.options = extend(this.defaultOptions, options);
        this.links = document.querySelectorAll(this.options.linksClass);
        this.anchors = document.querySelectorAll("a[name]");
        this.body = document.body;
        this.init();
    }
	/**
	 * Get position 
	 * @param  {[object]} self        [ Plugin object ]
	 * @param  {[object]} clickTarget [ click target ]
	 * @return {[number]}             [ position of target anchor ]
	 */
    var _getNewPosition = function (self, clickTarget) {
        var anchorName = clickTarget.getAttribute("href");
        var len = self.anchors.length;
        var position;
        for (var i = 0; i < len; i++) {
            if (("#" + self.anchors[i].getAttribute("name")) == anchorName) {
                var elementTop = self.anchors[i].getBoundingClientRect().top;
                position = elementTop + pageYOffset;
                break;
            }
        }
        return position;
    }

	/**
	 * getCurrent position of window scroll
	 * @return {[number]} [scroll position]
	 */
    var _getCurrentPosition = function () {
        var currentPosition;
        if (window.pageYOffset) {
            currentPosition = window.pageYOffset;
        } else if (document.documentElement && document.documentElement.scrollTop) {
            currentPosition = document.documentElement.scrollTop;
        } else if (document.body) {
            currentPosition = document.body.scrollTop;
        }
        return currentPosition;
    }

	/**
	 * [function description]
	 * @param  {[type]} self [description]
	 * @return {[type]}      [description]
	 */
    var _setTransition = function (self) {
        self.body.style.transition = "all " + self.options.duration + "ms " + self.options.easing;
        self.body.style.WebkitTransition = "all " + self.options.duration + "ms " + self.options.easing;
    }

    var _clearTransition = function (self) {
        self.body.style.transition = "";
        self.body.style.WebkitTransition = "";
    }

    var _makeTransform = function (self, currentPosition, newPosition) {
        self.body.style.WebkitTransform = "translate(0, -" + (newPosition - currentPosition) + "px)";
        self.body.style.transform = "translate(0, -" + (newPosition - currentPosition) + "px)";
    }

    var _clearTransform = function (self) {
        self.body.style.WebkitTransform = "";
        self.body.style.transform = "";
    }

	/**
	 * [function description]
	 * @param  {[type]} self        [description]
	 * @param  {[type]} newPosition [description]
	 * @return {[type]}             [description]
	 */
    var _slide = function (self, newPosition) {
        var currentPosition = _getCurrentPosition();
        _setTransition(self);
        _makeTransform(self, currentPosition, newPosition);

        window.setTimeout(function () {
            _clearTransition(self);
            _clearTransform(self);
            window.scrollTo(0, newPosition);
        }, self.options.duration);
    }
	/**
	 * [function description]
	 * @return {[type]} [description]
	 */
    SmoothAnchor.prototype.init = function () {
        var self = this;
        for (var i = 0, len = self.links.length; i < len; i++) {
            self.links[i].addEventListener("click", function (e) {
                var event = window.event || e;
                var target = event.target;
                var newPosition = _getNewPosition(self, target);
                _slide(self, newPosition);
                event.preventDefault();
            })
        }
    }

	/**
	 * Init plugin, when DOM loaded
	 */
    document.addEventListener('DOMContentLoaded', function () {
        var smoothAnchor = new SmoothAnchor();
    });

})();