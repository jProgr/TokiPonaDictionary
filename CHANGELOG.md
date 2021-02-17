# Changelog

## 210217
### Changed
- The search algorithm now uses complete words instead of partial ones.
- Improved the page load: Now styles are loaded with the content and they are smaller.

### Fixed
- Fixed multiple definitions from the dictionary.
- Minor fixes to the main input on mobile devices.

## 200729
### Changed
- Changed behaviour on footer links.
- The project now uses different tooling in order to serve less bytes:
    - The page is now 87% smaller: From serving around 1536 KiB to 200 KiB.
    - Less requests: from 11 to 2 if fonts are found on the client machine.
    - Even if fonts need to be served they are optimized: From serving 1228 KiB to 20 KiB.
- Refactored search functionality: It is now faster and uses less memory.

## 200503
### Changed
- Updated dependencies.
- The dependencies are now loaded from the same source instead of some third party CDN.

## 200121
### Fixed
- Fixed multiple definitions from the dictionary.

## 191130
### Added
- A changelog will now be kept.

### Changed
- The "*" mark now has a better definition.
- Friendlier language.
- Updated some meanings and words of the dictionary according to The Official Toki Pona Dictionary (2014).
- Updated credits and description of the project.
