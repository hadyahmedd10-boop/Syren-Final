/**
 * Syren Final QA Checklist Script
 * Checks for:
 * - Required environment variables
 * - No placeholder "xxxx" in critical files
 * - Slug counts for experiences, destinations, and excursions
 */

const fs = require('fs');
const path = require('path');

// 1. Required Env Vars
const REQUIRED_ENV_VARS = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'RESEND_API_KEY',
  'NOTIFY_EMAIL',
  'NEXT_PUBLIC_SITE_URL',
  'STRIPE_SECRET_KEY',
  'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY'
];

function checkEnvVars() {
  console.log('🔍 Checking Environment Variables...');
  const missing = REQUIRED_ENV_VARS.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.warn('⚠️  Missing environment variables (might be okay if only in dev):');
    missing.forEach(key => console.warn(`   - ${key}`));
  } else {
    console.log('✅ All required environment variables are set.');
  }
}

// 2. Placeholder Check
const CRITICAL_FILES = [
  'src/app/api/quote/route.ts',
  'src/app/api/notify/quote/route.ts',
  'src/app/api/testimonials/submit/route.ts',
  'src/lib/supabaseClient.ts',
  'src/lib/supabaseAdmin.ts'
];

function checkPlaceholders() {
  console.log('\n🔍 Checking for "xxxx" placeholders...');
  let found = false;
  
  CRITICAL_FILES.forEach(relPath => {
    const fullPath = path.resolve(process.cwd(), relPath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.toLowerCase().includes('xxxx')) {
        console.error(`❌ Found "xxxx" placeholder in ${relPath}`);
        found = true;
      }
    }
  });

  if (!found) {
    console.log('✅ No "xxxx" placeholders found in critical files.');
  }
}

// 3. Slug Counts
function checkSlugs() {
  console.log('\n🔍 Auditing Slugs...');
  
  const dataPath = path.resolve(process.cwd(), 'src/data');
  
  try {
    // We read the files as strings and use regex since we can't easily import TS files in a simple Node script without ts-node
    const experiencesFile = fs.readFileSync(path.join(dataPath, 'experiences.ts'), 'utf8');
    const destinationsFile = fs.readFileSync(path.join(dataPath, 'destinations.ts'), 'utf8');
    const excursionsFile = fs.readFileSync(path.join(dataPath, 'excursions.ts'), 'utf8');

    const expMatches = experiencesFile.match(/slug:\s*["']([^"']+)["']/g) || [];
    const destMatches = destinationsFile.match(/slug:\s*["']([^"']+)["']/g) || [];
    const excMatches = excursionsFile.match(/slug:\s*["']([^"']+)["']/g) || [];

    console.log(`📊 Statistics:`);
    console.log(`   - Experiences:  ${expMatches.length}`);
    console.log(`   - Destinations: ${destMatches.length}`);
    console.log(`   - Excursions:   ${excMatches.length}`);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('❌ Error reading data files for slug count:', message);
  }
}

// Run all checks
console.log('🚀 Starting Syren QA Audit...\n');
checkEnvVars();
checkPlaceholders();
checkSlugs();
console.log('\n✅ QA Audit Complete.');
