# ChatWay Widget Setup Guide

## Implementation Summary

Your ChatWay widget is now properly configured to display on all pages of your Next.js App Router application.

## File Structure

```
/components/ChatWayWidget.tsx    - Client-side widget loader
/app/layout.tsx                   - Root layout with widget integration
/next.config.mjs                  - CSP headers configured
```

## How It Works

### ChatWayWidget.tsx (Client Component)

- Uses `"use client"` directive for client-side execution only
- Runs in `useEffect` to prevent hydration mismatch
- Prevents duplicate script injection using `useRef`
- Checks if script already exists before appending
- Waits for `DOMContentLoaded` if DOM isn't ready
- Appends script to `document.body` safely
- Includes comprehensive console logging for debugging
- Does NOT remove script on unmount (widget persists)

### Layout Integration

```tsx
<body>
  <CartProvider>
    <ScrollToTop />
    {children}
    <ChatWayWidget />          {/* Loads script globally */}
    <WhatsAppWidget />
  </CartProvider>
</body>
```

## Security Configuration

### Content-Security-Policy Headers

The CSP headers in `next.config.mjs` allow:
- ChatWay script from `https://cdn.chatway.app`
- WebSocket connections to `wss://chatway.app`
- Unsafe-eval and unsafe-inline for widget initialization

## Debugging

### Browser Console Logs

When the widget loads successfully, you'll see:
```
[v0] ChatWay widget script loaded successfully
[v0] ChatWay global object detected, widget should be active
[v0] ChatWay script appended to document.body
```

### Verify Widget is Loading

1. Open browser DevTools (F12)
2. Go to Network tab
3. Filter by "chatway"
4. Should see: `widget.js?id=i3kTzjNeW8UX` with status 200
5. Check Console for `[v0]` logs

### If Widget Still Doesn't Show

1. **Check if script loaded**: DevTools Network tab
2. **Check ChatWay ID**: Verify `i3kTzjNeW8UX` is correct
3. **Check browser console**: Look for error messages
4. **Hard refresh**: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
5. **Check domain whitelist**: In ChatWay dashboard, ensure your domain is whitelisted

## ChatWay Dashboard Configuration

If the widget still doesn't appear, verify in ChatWay dashboard:

1. Go to https://app.chatway.com
2. Select your widget (ID: `i3kTzjNeW8UX`)
3. Go to Settings → Domains
4. Add your domains to the whitelist:
   - `naturalcannabisoil.shop`
   - `www.naturalcannabisoil.shop`
   - Your Vercel preview domain (if testing)

## Production Deployment

1. Deploy to Vercel
2. ChatWay widget loads automatically on all pages
3. Widget appears in bottom-right corner by default
4. Can be customized in ChatWay dashboard settings

## Testing Locally

```bash
npm run dev
# Visit http://localhost:3000
# Open DevTools Console
# Should see ChatWay loading logs
```

## What Makes This Implementation Work

✅ Client-side only (no server-side rendering issues)  
✅ Async script loading (doesn't block page rendering)  
✅ Duplicate prevention (won't load twice on SPA)  
✅ Hydration safe (useEffect prevents mismatch)  
✅ Error handling (graceful fallback)  
✅ CSP compliant (headers allow ChatWay domains)  
✅ React 18 compatible (no deprecated patterns)  
✅ Next.js 13+ App Router (uses client component)

## Troubleshooting Checklist

- [ ] Widget script loads in Network tab
- [ ] No console errors shown
- [ ] ChatWay logs appear (`[v0]`)
- [ ] Domain is whitelisted in ChatWay dashboard
- [ ] Hard refresh browser (clear cache)
- [ ] Check CSP headers are correct
- [ ] Verify ChatWay ID: `i3kTzjNeW8UX`
- [ ] Test in incognito/private mode

If issues persist, check ChatWay support or verify widget ID in their dashboard.
