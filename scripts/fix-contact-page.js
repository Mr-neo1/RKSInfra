#!/usr/bin/env node

/**
 * Fix ContactPage.js to add missing SITE_CONFIG import
 * This fixes the build error for old CRA files in src/ directory
 */

const fs = require('fs')
const path = require('path')

const contactPagePath = path.join(__dirname, '..', 'src', 'pages', 'ContactPage.js')

if (fs.existsSync(contactPagePath)) {
  console.log('Found ContactPage.js, fixing imports...')
  
  let content = fs.readFileSync(contactPagePath, 'utf8')
  
  // Check if SITE_CONFIG import already exists
  if (!content.includes("import { SITE_CONFIG }") && !content.includes("from '@/lib/constants'")) {
    // Find the last import statement
    const importMatch = content.match(/(import\s+.*?from\s+['"].*?['"];?\s*\n)/g)
    
    if (importMatch && importMatch.length > 0) {
      const lastImport = importMatch[importMatch.length - 1]
      const lastImportIndex = content.lastIndexOf(lastImport) + lastImport.length
      
      // Add SITE_CONFIG import after the last import
      const newImport = "import { SITE_CONFIG } from '@/lib/constants';\n"
      content = content.slice(0, lastImportIndex) + newImport + content.slice(lastImportIndex)
      
      fs.writeFileSync(contactPagePath, content, 'utf8')
      console.log('✅ Fixed ContactPage.js - added SITE_CONFIG import')
    } else {
      // No imports found, add at the top
      const firstLineIndex = content.indexOf('\n')
      const newImport = "import { SITE_CONFIG } from '@/lib/constants';\n"
      content = content.slice(0, firstLineIndex + 1) + newImport + content.slice(firstLineIndex + 1)
      
      fs.writeFileSync(contactPagePath, content, 'utf8')
      console.log('✅ Fixed ContactPage.js - added SITE_CONFIG import at top')
    }
  } else {
    console.log('✅ ContactPage.js already has SITE_CONFIG import')
  }
} else {
  console.log('✅ ContactPage.js does not exist (using App Router)')
}

