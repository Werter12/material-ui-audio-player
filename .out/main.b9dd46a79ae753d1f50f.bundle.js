(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    182: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = {
          STATUS: { PLAY: 'PLAY', PAUSE: 'PAUSE', STOP: 'STOP' },
          VOLUME: {
            STATUS: { MUTE: 'MUTE', UNMUTE: 'UNMUTE' },
            DEFAULT_VALUE: 100
          }
        });
    },
    388: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var helpers_1 = __webpack_require__(389);
      exports.PLAYER_STATUS_PLAY = 'PLAYER_STATUS_PLAY';
      exports.PLAYER_STATUS_PAUSE = 'PLAYER_STATUS_PAUSE';
      exports.PLAYER_VOLUME_STATUS_UNMUTE = 'PLAYER_VOLUME_STATUS_UNMUTE';
      exports.PLAYER_VOLUME_STATUS_MUTE = 'PLAYER_VOLUME_STATUS_MUTE';
      exports.PLAYER_VOLUME_CHANGE = 'PLAYER_VOLUME_CHANGE';
      exports.PLAYER_SET_DURATION = 'PLAYER_SET_DURATION';
      exports.PLAYER_SET_TIME = 'PLAYER_SET_TIME';
      exports.PLAYER_SLIDER_MOVED = 'PLAYER_SLIDER_MOVED';
      exports.PLAYER_AUDIO_ENDED = 'PLAYER_AUDIO_ENDED';
      exports.PLAYER_REPLAY = 'PLAYER_REPLAY';
      exports.PLAYER_AUTOPLAY = 'PLAYER_AUTOPLAY';
      exports.PLAYER_LOOP = 'PLAYER_LOOP';
      var actionCreators = [
        function(dispatch, player) {
          return function() {
            player.current.play(), dispatch({ type: 'PLAYER_STATUS_PLAY' });
          };
        },
        function(dispatch, player) {
          return function() {
            player.current.pause(), dispatch({ type: 'PLAYER_STATUS_PAUSE' });
          };
        },
        function(dispatch, player) {
          return function() {
            (player.current.muted = !0),
              dispatch({ type: 'PLAYER_VOLUME_STATUS_MUTE' });
          };
        },
        function(dispatch, player) {
          return function() {
            (player.current.muted = !1),
              dispatch({ type: 'PLAYER_VOLUME_STATUS_UNMUTE' });
          };
        },
        function(dispatch, player) {
          return function(value) {
            (player.current.volume = value > 0 ? value / 100 : 0),
              player.current.muted && (player.current.muted = !1),
              dispatch({ type: 'PLAYER_VOLUME_CHANGE', volumeValue: value });
          };
        },
        function(dispatch, player) {
          return function() {
            dispatch({
              type: 'PLAYER_SET_DURATION',
              duration: player.current.duration
            });
          };
        },
        function(dispatch, player) {
          return function() {
            dispatch({
              type: 'PLAYER_SET_TIME',
              current: player.current.currentTime,
              progress: helpers_1.getProgress(
                player.current.currentTime,
                player.current.duration
              )
            });
          };
        },
        function(dispatch, player) {
          return function() {
            dispatch({ type: 'PLAYER_AUDIO_ENDED' });
          };
        },
        function(dispatch, player) {
          return function() {
            player.current.play(), dispatch({ type: 'PLAYER_REPLAY' });
          };
        },
        function(dispatch, player) {
          return function(progress) {
            var currentTime = helpers_1.getCurrentTime(
              progress,
              player.current.duration
            );
            isNaN(currentTime) || (player.current.currentTime = currentTime),
              dispatch({
                type: 'PLAYER_SLIDER_MOVED',
                progress: progress,
                current: currentTime
              });
          };
        },
        function(dispatch, player) {
          return function() {
            (player.current.autoplay = !0),
              setTimeout(function() {
                player.current.currentTime &&
                  dispatch({ type: 'PLAYER_AUTOPLAY' });
              }, 300);
          };
        },
        function(dispatch, player) {
          return function(loop) {
            (player.current.loop = loop),
              dispatch({ type: 'PLAYER_LOOP', loop: loop });
          };
        }
      ];
      exports.actionCreators = actionCreators;
    },
    389: function(module, exports, __webpack_require__) {
      'use strict';
      var __assign =
        (this && this.__assign) ||
        function() {
          return (__assign =
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++)
                for (var p in (s = arguments[i]))
                  Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.appendZero = function(num) {
          return num < 10 ? '0' + num : num;
        }),
        (exports.getFormattedTime = function(time) {
          var dateTime = new Date(0, 0, 0, 0, 0, time, 0);
          return (
            exports.appendZero(dateTime.getMinutes()) +
            ':' +
            exports.appendZero(dateTime.getSeconds())
          );
        }),
        (exports.getProgress = function(currentTime, duration) {
          return parseFloat(((currentTime / duration) * 100).toString());
        }),
        (exports.getCurrentTime = function(progress, duration) {
          return parseFloat(((progress * duration) / 100).toString());
        }),
        (exports.populateDispatch = function populateDispatch(
          dispatch,
          player
        ) {
          for (var funcs = [], _i = 2; _i < arguments.length; _i++)
            funcs[_i - 2] = arguments[_i];
          return funcs.reduce(function(acc, func) {
            var _a;
            return __assign(
              {},
              acc,
              (((_a = {})['_' + func.name] = func(dispatch, player)), _a)
            );
          }, {});
        });
      try {
        (exports.appendZero.displayName = 'appendZero'),
          (exports.appendZero.__docgenInfo = {
            description: '',
            displayName: 'appendZero',
            props: {}
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/state/helpers.ts#appendZero'
            ] = {
              docgenInfo: exports.appendZero.__docgenInfo,
              name: 'appendZero',
              path: 'src/components/state/helpers.ts#appendZero'
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (exports.getFormattedTime.displayName = 'getFormattedTime'),
          (exports.getFormattedTime.__docgenInfo = {
            description: '',
            displayName: 'getFormattedTime',
            props: {}
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/state/helpers.ts#getFormattedTime'
            ] = {
              docgenInfo: exports.getFormattedTime.__docgenInfo,
              name: 'getFormattedTime',
              path: 'src/components/state/helpers.ts#getFormattedTime'
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    427: function(module, exports, __webpack_require__) {
      __webpack_require__(428),
        __webpack_require__(531),
        (module.exports = __webpack_require__(532));
    },
    532: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var addon_a11y_1 = __webpack_require__(533),
          addon_info_1 = __webpack_require__(549),
          addon_knobs_1 = __webpack_require__(361),
          react_1 = __webpack_require__(386),
          theming_1 = __webpack_require__(851),
          viewports_1 = __webpack_require__(860);
        react_1.addParameters({
          options: {
            brandTitle: 'material-ui-audio-player',
            theme: theming_1.themes.light
          },
          viewport: { viewports: viewports_1.default }
        }),
          react_1.addDecorator(addon_knobs_1.withKnobs),
          react_1.addDecorator(addon_a11y_1.withA11y),
          react_1.addDecorator(
            addon_info_1.withInfo({
              styles: {
                infoStory: { minHeight: '100px', paddingLeft: '55px' }
              },
              inline: !0,
              source: !1
            })
          );
        var req = __webpack_require__(861);
        react_1.configure(function loadStories() {
          req.keys().forEach(function(filename) {
            return req(filename);
          });
        }, module);
      }.call(this, __webpack_require__(70)(module)));
    },
    553: function(module, exports, __webpack_require__) {
      var map = { './nestedObjectAssign': 224, './nestedObjectAssign.js': 224 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 553);
    },
    860: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 });
      exports.default = {
        mobile: { name: 'Mobile', styles: { width: '400px', height: '563px' } },
        small: { name: 'Small', styles: { width: '600px', height: '663px' } },
        medium: {
          name: 'Medium',
          styles: { width: '960px', height: '1263px' }
        },
        large: { name: 'Large', styles: { width: '1280px', height: '1463px' } },
        extralarge: {
          name: 'Extra Large',
          styles: { width: '1920px', height: '1760px' }
        }
      };
    },
    861: function(module, exports, __webpack_require__) {
      var map = { './index.stories.tsx': 862 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 861);
    },
    862: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var core_1 = __webpack_require__(184),
          styles_1 = __webpack_require__(48),
          addon_knobs_1 = __webpack_require__(361),
          react_1 = __webpack_require__(386),
          React = __webpack_require__(0),
          src_1 = __webpack_require__(869),
          muiTheme = core_1.createMuiTheme({}),
          availableVariations = {
            primary: 'primary',
            secondary: 'secondary',
            default: 'default'
          },
          availableOrder = { standart: 'standart', reverse: 'reverse' };
        react_1
          .storiesOf('Material Ui', module)
          .add(
            'AudioPlayer Interactive',
            function() {
              var width = addon_knobs_1.text('width', '500px'),
                variation = addon_knobs_1.select(
                  'variation',
                  availableVariations,
                  availableVariations.primary
                ),
                order = addon_knobs_1.select(
                  'order',
                  availableOrder,
                  availableOrder.standart
                ),
                elevation = addon_knobs_1.number('elevation', 1),
                spacing = addon_knobs_1.number('spacing', 3),
                download = addon_knobs_1.boolean('download', !0),
                debug = addon_knobs_1.boolean('debug', !0),
                loop = addon_knobs_1.boolean('loop', !0);
              return React.createElement(
                styles_1.ThemeProvider,
                { theme: muiTheme },
                React.createElement(src_1.AudioPlayer, {
                  elevation: elevation,
                  width: width,
                  variation: variation,
                  download: download,
                  loop: loop,
                  order: order,
                  spacing: spacing,
                  debug: debug,
                  src: [
                    'https://converter-audio-example-1.s3.eu-central-1.amazonaws.com/Russell%2C%2BMale%2B-%2BEnglish%2C%2BAustralian+(1)+(online-audio-converter.com).wav',
                    'https://converter-audio-examples.s3.eu-central-1.amazonaws.com/Russell%2C+Male+-+English%2C+Australian.mp3'
                  ]
                })
              );
            },
            {
              info: {
                text:
                  '\n### Notes\n  You could use src prop by providing link to audio or use array of links. Make sure your audios with extention. \n  It neccesary to display option in dropdown of available formats downloads.\n### Usage\n~~~js\nconst srcSet = [\n  \'https://converter-audio-example-1.s3.eu-central-1.amazonaws.com/Russell%2C%2BMale%2B-%2BEnglish%2C%2BAustralian+(1)+(online-audio-converter.com).wav\',\n  \'https://converter-audio-examples.s3.eu-central-1.amazonaws.com/Russell%2C+Male+-+English%2C+Australian.mp3\'\n];\n  <AudioPlayer\n    elevation={1}\n    width="500px"\n    variation="primary"\n    download={true}\n    loop={loop}\n    spacing={spacing}\n    debug={false}\n    src={srcSet}\n  />\n~~~\n'
              }
            }
          )
          .add(
            'AudioPlayer Custom styles',
            function() {
              var useStyles = styles_1.makeStyles(function(theme) {
                var _a, _b;
                return {
                  root:
                    ((_a = {}),
                    (_a[theme.breakpoints.down('sm')] = { width: '100%' }),
                    _a),
                  loopIcon:
                    ((_b = {
                      color: '#3f51b5',
                      '&.selected': { color: '#0921a9' },
                      '&:hover': { color: '#7986cb' }
                    }),
                    (_b[theme.breakpoints.down('sm')] = { display: 'none' }),
                    _b),
                  playIcon: {
                    color: '#f50057',
                    '&:hover': { color: '#ff4081' }
                  },
                  volumeIcon: { color: 'rgba(0, 0, 0, 0.54)' },
                  volumeSlider: { color: 'black' },
                  progressTime: { color: 'rgba(0, 0, 0, 0.54)' },
                  mainSlider: {
                    color: '#3f51b5',
                    '& .MuiSlider-rail': { color: '#7986cb' },
                    '& .MuiSlider-track': { color: '#3f51b5' },
                    '& .MuiSlider-thumb': { color: '#303f9f' }
                  }
                };
              });
              return React.createElement(
                styles_1.ThemeProvider,
                { theme: muiTheme },
                React.createElement(src_1.AudioPlayer, {
                  width: '500px',
                  useStyles: useStyles,
                  src:
                    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                  loop: !0
                })
              );
            },
            {
              info: {
                text:
                  "\n### Notes\n You should use useStyles prop for passing stylesHook\n created with makeStyles\n### Usage\n~~~js\nconst useStyles = makeStyles(\n  (theme: any) => {\n    return {\n      root: {\n        [theme.breakpoints.down('sm')]: {\n          width: '100%'\n        },\n      },\n      loopIcon: {\n        color: '#3f51b5',\n        '&.selected': {\n          color: '#0921a9'\n        },\n        '&:hover': {\n          color: '#7986cb'\n        },\n        [theme.breakpoints.down('sm')]: {\n          display: 'none'\n        }\n      },\n      playIcon: {\n        color: '#f50057',\n        '&:hover': {\n          color: '#ff4081'\n        }\n      },\n      volumeIcon: {\n        color: 'rgba(0, 0, 0, 0.54)'\n      },\n      volumeSlider: {\n        color: 'black'\n      },\n      progressTime: {\n        color: 'rgba(0, 0, 0, 0.54)'\n      },\n      mainSlider: {\n        color: '#3f51b5',\n        '& .MuiSlider-rail': {\n          color: '#7986cb'\n        },\n        '& .MuiSlider-track': {\n          color: '#3f51b5'\n        },\n        '& .MuiSlider-thumb': {\n          color: '#303f9f'\n        }\n      }\n    }\n  });\n<AudioPlayer src='https://music.com/song' useStyles={useStyles} loop={true}/>\n~~~\n"
              }
            }
          )
          .add('AudioPlayer Responsive', function() {
            return React.createElement(
              styles_1.ThemeProvider,
              { theme: muiTheme },
              React.createElement(src_1.AudioPlayer, {
                src:
                  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
              })
            );
          });
      }.call(this, __webpack_require__(70)(module)));
    },
    869: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var AudioPlayer_1 = __webpack_require__(870);
      exports.AudioPlayer = AudioPlayer_1.default;
    },
    870: function(module, exports, __webpack_require__) {
      'use strict';
      var __assign =
        (this && this.__assign) ||
        function() {
          return (__assign =
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++)
                for (var p in (s = arguments[i]))
                  Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var AudioPlayerComponentsOrder,
        AudioPlayerVariation,
        AudioPlayerPreload,
        core_1 = __webpack_require__(184),
        icons_1 = __webpack_require__(183),
        styles_1 = __webpack_require__(48),
        classnames_1 = __webpack_require__(181),
        React = __webpack_require__(0),
        AudioDownloadsControl_1 = __webpack_require__(871),
        AudioPlayControl_1 = __webpack_require__(872),
        AudioVolumeControl_1 = __webpack_require__(873),
        actions_1 = __webpack_require__(388),
        helpers_1 = __webpack_require__(389),
        player_1 = __webpack_require__(182),
        reducer_1 = __webpack_require__(874),
        inititalState = {
          player: {
            status: player_1.default.STATUS.PAUSE,
            volume: {
              status: player_1.default.VOLUME.STATUS.UNMUTE,
              value: player_1.default.VOLUME.DEFAULT_VALUE
            },
            duration: 0,
            progress: 0,
            current: 0,
            loop: !1,
            autoplay: !1
          }
        };
      (exports.useComponentStyles = styles_1.makeStyles(function(theme) {
        var elevations = {};
        return (
          theme.shadows.forEach(function(shadow, index) {
            elevations['elevation' + index] = { boxShadow: shadow };
          }),
          __assign(
            {
              root: function(props) {
                return {
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  width: props.width,
                  height: props.height,
                  transition: theme.transitions.create('box-shadow')
                };
              },
              sliderContainerWrapper: function(props) {
                return {
                  width: 'auto',
                  flex: '1 1 auto',
                  display: 'flex',
                  boxSizing: 'border-box',
                  order: props.componentsOrder
                };
              },
              sliderContainer: { flex: '1 1 auto' },
              slider: function(props) {
                return { color: props.playerColors.active };
              },
              commonContainer: {
                flex: '0 0 auto',
                '&:hover': { cursor: 'pointer' }
              },
              iconSelected: function(props) {
                return { color: props.playerColors.selected };
              },
              icon: function(props) {
                return {
                  color: props.playerColors.active,
                  '&:hover': { color: props.playerColors.hover }
                };
              },
              rounded: { borderRadius: theme.shape.borderRadius }
            },
            elevations
          )
        );
      })),
        (function(AudioPlayerComponentsOrder) {
          (AudioPlayerComponentsOrder.standart = 'standart'),
            (AudioPlayerComponentsOrder.reverse = 'reverse');
        })(AudioPlayerComponentsOrder || (AudioPlayerComponentsOrder = {})),
        (exports.getColors = function(theme, variation) {
          return variation === AudioPlayerVariation.default
            ? {
                active: theme.palette.action.active,
                selected: theme.palette.action.selected,
                disabled: theme.palette.action.disabled,
                hover: theme.palette.action.hover
              }
            : {
                active: theme.palette[variation].main,
                selected: theme.palette[variation].dark,
                disabled: theme.palette[variation].light,
                hover: theme.palette[variation].light
              };
        }),
        (function(AudioPlayerVariation) {
          (AudioPlayerVariation.primary = 'primary'),
            (AudioPlayerVariation.secondary = 'secondary'),
            (AudioPlayerVariation.default = 'default');
        })(
          (AudioPlayerVariation =
            exports.AudioPlayerVariation || (exports.AudioPlayerVariation = {}))
        ),
        (function(AudioPlayerPreload) {
          (AudioPlayerPreload.auto = 'auto'),
            (AudioPlayerPreload.metadata = 'metadata'),
            (AudioPlayerPreload.none = 'none');
        })(AudioPlayerPreload || (AudioPlayerPreload = {}));
      var AudioPlayer = function(_a) {
        var _b,
          _c,
          src = _a.src,
          _d = _a.rounded,
          rounded = void 0 === _d || _d,
          _e = _a.elevation,
          elevation = void 0 === _e ? 1 : _e,
          _f = _a.useStyles,
          useStyles =
            void 0 === _f
              ? function() {
                  return {};
                }
              : _f,
          _g = _a.width,
          width = void 0 === _g ? '100%' : _g,
          _h = _a.height,
          height = void 0 === _h ? 'auto' : _h,
          _j = _a.variation,
          variation = void 0 === _j ? AudioPlayerVariation.default : _j,
          _k = _a.preload,
          preload = void 0 === _k ? AudioPlayerPreload.auto : _k,
          _l = _a.download,
          download = void 0 !== _l && _l,
          _m = _a.autoplay,
          autoplay = void 0 !== _m && _m,
          _o = _a.order,
          order = void 0 === _o ? AudioPlayerComponentsOrder.standart : _o,
          _p = _a.loop,
          loop = void 0 !== _p && _p,
          _q = _a.debug,
          debug = void 0 !== _q && _q,
          _r = _a.spacing,
          spacing = void 0 === _r ? void 0 : _r,
          player = React.useRef(null),
          theme = styles_1.useTheme(),
          playerColors = exports.getColors(theme, variation),
          componentStyles = {
            width: width,
            height: height,
            playerColors: playerColors,
            componentsOrder:
              order === AudioPlayerComponentsOrder.standart ? 'unset' : '-1'
          },
          classes = exports.useComponentStyles(componentStyles),
          classNames = useStyles(componentStyles),
          isMobile = core_1.useMediaQuery(theme.breakpoints.down('sm')),
          _s = React.useReducer(reducer_1.default, inititalState),
          state = _s[0],
          dispatch = _s[1],
          _t = React.useMemo(function() {
            return helpers_1.populateDispatch.apply(
              void 0,
              [dispatch, player].concat(actions_1.actionCreators)
            );
          }, [dispatch, player].concat(actions_1.actionCreators)),
          _pauseAudio = _t._pauseAudio,
          _playAudio = _t._playAudio,
          _muteAudio = _t._muteAudio,
          _unmuteAudio = _t._unmuteAudio,
          _changeAudioVolume = _t._changeAudioVolume,
          _setPlayerDuration = _t._setPlayerDuration,
          _setPlayerTime = _t._setPlayerTime,
          _changePlayerSlider = _t._changePlayerSlider,
          _audioEnded = _t._audioEnded,
          _replayAudio = _t._replayAudio,
          _setPlayerAutoplay = _t._setPlayerAutoplay,
          _loopAudio = _t._loopAudio,
          handlePlayerTimeUpdate = function() {
            _setPlayerTime();
          };
        React.useEffect(
          function() {
            return (
              player &&
                player.current &&
                (player.current.readyState > 3 && _setPlayerDuration(),
                !player.current.autoplay && autoplay && _setPlayerAutoplay(),
                player.current.addEventListener('canplay', _setPlayerDuration),
                player.current.addEventListener(
                  'timeupdate',
                  handlePlayerTimeUpdate
                ),
                player.current.addEventListener('ended', _audioEnded)),
              function() {
                player &&
                  player.current &&
                  (player.current.removeEventListener(
                    'canplay',
                    _setPlayerDuration
                  ),
                  player.current.removeEventListener(
                    'timeupdate',
                    handlePlayerTimeUpdate
                  ),
                  player.current.removeEventListener('ended', _audioEnded));
              }
            );
          },
          [player]
        ),
          debug && (console.log('state', state), console.log('player', player));
        var mainContainerSpacing = spacing || (isMobile ? 2 : 3);
        return React.createElement(
          React.Fragment,
          null,
          React.createElement(
            'audio',
            { ref: player, hidden: !0, preload: preload },
            Array.isArray(src)
              ? src.map(function(srcLink, index) {
                  return React.createElement('source', {
                    key: index,
                    src: srcLink
                  });
                })
              : React.createElement('source', { src: src })
          ),
          React.createElement(
            core_1.Grid,
            {
              container: !0,
              spacing: mainContainerSpacing,
              component: core_1.Paper,
              alignItems: 'center',
              className: classnames_1.default(
                classes.root,
                classes['elevation' + elevation],
                ((_b = {}), (_b[classes.rounded] = !rounded), _b),
                classNames.root
              )
            },
            loop &&
              React.createElement(
                core_1.Grid,
                { item: !0, className: classes.commonContainer },
                React.createElement(icons_1.Repeat, {
                  fontSize: 'large',
                  onClick: function() {
                    _loopAudio(!state.player.loop);
                  },
                  className: classnames_1.default(
                    ((_c = {}),
                    (_c[classes.iconSelected] = state.player.loop),
                    (_c.selected = state.player.loop),
                    (_c[classes.icon] = !state.player.loop),
                    _c),
                    classNames.loopIcon
                  )
                })
              ),
            React.createElement(
              core_1.Grid,
              { item: !0, className: classes.commonContainer },
              React.createElement(AudioPlayControl_1.default, {
                classNames: classNames,
                playerStatus: state.player.status,
                playerColors: playerColors,
                replayAudio: _replayAudio,
                pauseAudio: _pauseAudio,
                playAudio: _playAudio
              })
            ),
            download &&
              React.createElement(AudioDownloadsControl_1.default, {
                src: src,
                playerColors: playerColors
              }),
            React.createElement(AudioVolumeControl_1.default, {
              muteAudio: _muteAudio,
              unmuteAudio: _unmuteAudio,
              classNames: classNames,
              changeAudioVolume: _changeAudioVolume,
              volume: state.player.volume,
              playerColors: playerColors
            }),
            React.createElement(
              core_1.Grid,
              {
                item: !0,
                container: !0,
                spacing: 2,
                className: classnames_1.default(classes.sliderContainerWrapper)
              },
              React.createElement(
                core_1.Grid,
                {
                  item: !0,
                  className: classnames_1.default(classes.commonContainer)
                },
                React.createElement(
                  core_1.Typography,
                  { className: classNames.progressTime },
                  helpers_1.getFormattedTime(state.player.current)
                )
              ),
              React.createElement(
                core_1.Grid,
                { item: !0, className: classes.sliderContainer },
                React.createElement(core_1.Slider, {
                  className: classnames_1.default(
                    classes.slider,
                    classNames.mainSlider
                  ),
                  onChange: function(event, progress) {
                    _changePlayerSlider(progress);
                  },
                  value: state.player.progress
                })
              ),
              React.createElement(
                core_1.Grid,
                { item: !0, className: classes.commonContainer },
                React.createElement(
                  core_1.Typography,
                  { className: classNames.progressTime },
                  helpers_1.getFormattedTime(state.player.duration)
                )
              )
            )
          )
        );
      };
      exports.default = AudioPlayer;
      try {
        (exports.useComponentStyles.displayName = 'useComponentStyles'),
          (exports.useComponentStyles.__docgenInfo = {
            description: '',
            displayName: 'useComponentStyles',
            props: {}
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/AudioPlayer.tsx#useComponentStyles'
            ] = {
              docgenInfo: exports.useComponentStyles.__docgenInfo,
              name: 'useComponentStyles',
              path: 'src/components/AudioPlayer.tsx#useComponentStyles'
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (AudioPlayer.displayName = 'AudioPlayer'),
          (AudioPlayer.__docgenInfo = {
            description: '',
            displayName: 'AudioPlayer',
            props: {
              src: {
                defaultValue: null,
                description: '',
                name: 'src',
                required: !0,
                type: { name: 'string | string[]' }
              },
              rounded: {
                defaultValue: null,
                description: '',
                name: 'rounded',
                required: !1,
                type: { name: 'boolean' }
              },
              elevation: {
                defaultValue: null,
                description: '',
                name: 'elevation',
                required: !1,
                type: { name: 'number' }
              },
              useStyles: {
                defaultValue: null,
                description: '',
                name: 'useStyles',
                required: !1,
                type: { name: '(props: object | {}) => Record<any, string>' }
              },
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !1,
                type: { name: 'string' }
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !1,
                type: { name: 'string' }
              },
              download: {
                defaultValue: null,
                description: '',
                name: 'download',
                required: !1,
                type: { name: 'boolean' }
              },
              variation: {
                defaultValue: null,
                description: '',
                name: 'variation',
                required: !1,
                type: { name: 'AudioPlayerVariation' }
              },
              preload: {
                defaultValue: null,
                description: '',
                name: 'preload',
                required: !1,
                type: { name: 'AudioPlayerPreload' }
              },
              loop: {
                defaultValue: null,
                description: '',
                name: 'loop',
                required: !1,
                type: { name: 'boolean' }
              },
              order: {
                defaultValue: null,
                description: '',
                name: 'order',
                required: !1,
                type: { name: 'AudioPlayerComponentsOrder' }
              },
              autoplay: {
                defaultValue: null,
                description: '',
                name: 'autoplay',
                required: !1,
                type: { name: 'boolean' }
              },
              debug: {
                defaultValue: null,
                description: '',
                name: 'debug',
                required: !1,
                type: { name: 'boolean' }
              },
              spacing: {
                defaultValue: null,
                description: '',
                name: 'spacing',
                required: !1,
                type: { name: 'GridSpacing' }
              }
            }
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/AudioPlayer.tsx#AudioPlayer'
            ] = {
              docgenInfo: AudioPlayer.__docgenInfo,
              name: 'AudioPlayer',
              path: 'src/components/AudioPlayer.tsx#AudioPlayer'
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    871: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var core_1 = __webpack_require__(184),
        icons_1 = __webpack_require__(183),
        styles_1 = __webpack_require__(48),
        classnames_1 = __webpack_require__(181),
        React = __webpack_require__(0);
      (exports.useComponentStyles = styles_1.makeStyles({
        commonContainer: { flex: '0 0 auto', '&:hover': { cursor: 'pointer' } },
        downloadLink: function(props) {
          return {
            color: props.playerColors.active,
            textDecoration: 'none',
            '&:hover': { color: props.playerColors.hover },
            '&:focus': { color: props.playerColors.active },
            '&:active': { color: props.playerColors.active }
          };
        },
        downloadsContainer: { position: 'absolute', width: 'auto', top: '85%' },
        downloadsItemContainer: { padding: '8px 14px' },
        cloudDownloadIconContainer: { position: 'relative' },
        cloudDownloadIcon: function(props) {
          return {
            color: props.playerColors.active,
            '&:hover': { color: props.playerColors.hover }
          };
        }
      })),
        (exports.AudioDownloadsControl = function(_a) {
          var src = _a.src,
            playerColors = _a.playerColors,
            _b = _a.classNames,
            classNames = void 0 === _b ? {} : _b,
            classes = exports.useComponentStyles({
              playerColors: playerColors
            }),
            _c = React.useState(!1),
            downloadsDropdownOpened = _c[0],
            openDownloadsDropdown = _c[1],
            theme = styles_1.useTheme(),
            toggleDownloadsDropdown = function(value) {
              return function() {
                openDownloadsDropdown(value);
              };
            },
            isMobile = core_1.useMediaQuery(theme.breakpoints.down('sm'));
          return Array.isArray(src)
            ? isMobile
              ? React.createElement(
                  core_1.Grid,
                  { item: !0, className: classes.commonContainer },
                  React.createElement(
                    'a',
                    {
                      className: classes.downloadLink,
                      href: src[0],
                      download: !0
                    },
                    React.createElement(icons_1.CloudDownload, {
                      fontSize: 'large',
                      className: classNames.downloadIcon
                    })
                  )
                )
              : React.createElement(
                  core_1.Grid,
                  {
                    item: !0,
                    className: classnames_1.default(
                      classes.commonContainer,
                      classes.cloudDownloadIconContainer
                    ),
                    onMouseEnter: toggleDownloadsDropdown(!0),
                    onMouseLeave: toggleDownloadsDropdown(!1)
                  },
                  React.createElement(icons_1.CloudDownload, {
                    fontSize: 'large',
                    className: classnames_1.default(
                      classes.cloudDownloadIcon,
                      classNames.downloadsIcon
                    )
                  }),
                  downloadsDropdownOpened &&
                    React.createElement(
                      core_1.Grid,
                      {
                        container: !0,
                        direction: 'column',
                        alignItems: 'center',
                        justify: 'center',
                        component: core_1.Paper,
                        className: classes.downloadsContainer
                      },
                      src.map(function(srcLink, index) {
                        return React.createElement(
                          core_1.Grid,
                          {
                            key: index,
                            item: !0,
                            className: classnames_1.default(
                              classes.downloadsItemContainer,
                              classNames.downloadsContainer
                            )
                          },
                          React.createElement(
                            'a',
                            {
                              className: classnames_1.default(
                                classes.downloadLink,
                                classNames.downloadsItemLink
                              ),
                              href: srcLink,
                              download: !0
                            },
                            React.createElement(
                              core_1.Typography,
                              {
                                color: 'textPrimary',
                                className: classNames.downloadsItemText
                              },
                              srcLink
                                .substring(srcLink.lastIndexOf('.') + 1)
                                .toUpperCase()
                            )
                          )
                        );
                      })
                    )
                )
            : React.createElement(
                core_1.Grid,
                { item: !0, className: classes.commonContainer },
                React.createElement(
                  'a',
                  { className: classes.downloadLink, href: src, download: !0 },
                  React.createElement(icons_1.CloudDownload, {
                    fontSize: 'large',
                    className: classNames.downloadIcon
                  })
                )
              );
        }),
        (exports.default = React.memo(exports.AudioDownloadsControl));
      try {
        (exports.useComponentStyles.displayName = 'useComponentStyles'),
          (exports.useComponentStyles.__docgenInfo = {
            description: '',
            displayName: 'useComponentStyles',
            props: {}
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/AudioDownloadsControl.tsx#useComponentStyles'
            ] = {
              docgenInfo: exports.useComponentStyles.__docgenInfo,
              name: 'useComponentStyles',
              path:
                'src/components/AudioDownloadsControl.tsx#useComponentStyles'
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (exports.AudioDownloadsControl.displayName = 'AudioDownloadsControl'),
          (exports.AudioDownloadsControl.__docgenInfo = {
            description: '',
            displayName: 'AudioDownloadsControl',
            props: {
              src: {
                defaultValue: null,
                description: '',
                name: 'src',
                required: !0,
                type: { name: 'string | string[]' }
              },
              playerColors: {
                defaultValue: null,
                description: '',
                name: 'playerColors',
                required: !0,
                type: { name: 'any' }
              },
              classNames: {
                defaultValue: null,
                description: '',
                name: 'classNames',
                required: !1,
                type: { name: 'any' }
              }
            }
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/AudioDownloadsControl.tsx#AudioDownloadsControl'
            ] = {
              docgenInfo: exports.AudioDownloadsControl.__docgenInfo,
              name: 'AudioDownloadsControl',
              path:
                'src/components/AudioDownloadsControl.tsx#AudioDownloadsControl'
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    872: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var icons_1 = __webpack_require__(183),
        styles_1 = __webpack_require__(48),
        classnames_1 = __webpack_require__(181),
        React = __webpack_require__(0),
        player_1 = __webpack_require__(182);
      exports.useComponentStyles = styles_1.makeStyles({
        icon: function(props) {
          return {
            color: props.playerColors.active,
            '&:hover': { color: props.playerColors.hover }
          };
        }
      });
      var AudioPlayControl = function(_a) {
        var playerStatus = _a.playerStatus,
          playerColors = _a.playerColors,
          pauseAudio = _a.pauseAudio,
          playAudio = _a.playAudio,
          replayAudio = _a.replayAudio,
          _b = _a.classNames,
          classNames = void 0 === _b ? {} : _b,
          classes = exports.useComponentStyles({ playerColors: playerColors });
        switch (playerStatus) {
          case player_1.default.STATUS.PLAY:
            return React.createElement(icons_1.PauseCircleFilled, {
              fontSize: 'large',
              onClick: pauseAudio,
              className: classnames_1.default(
                classes.icon,
                classNames.pauseIcon
              )
            });
          case player_1.default.STATUS.STOP:
            return React.createElement(icons_1.Replay, {
              fontSize: 'large',
              onClick: replayAudio,
              className: classnames_1.default(
                classes.icon,
                classNames.replayIcon
              )
            });
          default:
            return React.createElement(icons_1.PlayCircleFilledWhite, {
              fontSize: 'large',
              onClick: playAudio,
              className: classnames_1.default(classes.icon, classNames.playIcon)
            });
        }
      };
      exports.default = React.memo(AudioPlayControl);
      try {
        (exports.useComponentStyles.displayName = 'useComponentStyles'),
          (exports.useComponentStyles.__docgenInfo = {
            description: '',
            displayName: 'useComponentStyles',
            props: {}
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/AudioPlayControl.tsx#useComponentStyles'
            ] = {
              docgenInfo: exports.useComponentStyles.__docgenInfo,
              name: 'useComponentStyles',
              path: 'src/components/AudioPlayControl.tsx#useComponentStyles'
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (AudioPlayControl.displayName = 'AudioPlayControl'),
          (AudioPlayControl.__docgenInfo = {
            description: '',
            displayName: 'AudioPlayControl',
            props: {
              playerStatus: {
                defaultValue: null,
                description: '',
                name: 'playerStatus',
                required: !0,
                type: { name: 'string' }
              },
              playerColors: {
                defaultValue: null,
                description: '',
                name: 'playerColors',
                required: !0,
                type: { name: 'any' }
              },
              pauseAudio: {
                defaultValue: null,
                description: '',
                name: 'pauseAudio',
                required: !0,
                type: { name: '() => void' }
              },
              playAudio: {
                defaultValue: null,
                description: '',
                name: 'playAudio',
                required: !0,
                type: { name: '() => void' }
              },
              replayAudio: {
                defaultValue: null,
                description: '',
                name: 'replayAudio',
                required: !0,
                type: { name: '() => void' }
              },
              classNames: {
                defaultValue: null,
                description: '',
                name: 'classNames',
                required: !1,
                type: { name: 'any' }
              }
            }
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/AudioPlayControl.tsx#AudioPlayControl'
            ] = {
              docgenInfo: AudioPlayControl.__docgenInfo,
              name: 'AudioPlayControl',
              path: 'src/components/AudioPlayControl.tsx#AudioPlayControl'
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    873: function(module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var core_1 = __webpack_require__(184),
        icons_1 = __webpack_require__(183),
        styles_1 = __webpack_require__(48),
        classnames_1 = __webpack_require__(181),
        React = __webpack_require__(0),
        player_1 = __webpack_require__(182);
      (exports.useComponentStyles = styles_1.makeStyles(function(theme) {
        var _a;
        return {
          sliderContainer: { flex: '1 1 auto' },
          slider: function(props) {
            return { color: props.playerColors.active };
          },
          commonContainer: {
            flex: '0 0 auto',
            '&:hover': { cursor: 'pointer' }
          },
          icon: function(props) {
            return {
              color: props.playerColors.active,
              '&:hover': { color: props.playerColors.hover }
            };
          },
          volumeIconContainer: {
            position: 'relative',
            '&:hover': { cursor: 'pointer' }
          },
          volumeControlContainer:
            ((_a = { position: 'absolute', display: 'none' }),
            (_a[theme.breakpoints.up('sm')] = {
              display: 'flex',
              height: '60px'
            }),
            (_a.padding = '10px 5px'),
            _a)
        };
      })),
        (exports.AudioVolumeControl = function(_a) {
          var muteAudio = _a.muteAudio,
            unmuteAudio = _a.unmuteAudio,
            _b = _a.classNames,
            classNames = void 0 === _b ? {} : _b,
            volume = _a.volume,
            changeAudioVolume = _a.changeAudioVolume,
            playerColors = _a.playerColors,
            classes = exports.useComponentStyles({
              playerColors: playerColors
            }),
            _c = React.useState(!1),
            volumeSlider = _c[0],
            openVolumeSlider = _c[1],
            toggleVolumeSlider = function(value) {
              return function() {
                openVolumeSlider(value);
              };
            };
          return React.createElement(
            core_1.Grid,
            {
              item: !0,
              className: classnames_1.default(
                classes.commonContainer,
                classes.volumeIconContainer
              ),
              onMouseEnter: toggleVolumeSlider(!0),
              onMouseLeave: toggleVolumeSlider(!1)
            },
            volume.status === player_1.default.VOLUME.STATUS.UNMUTE
              ? React.createElement(icons_1.VolumeUp, {
                  fontSize: 'large',
                  className: classnames_1.default(
                    classes.icon,
                    classNames.volumeIcon
                  ),
                  onClick: muteAudio
                })
              : React.createElement(icons_1.VolumeOff, {
                  fontSize: 'large',
                  className: classnames_1.default(
                    classes.icon,
                    classNames.volumeIcon
                  ),
                  onClick: unmuteAudio
                }),
            volumeSlider &&
              React.createElement(
                core_1.Paper,
                {
                  className: classnames_1.default(
                    classes.volumeControlContainer
                  )
                },
                React.createElement(core_1.Slider, {
                  orientation: 'vertical',
                  'aria-labelledby': 'volume-control',
                  value: volume.value,
                  defaultValue: player_1.default.VOLUME.DEFAULT_VALUE,
                  onChange: function(event, value) {
                    changeAudioVolume(value);
                  },
                  className: classnames_1.default(
                    classes.slider,
                    classNames.volumeSlider
                  )
                })
              )
          );
        }),
        (exports.default = React.memo(exports.AudioVolumeControl));
      try {
        (exports.useComponentStyles.displayName = 'useComponentStyles'),
          (exports.useComponentStyles.__docgenInfo = {
            description: '',
            displayName: 'useComponentStyles',
            props: {}
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/AudioVolumeControl.tsx#useComponentStyles'
            ] = {
              docgenInfo: exports.useComponentStyles.__docgenInfo,
              name: 'useComponentStyles',
              path: 'src/components/AudioVolumeControl.tsx#useComponentStyles'
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (exports.AudioVolumeControl.displayName = 'AudioVolumeControl'),
          (exports.AudioVolumeControl.__docgenInfo = {
            description: '',
            displayName: 'AudioVolumeControl',
            props: {
              playerColors: {
                defaultValue: null,
                description: '',
                name: 'playerColors',
                required: !0,
                type: { name: 'any' }
              },
              volume: {
                defaultValue: null,
                description: '',
                name: 'volume',
                required: !0,
                type: { name: 'IPlayerVolume' }
              },
              muteAudio: {
                defaultValue: null,
                description: '',
                name: 'muteAudio',
                required: !0,
                type: { name: '() => void' }
              },
              unmuteAudio: {
                defaultValue: null,
                description: '',
                name: 'unmuteAudio',
                required: !0,
                type: { name: '() => void' }
              },
              changeAudioVolume: {
                defaultValue: null,
                description: '',
                name: 'changeAudioVolume',
                required: !0,
                type: { name: '(value: any) => void' }
              },
              classNames: {
                defaultValue: null,
                description: '',
                name: 'classNames',
                required: !1,
                type: { name: 'any' }
              }
            }
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/AudioVolumeControl.tsx#AudioVolumeControl'
            ] = {
              docgenInfo: exports.AudioVolumeControl.__docgenInfo,
              name: 'AudioVolumeControl',
              path: 'src/components/AudioVolumeControl.tsx#AudioVolumeControl'
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    874: function(module, exports, __webpack_require__) {
      'use strict';
      var __assign =
        (this && this.__assign) ||
        function() {
          return (__assign =
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++)
                for (var p in (s = arguments[i]))
                  Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var actions_1 = __webpack_require__(388),
        player_1 = __webpack_require__(182);
      exports.default = function reducer(state, action) {
        switch (action.type) {
          case actions_1.PLAYER_STATUS_PLAY:
            return {
              player: __assign({}, state.player, {
                status: player_1.default.STATUS.PLAY
              })
            };
          case actions_1.PLAYER_STATUS_PAUSE:
            return {
              player: __assign({}, state.player, {
                status: player_1.default.STATUS.PAUSE
              })
            };
          case actions_1.PLAYER_VOLUME_STATUS_UNMUTE:
            return {
              player: __assign({}, state.player, {
                volume: __assign({}, state.player.volume, {
                  status: player_1.default.VOLUME.STATUS.UNMUTE
                })
              })
            };
          case actions_1.PLAYER_VOLUME_STATUS_MUTE:
            return {
              player: __assign({}, state.player, {
                volume: __assign({}, state.player.volume, {
                  status: player_1.default.VOLUME.STATUS.MUTE
                })
              })
            };
          case actions_1.PLAYER_VOLUME_CHANGE:
            return {
              player: __assign({}, state.player, {
                volume: {
                  status: player_1.default.VOLUME.STATUS.UNMUTE,
                  value: action.volumeValue
                }
              })
            };
          case actions_1.PLAYER_SET_DURATION:
            return {
              player: __assign({}, state.player, { duration: action.duration })
            };
          case actions_1.PLAYER_SET_TIME:
          case actions_1.PLAYER_SLIDER_MOVED:
            return {
              player: __assign({}, state.player, {
                progress: action.progress,
                current: action.current
              })
            };
          case actions_1.PLAYER_AUDIO_ENDED:
            return {
              player: __assign({}, state.player, {
                status: player_1.default.STATUS.STOP
              })
            };
          case actions_1.PLAYER_REPLAY:
            return {
              player: __assign({}, state.player, {
                status: player_1.default.STATUS.PLAY,
                progress: 0,
                current: 0
              })
            };
          case actions_1.PLAYER_AUTOPLAY:
            return {
              player: __assign({}, state.player, {
                status: player_1.default.STATUS.PLAY,
                autoplay: !0
              })
            };
          case actions_1.PLAYER_LOOP:
            return {
              player: __assign({}, state.player, { loop: action.loop })
            };
          default:
            return state;
        }
      };
    }
  },
  [[427, 1, 2]]
]);
//# sourceMappingURL=main.b9dd46a79ae753d1f50f.bundle.js.map
