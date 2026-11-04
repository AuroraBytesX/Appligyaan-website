/**
 * Appligyaan Institute - Client Application Script
 * Manages responsive navigation, accessible FAQ accordion, and admissions WhatsApp dispatcher.
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Dynamic Footer Copyright Year
  var yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Responsive Mobile Navigation Drawer
  var mobileToggleBtn = document.getElementById('mobileToggleBtn');
  var mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', function () {
      var isOpen = mobileDrawer.classList.contains('active');
      if (isOpen) {
        mobileDrawer.classList.remove('active');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        mobileDrawer.classList.add('active');
        mobileToggleBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // Close mobile drawer when an anchor link is selected
    var drawerLinks = mobileDrawer.querySelectorAll('a');
    drawerLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileDrawer.classList.remove('active');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Dismiss drawer on Escape key press
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
        mobileDrawer.classList.remove('active');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Accessible FAQ Accordion
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');

        // Close any currently open FAQ item
        faqItems.forEach(function (otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
            var otherTrigger = otherItem.querySelector('.faq-trigger');
            if (otherTrigger) {
              otherTrigger.setAttribute('aria-expanded', 'false');
            }
          }
        });

        // Toggle selected item
        if (isOpen) {
          item.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 4. Admissions Inquiry Desk (WhatsApp Integration)
  var inquiryForm = document.getElementById('inquiryDeskForm');
  var formAlert = document.getElementById('formAlert');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var nameInput = document.getElementById('studentName');
      var phoneInput = document.getElementById('studentPhone');
      var courseInput = document.getElementById('studentCourse');
      var backgroundInput = document.getElementById('studentBackground');
      var messageInput = document.getElementById('studentMessage');

      var name = nameInput ? nameInput.value.trim() : '';
      var phone = phoneInput ? phoneInput.value.trim() : '';
      var course = courseInput ? courseInput.value : '';
      var background = backgroundInput ? backgroundInput.value : 'Not specified';
      var message = messageInput ? messageInput.value.trim() : '';

      // Validate required inputs
      if (!name || !phone || !course) {
        showAlert('Please fill in your name, contact number, and select a course.', 'error');
        return;
      }

      var phoneClean = phone.replace(/[^0-9]/g, '');
      if (phoneClean.length < 10) {
        showAlert('Please provide a valid 10-digit mobile number.', 'error');
        return;
      }

      // Format WhatsApp query message
      var text = 'Hello Appligyaan Institute,\n\n' +
        'I would like to inquire about admissions.\n' +
        '• Name: ' + name + '\n' +
        '• Phone: ' + phone + '\n' +
        '• Course of Interest: ' + course + '\n' +
        '• Background: ' + background + '\n';

      if (message) {
        text += '• Note/Query: ' + message + '\n';
      }

      text += '\nPlease share the syllabus and upcoming batch schedule.';

      var targetNumber = '917278284166';
      var waUrl = 'https://wa.me/' + targetNumber + '?text=' + encodeURIComponent(text);

      showAlert('Inquiry generated! Redirecting to the WhatsApp admissions desk...', 'success');

      setTimeout(function () {
        window.open(waUrl, '_blank');
      }, 400);
    });
  }

  function showAlert(msg, type) {
    if (!formAlert) return;
    formAlert.textContent = msg;
    formAlert.className = 'form-alert ' + type;
    formAlert.style.display = 'block';
  }
});
