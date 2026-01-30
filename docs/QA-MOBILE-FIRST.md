# QA Checklist: Mobile First

## Header / Navbar (iPhone width 375px)
- [ ] Burger icon opens menu 100% of the time
- [ ] Menu overlays page, scroll locked
- [ ] “The Map” accordion opens, destination links clickable
- [ ] Close button works
- [ ] Tapping outside closes menu (optional)
- [ ] Logo always scrolls to #hero

## Hero
- [ ] Headline not clipped
- [ ] CTA buttons visible above fold
- [ ] Text contrast readable
- [ ] No horizontal scroll

## Experiences page
- [ ] Sticky section nav visible and tappable
- [ ] Active state updates while scrolling
- [ ] Section jumps align (scroll-mt works)
- [ ] Cards: no overflow, consistent spacing

## Experience details
- [ ] Itinerary timeline images load (no fallback when files exist)
- [ ] Image aspect ratio stable, no layout jump
- [ ] Day headings wrap correctly

## Forms
- [ ] Required fields validated
- [ ] Inline error messages
- [ ] Loading state disables submit
- [ ] Success state confirms submission
- [ ] No double-submit

## Performance sanity
- [ ] Lighthouse Mobile: no red flags
- [ ] Images are optimized (Next/Image) OR stable (img + width/height)

## Regression checks
- [ ] Desktop still matches
- [ ] No console errors
