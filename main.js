var faqs = [
  {
    id: 1,
    qus: 'What is frequently asked in FAQ?',
    ans: 'A frequently asked questions (FAQ) list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps.',
    count: 7,
  },

  {
    id: 2,
    qus: 'How many FAQs should I have?',
    ans: `Fewer than five questions might indicate you haven't done your research… or that you didn't need an FAQ to begin with. Fielding dozens of questions isn't good either, but if they're all necessary, consider splitting your FAQ into multiple pages.`,
    count: 8,
  },
  {
    id: 3,
    qus: 'Where can in edit my address?',
    ans: 'If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.',
    count: 9,
  },
  {
    id: 4,
    qus: 'How can I change my password?',
    ans: 'You can change your password in your customer account.',
    count: 1,
  },
  {
    id: 5,
    qus: 'How can I change my email address?',
    ans: 'You can change your email address in your customer account.',
    count: 5,
  },
  {
    id: 6,
    qus: 'How can I change my phone number?',
    ans: 'You can change your phone number in your customer account.',
    count: 0,
  },
  {
    id: 7,
    qus: 'How can I change my address?',
    ans: 'You can change your address in your customer account.',
    count: 2,
  },
  {
    id: 8,
    qus: 'How can I change my company name?',
    ans: 'You can change your company name in your customer account.',
    count: 3,
  },
  {
    id: 9,
    qus: 'How can I change my company address?',
    ans: 'You can change your company address in your customer account.',
    count: 7,
  },
  {
    id: 10,
    qus: 'How can I change my company phone number?',
    ans: 'You can change your company phone number in your customer account.',
    count: 5,
  },
];

var faqmain = document.getElementById('faqmain');

function showAll() {
  var faqhtml = '';
  for (var i = 0; i < faqs.length; i++) {
    faqhtml =
      faqhtml +
      `<div class="faq-item">
     <h2 aria-expanded="false" onClick="toggleFaq(this)">
       <span class="faq-title"
         >${faqs[i].id}. ${faqs[i].qus}</span
       ><span class="icon" aria-hidden="true"></span>
       <div class="left">
       <span class="count">${faqs[i].count}</span>
       <span onclick="markUseful(${faqs[i].id})" class="votetxt">VOTE
       </span></div>
     </h2>
     <div class="faq-content">
       <p>
         ${faqs[i].ans}
       </p>
     </div>
   </div>`;
  }
  faqmain.innerHTML = faqhtml;
}
function toggleFaq(e) {
  var itemToggle = e.getAttribute('aria-expanded');
  if (itemToggle == 'false') {
    e.setAttribute('aria-expanded', 'true');
  } else {
    e.setAttribute('aria-expanded', 'false');
  }
}
function markUseful(faqID) {
  var faq = faqs.find((x) => x.id == faqID);
  faq.count++;
  showAll();
}

document.getElementById('sort').onclick = () => {
  faqs.sort(function (x, y) {
    return y.count - x.count;
  });
  showAll();
};

showAll();
