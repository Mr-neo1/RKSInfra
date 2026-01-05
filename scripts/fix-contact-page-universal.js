#!/usr/bin/env node

/**
 * Universal fix for ContactPage.js - works with both react-scripts and Next.js
 * This script fixes the missing SITE_CONFIG import in src/pages/ContactPage.js
 */

const fs = require('fs')
const path = require('path')

const contactPagePath = path.join(__dirname, '..', 'src', 'pages', 'ContactPage.js')

if (fs.existsSync(contactPagePath)) {
  console.log('🔧 Found ContactPage.js, fixing missing SITE_CONFIG import...')
  
  let content = fs.readFileSync(contactPagePath, 'utf8')
  
  // Check if SITE_CONFIG import already exists
  const hasSiteConfigImport = content.includes("import { SITE_CONFIG }") || 
                             content.includes("import {SITE_CONFIG}") ||
                             content.includes("from '@/lib/constants'") ||
                             content.includes("from '../lib/constants'") ||
                             content.includes("from '../../lib/constants'") ||
                             content.includes("from '../../../lib/constants'")
  
  if (!hasSiteConfigImport) {
    // Try to find existing imports to determine the import style
    const importLines = content.match(/^import\s+.*?from\s+['"].*?['"];?$/gm)
    
    // Determine the correct path - try multiple possibilities
    let importPath = "@/lib/constants"
    
    // Check if there are other imports to determine the path style
    if (importLines && importLines.length > 0) {
      const firstImport = importLines[0]
      if (firstImport.includes("'../") || firstImport.includes('"../')) {
        // Relative imports
        importPath = "../../../lib/constants"
      } else if (firstImport.includes("'@/") || firstImport.includes('"@/')) {
        // Absolute imports with @ alias
        importPath = "@/lib/constants"
      } else if (firstImport.includes("'./") || firstImport.includes('"./')) {
        // Relative imports from same directory
        importPath = "../../../lib/constants"
      }
    }
    
    // Find the best place to insert the import
    let newContent = content
    
    if (importLines && importLines.length > 0) {
      // Insert after the last import
      const lastImport = importLines[importLines.length - 1]
      const lastImportIndex = content.lastIndexOf(lastImport)
      const insertIndex = content.indexOf('\n', lastImportIndex) + 1
      
      const newImport = `import { SITE_CONFIG } from '${importPath}';\n`
      newContent = content.slice(0, insertIndex) + newImport + content.slice(insertIndex)
    } else {
      // No imports found, add at the very top
      const newImport = `import { SITE_CONFIG } from '${importPath}';\n\n`
      newContent = newImport + content
    }
    
    fs.writeFileSync(contactPagePath, newContent, 'utf8')
    console.log(`✅ Fixed ContactPage.js - added SITE_CONFIG import from '${importPath}'`)
  } else {
    console.log('✅ ContactPage.js already has SITE_CONFIG import')
  }
} else {
  console.log('✅ ContactPage.js does not exist (using App Router)')
}

