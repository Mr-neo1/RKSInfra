#!/usr/bin/env node

/**
 * Pre-build fix script that runs before ANY build command
 * This ensures ContactPage.js is fixed regardless of build system
 */

const fs = require('fs')
const path = require('path')

console.log('🔧 Running pre-build fix script...')

// Fix ContactPage.js
const contactPagePath = path.join(__dirname, '..', 'src', 'pages', 'ContactPage.js')

if (fs.existsSync(contactPagePath)) {
  console.log('📝 Found ContactPage.js, checking for SITE_CONFIG import...')
  
  let content = fs.readFileSync(contactPagePath, 'utf8')
  
  // Check if SITE_CONFIG import already exists
  const hasSiteConfigImport = content.includes("import { SITE_CONFIG }") || 
                             content.includes("import {SITE_CONFIG}") ||
                             content.includes("SITE_CONFIG") && content.includes("from")
  
  if (!hasSiteConfigImport) {
    console.log('⚠️  Missing SITE_CONFIG import, adding it...')
    
    // Try different import path styles
    let importPath = "@/lib/constants"
    
    // Check existing imports to determine path style
    const importMatch = content.match(/import\s+.*?from\s+['"](.*?)['"]/g)
    if (importMatch && importMatch.length > 0) {
      const firstImport = importMatch[0]
      if (firstImport.includes("../")) {
        importPath = "../../../lib/constants"
      } else if (firstImport.includes("@/")) {
        importPath = "@/lib/constants"
      }
    }
    
    // Find where to insert the import
    const importLines = content.match(/^import\s+.*?from\s+['"].*?['"];?$/gm)
    
    if (importLines && importLines.length > 0) {
      // Insert after last import
      const lastImport = importLines[importLines.length - 1]
      const lastImportIndex = content.lastIndexOf(lastImport)
      const insertIndex = content.indexOf('\n', lastImportIndex) + 1
      const newImport = `import { SITE_CONFIG } from '${importPath}';\n`
      content = content.slice(0, insertIndex) + newImport + content.slice(insertIndex)
    } else {
      // Add at the top
      const newImport = `import { SITE_CONFIG } from '${importPath}';\n\n`
      content = newImport + content
    }
    
    fs.writeFileSync(contactPagePath, content, 'utf8')
    console.log(`✅ Added SITE_CONFIG import from '${importPath}'`)
  } else {
    console.log('✅ ContactPage.js already has SITE_CONFIG import')
  }
} else {
  console.log('✅ ContactPage.js does not exist (using App Router)')
}

console.log('✅ Pre-build fix completed\n')

