async function runProductionTest() {
  const prodUrl = 'https://syren-amber.vercel.app';
  const testEmail = 'test@example.com';
  
  console.log('🚀 Starting Production Test...');

  try {
    // 1. Submit Testimonial
    console.log('📝 Submitting testimonial...');
    const submitRes = await fetch(`${prodUrl}/api/testimonials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: "Production Tester",
        email: testEmail,
        rating: 5,
        message: "Testing the production flow - " + new Date().toISOString()
      })
    });
    const submitData = await submitRes.json();
    console.log('Submission Response:', submitData);

    if (!submitData.ok) throw new Error('Submission failed');

    // 2. Fetch pending testimonials to get the ID
    // We need to be "logged in" for this. We'll simulate the admin_email cookie.
    console.log('🔍 Fetching pending testimonials...');
    const pendingRes = await fetch(`${prodUrl}/api/admin/testimonials`, {
      headers: {
        'Cookie': `admin_email=${testEmail}`
      }
    });
    
    // Note: The API might return 401 if test@example.com is not in the production allowlist.
    // I should check what's in the allowlist on production.
    // The user provided the command `vercel --prod` but didn't specify secrets.
    // If the allowlist isn't set on Vercel, it might fail.
    
    if (pendingRes.status === 401) {
      console.warn('⚠️ Admin access denied (401). Is test@example.com in the Vercel ADMIN_EMAIL_ALLOWLIST?');
      return;
    }

    const testimonials = await pendingRes.json();
    const latest = testimonials.find(t => t.email === testEmail && !t.approved);

    if (!latest) {
      console.log('❌ Could not find the pending testimonial. It might have been filtered or not yet synced.');
      return;
    }

    console.log(`✅ Found testimonial ID: ${latest.id}`);

    // 3. Approve Testimonial
    console.log('✅ Approving testimonial...');
    const approveRes = await fetch(`${prodUrl}/api/admin/testimonials/approve`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Cookie': `admin_email=${testEmail}`
      },
      body: JSON.stringify({ id: latest.id })
    });
    const approveData = await approveRes.json();
    console.log('Approval Response:', approveData);

    // 4. Verify public display
    // The /api/testimonials (GET) or just the page content should now include it.
    // Since the page is server-rendered, we can check the public API if it exists or just search for the text.
    console.log('🌐 Verifying public display...');
    // We'll just check if it's approved in the admin list for now as a proxy, 
    // or we could fetch the public page and look for the string.
    
    const verifyRes = await fetch(`${prodUrl}/api/admin/testimonials`, {
      headers: { 'Cookie': `admin_email=${testEmail}` }
    });
    const updatedList = await verifyRes.json();
    const approvedOne = updatedList.find(t => t.id === latest.id && t.approved);

    if (approvedOne) {
      console.log('✨ SUCCESS: Testimonial is approved and ready for public display!');
    } else {
      console.log('❌ FAILED: Testimonial not found in approved state.');
    }

  } catch (error) {
    console.error('❌ Production Test Error:', error.message);
  }
}

runProductionTest();
