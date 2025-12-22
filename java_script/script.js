// Demo form submission (replace with real backend)
function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const course = document.getElementById('course').value;

  if(!name || !phone || !course){
    alert('দয়া করে নাম, ফোন ও কোর্স নির্বাচন অনিবার্য পূরণ করুন।');
    return;
  }

  alert('ধন্যবাদ ' + name + ' — আপনার ফর্ম গ্রহণ করা হয়েছে। আমরা ২৪ ঘণ্টার মধ্যে যোগাযোগ করব।');
  document.getElementById('admissionForm').reset();
}

// Extra JS can be added later (mobile menu, animation etc.)
(function(){
  const header = document.querySelector('header');
})();
