# ChatWay Widget - Domain Configuration Fix

## Problem
ChatWay widget displays on demo domain but NOT on custom domain (naturalcannabisoil.shop)

## Root Cause
ChatWay restricts widget display to whitelisted domains in their dashboard. Your custom domain needs to be added to the whitelist.

## Solution - 3 Steps

### Step 1: Go to ChatWay Dashboard
1. Open https://chatway.app
2. Sign in with your account
3. Navigate to your widget settings

### Step 2: Find Domain Whitelist Settings
1. Go to **Widget Settings** → **Security** or **Domain Settings**
2. Look for "Allowed Domains" or "Domain Whitelist"
3. This is where you restrict which domains can use the widget

### Step 3: Add Your Custom Domain
Add these domains to the whitelist:
```
naturalcannabisoil.shop
www.naturalcannabisoil.shop
*.naturalcannabisoil.shop
```

Also keep your demo domain if needed:
```
vercel-provided-domain.vercel.app
```

### Step 4: Save & Test
1. Click **Save** in ChatWay dashboard
2. Wait 2-5 minutes for changes to propagate
3. Hard refresh your custom domain (Ctrl+Shift+R or Cmd+Shift+R)
4. ChatWay widget should now appear

## Current Widget Configuration
- **Widget ID:** `i3kTzjNeW8UX`
- **Script URL:** `https://cdn.chatway.app/widget.js?id=i3kTzjNeW8UX`
- **Component:** `/components/ChatWayWidget.tsx`

## Troubleshooting

### If still not showing:
1. Open browser **DevTools** (F12 or Cmd+Option+I)
2. Go to **Console** tab
3. Look for errors related to ChatWay
4. Check **Network** tab - is the script loading? (`widget.js`)

### Common Issues:
- **Domain not in whitelist** - Most common, see Step 3
- **Script blocked by CSP** - Already configured correctly in next.config.mjs
- **Browser cache** - Hard refresh (Ctrl+Shift+R)
- **Subdomain mismatch** - Make sure www and non-www versions are both whitelisted

## Testing
After adding domain to ChatWay whitelist:
1. Visit `https://naturalcannabisoil.shop`
2. ChatWay widget should appear (green chat bubble)
3. Click to test opening chat interface
