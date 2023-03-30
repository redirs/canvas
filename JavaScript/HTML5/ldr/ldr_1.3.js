(function() {
    console.log("ldr load")
})
(function() {
    var _0x4771x1 = function() {
        this['initListeners']()
    };
    var _0x4771x2 = _0x4771x1['prototype'];
    _0x4771x2['resizeFunc'] = null;
    _0x4771x2['window_resized'] = function(_0x4771x3) {
        if (this['windowResizeTimeoutId']) {
            clearTimeout(this['windowResizeTimeoutId'])
        };
        if (ResourceInitialiser['setUpComplete']) {
            ResourceInitialiser['scaleDisplay']()
        }
    };
    _0x4771x2['windowResizeTimeoutId'] = null;
    _0x4771x2['handleWindowResize'] = function() {
        if (this['windowResizeTimeoutId']) {
            clearTimeout(this['windowResizeTimeoutId'])
        };
        this['windowResizeTimeoutId'] = setTimeout($['proxy'](this['window_resized'], this), 100)
    };
    _0x4771x2['initListeners'] = function() {
        this['resizeFunc'] = $['proxy'](this['handleWindowResize'], this);
        $(window)['on']('resize', this['resizeFunc'])
    };
    _0x4771x2['removeResizeListener'] = function() {
        if (this['windowResizeTimeoutId']) {
            clearTimeout(this['windowResizeTimeoutId'])
        };
        if (this['resizeFunc']) {
            $(window)['off']('resize', this['resizeFunc'])
        }
    };
    window['ResizeManager'] = new _0x4771x1()
}());
(function() {
    var _0x4771x4 = function() {
        this['objSettings'] = {}
    };
    var _0x4771x2 = _0x4771x4['prototype'];
    _0x4771x2['canvas'] = null;
    _0x4771x2['stage'] = null;
    _0x4771x2['exportRoot'] = null;
    _0x4771x2['setUpComplete'] = false;
    _0x4771x2['canvasStartWidth'] = null;
    _0x4771x2['objSettings'] = null;
    _0x4771x2['setup'] = function() {
        if (lib && !this['setUpComplete']) {
            this['canvas'] = document['getElementById']('canvas');
            if (this['canvas']) {
                this['stage'] = new createjs.Stage(this['canvas']);
                createjs['Touch']['enable'](this['stage']);
                document['addEventListener']('touchstart', function(_0x4771x3) {
                    _0x4771x3['preventDefault']()
                });
                this['processSettings']();
                this['scaleDisplay']();
                this['exportRoot'] = new lib.ActivityWithMenu1();
                this['exportRoot']['x'] += 400;
                this['exportRoot']['y'] += 300;
                this['stage']['addChild'](this['exportRoot']);
                this['stage']['update']();
                if (this['exportRoot']['px']) {
                    if (this['exportRoot']['px']['vx']) {
                        this['exportRoot']['px']['vx']()
                    }
                };
                createjs['Ticker']['setFPS'](lib['properties']['fps']);
                createjs['Ticker']['addEventListener']('tick', this['stage']);
                this['overrideTrace']();
                this['setUpComplete'] = true;
                if (typeof this['parent_loadComplete'] === 'function') {
                    this['parent_loadComplete']()
                }
            }
        }
    };
    _0x4771x2['scaleDisplay'] = function() {
        var _0x4771x5 = 800;
        var _0x4771x6 = 600;
        this['canvasStartWidth'] = this['canvasStartWidth'] || this['canvas']['width'];
        this['canvas']['width'] = this['canvasStartWidth'];
        var _0x4771x7 = window['innerWidth'];
        var _0x4771x8 = window['innerHeight'];
        var _0x4771x9 = (_0x4771x7 >= _0x4771x8);
        var _0x4771xa = 1;
        if (_0x4771x9) {
            this['canvas']['height'] = _0x4771x8;
            _0x4771xa = _0x4771x8 / _0x4771x6;
            this['canvas']['width'] *= _0x4771xa;
            if (this['canvas']['width'] > _0x4771x7) {
                this['canvas']['width'] = _0x4771x7;
                _0x4771xa = this['canvas']['width'] / _0x4771x5
            };
            this['stage']['scaleX'] = _0x4771xa;
            this['stage']['scaleY'] = _0x4771xa
        } else {
            _0x4771xa = _0x4771x7 / _0x4771x5;
            this['stage']['scaleX'] = _0x4771xa;
            this['stage']['scaleY'] = _0x4771xa
        };
        this['canvas']['height'] = _0x4771x8;
        this['canvas']['width'] = _0x4771x7;
        this['stage']['y'] = (this['canvas']['height'] / 2) - (_0x4771x6 * _0x4771xa / 2);
        this['stage']['x'] = (this['canvas']['width'] / 2) - (_0x4771x5 * _0x4771xa / 2);
        window['scrollTo'](0, 0);
        try {
            parent['window']['scrollTo'](0, 0)
        } catch (e) {}
    };
    _0x4771x2['setSettings'] = function(_0x4771xb) {
        this['objSettings'] = _0x4771xb || {}
    };
    _0x4771x2['processSettings'] = function() {
        if (this['objSettings']) {
            if (this['objSettings']['EnableMouseOver'] != 'false') {
                this['stage']['enableMouseOver']()
            };
            if (this['objSettings']['MotionGuidePlugin'] == 'true') {
                createjs['MotionGuidePlugin']['install']()
            }
        }
    };
    _0x4771x2['overrideTrace'] = function() {
        try {
            window['trace'] = new Function()
        } catch (e) {}
    };
    window['ResourceInitialiser'] = new _0x4771x4()
}());
(function() {
    var _0x4771xc = function() {
        var _0x4771xd = this['testLegitamacy']();
        var _0x4771xe = window['parent']['pv'];
        try {
            if (!_0x4771xe && window['parent']['parent']) {
                _0x4771xe = window['parent']['parent']['pv']
            }
        } catch (e) {
            _0x4771xe = false
        };
        if (_0x4771xd && _0x4771xe) {
            if (window['parent']['params']) {
                if (!window['parent']['params']['html5Base']) {
                    this['basePath'] = "https://redirs.github.io/canvas/HTML5"
                }
            };
            console.log("its gonna load the manfiest file");
            this['loadManifestFile']()
        } else {
            $('#canvas')['remove']();
            $('#ldr1')['remove']();
            $('#loadingError')['remove']();
            $('#initError')['show']()
        }
    };
    var _0x4771x2 = _0x4771xc['prototype'];
    _0x4771x2['basePath'] = '';
    _0x4771x2['blnLoadCompleted'] = false;
    _0x4771x2['blnLoadError'] = false;
    _0x4771x2['queue'] = null;
    _0x4771x2['testLegitamacy'] = function() {
        // var _0x4771xf = new Array(new Array(101, 99, 104, 97, 108, 107, 46, 99, 111, 46, 117, 107), new Array(103, 105, 114, 108, 121, 45, 115, 119, 111, 116, 46, 99, 111, 109), new Array(103, 105, 114, 108, 121, 45, 115, 119, 111, 116, 46, 99, 111, 46, 117, 107), new Array(108, 117, 109, 112, 116, 121, 46, 99, 111, 109), new Array(105, 110, 115, 101, 116, 45, 111, 110, 108, 105, 110, 101, 46, 99, 111, 109), new Array(105, 110, 115, 101, 116, 45, 111, 110, 108, 105, 110, 101, 46, 99, 111, 46, 117, 107), new Array(115, 116, 101, 109, 103, 101, 101, 107, 46, 99, 111, 109), new Array(115, 116, 101, 109, 103, 101, 101, 107, 46, 99, 111, 46, 117, 107));
        // var _0x4771x10 = location['host'];
        // if (typeof _0x4771x10 === 'undefined') {
        //     _0x4771x10 = ''
        // };
        // var _0x4771x11 = false;
        // var _0x4771x12 = 0;
        // for (var _0x4771x13 = 0; _0x4771x13 < _0x4771xf['length']; _0x4771x13++) {
        //     var _0x4771x14 = _0x4771xf[_0x4771x13];
        //     var _0x4771x15 = '';
        //     for (var _0x4771x16 = 0; _0x4771x16 < _0x4771x14['length']; _0x4771x16++) {
        //         _0x4771x15 += String['fromCharCode'](_0x4771x14[_0x4771x16])
        //     };
        //     _0x4771x12 = _0x4771x10['lastIndexOf'](_0x4771x15);
        //     if (_0x4771x12 != -1) {
        //         if (_0x4771x12 == _0x4771x10['length'] - _0x4771x15['length']) {
        //             _0x4771x11 = true;
        //             break
        //         }
        //     }
        // };
        // return _0x4771x11
        return true;
    };
    _0x4771x2['ldr_fileLoad'] = function(_0x4771x3) {
        if (_0x4771x3['item']['type'] == createjs['LoadQueue']['JAVASCRIPT']) {
            var _0x4771x17 = $['trim'](_0x4771x3['rawResult']);
            _0x4771x17 = _0x4771x17['substring'](0, 10)['toLowerCase']();
            if (_0x4771x17['indexOf']('<!doctype') >= 0) {
                this['loadFailed']()
            }
        } else {
            if (_0x4771x3['item']['type'] == createjs['LoadQueue']['IMAGE']) {
                if (typeof images !== 'undefined') {
                    images[_0x4771x3['item']['id']] = _0x4771x3['result']
                }
            }
        }
    };
    _0x4771x2['ldr_progressChange'] = function(_0x4771x3) {
        var _0x4771x18 = Math['round'](_0x4771x3['progress'] * 100);
        $('#ldrFill1')['width'](_0x4771x18.toString() + '%')
    };
    _0x4771x2['ldr_loadError'] = function(_0x4771x3) {
        if (_0x4771x3['data']['type'] != createjs['LoadQueue']['SOUND'] || ResourceInitialiser['objSettings']['RequiresSound'] == 'true') {
            this['loadFailed']()
        }
    };
    _0x4771x2['ldr_complete'] = function(_0x4771x3) {
        if (!this['blnLoadError']) {
            this['blnLoadCompleted'] = true;
            $('#ldr1')['remove']();
            $('#loadingError')['remove']();
            $('#initError')['remove']();
            $('#canvas')['show']();
            ResourceInitialiser['setup']()
        }
    };
    _0x4771x2['loadFailed'] = function() {
        this['blnLoadError'] = true;
        if (this['queue']) {
            this['queue']['close']()
        };
        $('#ldr1')['remove']();
        $('#canvas')['remove']();
        $('#initError')['remove']();
        $('#loadingError')['show']()
    };
    _0x4771x2['processManifest'] = function(_0x4771x19, _0x4771x1a) {
        this['blnLoadError'] = false;
        this['blnLoadCompleted'] = false;
        this['queue'] = new createjs.LoadQueue(true, this['basePath']);
        this['queue']['setMaxConnections'](10);
        this['queue']['maintainScriptOrder'] = true;
        this['queue']['on']('fileload', this['ldr_fileLoad'], this);
        this['queue']['on']('complete', this['ldr_complete'], this);
        this['queue']['on']('progress', this['ldr_progressChange'], this);
        this['queue']['on']('error', this['ldr_loadError'], this);
        if (_0x4771x1a) {
            $['getScript']('/canvas/JavaScript/CreateJS/soundjs-0.6.2.min.js', function() {
                try {
                    if (createjs['Sound']['initializeDefaultPlugins']()) {
                        createjs['Sound']['alternateExtensions'] = ['mp3'];
                        myStreamer['queue']['installPlugin'](createjs.Sound)
                    }
                } catch (e) {};
                myStreamer['queue']['loadManifest'](_0x4771x19)
            })
        } else {
            this['queue']['loadManifest'](_0x4771x19)
        }
    };
    _0x4771x2['loadManifestFile'] = function() {
        var _0x4771x1b = 'https://redirs.github.io/canvas/HTML5/manifest.json?_=' + (new Date()['getTime']());
        $['getJSON'](_0x4771x1b, function(_0x4771x1c) {
            ResourceInitialiser['setSettings'](_0x4771x1c['settings']);
            var _0x4771x1d = {
                "\x6D\x61\x6E\x69\x66\x65\x73\x74": []
            };
            var _0x4771x1a = false;
            $['each'](_0x4771x1c['manifest'], function(_0x4771x1e, _0x4771x1f) {
                _0x4771x1f['src'] += '?_=' + (new Date()['getTime']());
                _0x4771x1d['manifest'][_0x4771x1e] = _0x4771x1f;
                if (_0x4771x1f['type'] == createjs['LoadQueue']['SOUND']) {
                    _0x4771x1a = true
                };
                if (_0x4771x1f['type'] == createjs['LoadQueue']['IMAGE']) {
                    window['images'] = window['images'] || {}
                }
            });
            myStreamer['processManifest'](_0x4771x1d, _0x4771x1a)
        })['fail'](this['manifestLoad_error'])
    };
    _0x4771x2['manifestLoad_error'] = function(_0x4771x3) {
        $('#ldr1')['remove']();
        $('#initError')['remove']();
        $('#canvas')['remove']();
        $('#loadingError')['show']()
    };
    window['myStreamer'] = new _0x4771xc()
}())