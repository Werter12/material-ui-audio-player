# Changelog

All notable changes to this project will be documented in this file.

## 1.7.1 - 2021-10-17
### Change
- Update docs. Change src audio
- Update dependabot to watch only for prod dependencies

## 1.7.0 - 2021-10-05
### Added

- Add "getPlayer" prop as part of controlled audio player implimentation

## 1.6.7 - 2021-10-05
### Added

- Add "muted" props to control mute state of audio and "volume" button from external sources
- Add yarn instead npm requirement

## 1.6.6 (1.6.5) - 2021-07-04

### Changed

- Remove redundant console.log

## 1.6.4 - 2021-07-04

### Changed

- Replace tslint on eslint
- Fix safari play button issue

## 1.6.3 - 2021-07-04

### Added

- Add onClose handler

## 1.6.2 - 2021-04-03

### Changed

- Change default zIndex of the Volume slider container

### Added

- Add volumeSliderContainer className

## 1.6.1 - 2021-02-28

### Changed

- Update README

## 1.6.0 - 2021-02-28

### Added

- Add displaySlider prop
- Add Small AudioPlayer story
- Add CloseIcon with displayCloseButton prop

## 1.5.3 - 2020-12-29

### Changed

- Fix autoplay play button

## 1.5.2 - 2020-12-04

### Added

- Add check for duration on Infinite to fix a bug with NaN:NaN

## 1.5.1 - 2020-12-01

### Added

- Add volume prop
- Add remaning initial state to prevent -NaN

## 1.5.0 - 2020-11-27

### Added

- Add check for currentTime

### Changed

- Updated devDependencies to latest

## 1.4.0 - 2020-10-10

### Added

- Add time prop
- Add timePosition prop

## 1.3.6 - 2020-09-27

### Changed

- Fix src change

## 1.3.5 - 2020-09-27

### Added

- Add different song for source option

## 1.3.4 - 2020-09-27

### Added

- Add aditional check for currentTime

## 1.3.3 - 2020-09-27

### Added

- Add default for getProgress, getCurrentTime

## 1.3.1 - 2020-09-27

### Added

- Add checks for progress, currentTime, duration

## 1.3.0 - 2020-09-27

### Added

- Add onPlayed, onPaused, onFinished

## 1.2.0 - 2020-08-03

### Changed

- Bump tslint

### Added

- Add bundle size badge
- Add save imports (for bundlers)

## 1.1.10 - 2020-07-26

### Changed

- Update storybook example audio urls
- Bump websocket-eextentions
- Bump types/react
- Bump storybook dependencies
- Bump enzyme-to-json
- Bump prettier
- Bump lint-staged
- Bump webpack
- Bump typescript
- Bump material-ui

### Added

- Dependabot
- Add .nvmrc

## 1.1.9 - 2020-06-03

### Changed

- Changed actions.ts added checks for player.current

### Added

- Travic CI integration

## 1.1.7 - 2020-05-08

### Changed

- Fix readme text

## 1.1.6 - 2020-05-08

### Added

- Added icons attribute

## 1.1.5 - 2020-05-08

### Changed

- Changed getFormattedTime function, added hours support

## 1.1.4 - 2020-05-02

### Added

- Added to the doc and storybook replayIcon, pauseIcon classNames

## 1.1.3 - 2020-04-28

### Changed

- Move React, Material-UI to the devDependencies

## 1.1.2 - 2020-04-22

### Changed

- Fix src change logic

### Added

- Add knob to the stroybook as an example that is dynamically changing src is working

## 1.1.1 - 2020-04-13

### Changed

- Update README.md

## 1.1.0 - 2020-04-13

### Changed

- Update packages
- Fix knobs and several AudoPlayer types

### Added

- CHANGELOG.md

### Removed

- material-ui/styles and started using styles from material-ui/core

## 1.0.8 - 2020-04-13

### Changed

- Fix references to @material-ui/styles in the imports to useStyles and ThemeProvider. [PR#3](https://github.com/Werter12/material-ui-audio-player/pull/3)
