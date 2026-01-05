#!/usr/bin/env node

/**
 * Cleanup script to remove old Create React App files
 * This script removes the src/ directory that's not needed for Next.js App Router
 */

const fs = require('fs')
const path = require('path')

const srcDir = path.join(__dirname, '..', 'src')

if (fs.existsSync(srcDir)) {
  console.log('Removing old src/ directory...')
  fs.rmSync(srcDir, { recursive: true, force: true })
  console.log('✅ Removed src/ directory')
} else {
  console.log('✅ src/ directory does not exist (already clean)')
}

