#!/usr/bin/env node

/**
 * Remove src/ directory before build if it exists
 * This prevents react-scripts from trying to build old CRA files
 */

const fs = require('fs')
const path = require('path')

const srcDir = path.join(__dirname, '..', 'src')

if (fs.existsSync(srcDir)) {
  console.log('⚠️  Found src/ directory (old CRA files)')
  console.log('🗑️  Removing src/ directory to prevent build errors...')
  
  try {
    fs.rmSync(srcDir, { recursive: true, force: true })
    console.log('✅ Successfully removed src/ directory')
  } catch (error) {
    console.error('❌ Error removing src/ directory:', error.message)
    // Don't fail the build, just warn
  }
} else {
  console.log('✅ No src/ directory found (using App Router)')
}

