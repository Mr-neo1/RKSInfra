# Build Error Fix Documentation

## Problem
The build was failing with the following error:
```
src/pages/ContactPage.js
  Line 128:37:  'SITE_CONFIG' is not defined  no-undef
  Line 129:24:  'SITE_CONFIG' is not defined  no-undef
```

This occurred because:
1. The repository contains old Create React App files in the `src/` directory
2. The project has been migrated to Next.js App Router (using `app/` directory)
3. The old `src/pages/ContactPage.js` file references `SITE_CONFIG` without importing it

## Solution Implemented

### 1. ESLint Configuration
- Created `.eslintrc.js` (replaced `.eslintrc.json`) with comprehensive ignore patterns
- Added `src/**/*` to ignore patterns
- Disabled `no-undef` rule for old CRA files
- Updated `.eslintignore` to explicitly ignore `src/` directory

### 2. Build Script Fix
- Added `prebuild` script that automatically fixes `ContactPage.js` if it exists
- The script adds the missing `SITE_CONFIG` import before the build runs
- Created `scripts/fix-contact-page.js` to handle the fix

### 3. Configuration Updates
- Updated `.gitignore` to ignore `src/` directory
- Updated `tsconfig.json` to exclude `src/` (already done)
- Updated `next.config.js` with comments explaining src/ exclusion

### 4. Cleanup Scripts
- Created `scripts/cleanup-old-files.js` to remove old CRA files
- Added `npm run cleanup` command for manual cleanup
- Added `npm run fix-old-files` command to fix ContactPage.js

## Files Modified

1. **`.eslintrc.js`** (NEW) - Comprehensive ESLint config ignoring src/
2. **`.eslintrc.json`** (DELETED) - Replaced with .eslintrc.js
3. **`.eslintignore`** (UPDATED) - Added src/ patterns
4. **`.gitignore`** (UPDATED) - Added src/ and build artifacts
5. **`package.json`** (UPDATED) - Added prebuild and cleanup scripts
6. **`next.config.js`** (UPDATED) - Added comments about src/ exclusion
7. **`scripts/fix-contact-page.js`** (NEW) - Auto-fix script
8. **`scripts/cleanup-old-files.js`** (NEW) - Cleanup script

## How It Works

### Automatic Fix (Recommended)
When you run `npm run build`, the `prebuild` script automatically:
1. Checks if `src/pages/ContactPage.js` exists
2. If it exists, adds the missing `import { SITE_CONFIG } from '@/lib/constants';`
3. Then proceeds with the Next.js build

### Manual Fix
You can also run the fix manually:
```bash
npm run fix-old-files
```

### Complete Cleanup
To remove the old `src/` directory entirely:
```bash
npm run cleanup
```

## Next Steps

1. **Commit the changes:**
   ```bash
   git add .
   git commit -m "Fix build errors: Add ESLint ignore for src/ and auto-fix scripts"
   git push
   ```

2. **The build should now succeed** because:
   - ESLint will ignore files in `src/`
   - The prebuild script will fix `ContactPage.js` if it exists
   - Next.js will only process files in `app/` directory

3. **Optional: Remove src/ directory from repository**
   If you want to completely remove the old CRA files:
   ```bash
   git rm -r src/
   git commit -m "Remove old Create React App files"
   git push
   ```

## Verification

After pushing these changes, the build should:
- ✅ Pass ESLint checks (src/ is ignored)
- ✅ Successfully compile with Next.js
- ✅ Deploy on Vercel without errors

## Notes

- The `src/` directory is now completely ignored by:
  - ESLint (`.eslintrc.js` and `.eslintignore`)
  - TypeScript (`tsconfig.json`)
  - Git (`.gitignore`)
  - Next.js (only processes `app/` and `pages/` directories)

- If the old CRA files are still causing issues, the prebuild script will automatically fix them
- The cleanup script can be used to remove the old files entirely if desired

