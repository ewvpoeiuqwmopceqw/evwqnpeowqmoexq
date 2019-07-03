var today = new Date();
var tomorrow = new Date(today.getTime() + (2 * 24 * 60 * 60 * 1000));
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

$('#promo').html("This promotion is valid until <b>" + tomorrow.getDate() + ' ' + monthNames[tomorrow.getMonth()] + ' ' + tomorrow.getFullYear() + "</b>");