window.onload = () => {
  Strip('main-visual-text');
};

const Strip = (className) => {
  let t = document.getElementsByClassName(className);
  for (let i=0; i<t.length; i++) {
    let letters = t[i].innerHTML.split('');
    let ins="";
    letters.forEach( function(element) {
      let insertSpan = `<span class="main-visual-text-letter">${element}</span>`;
      ins += insertSpan;
    })
    t[i].innerHTML = ins;
  }
  console.log(t);
}


// $('.strip').each(function(){
//   var $t = $(this),
//       rows = $.trim($t.html()).split('<br>');

//   $t.html('');

//   $.each(rows, function(i, val){
//     $('<span class="row"></span>').appendTo($t);

//     var letters = $.trim(val).split('');

//     $.each(letters, function(j, v){
//       v = (v == ' ') ? '&nbsp;' : v;
//       $('<span>' + $.trim(v) + '</span>').appendTo($('.row:last', $t));
//     });

//   });
// });

// $('body').click(function(){
//   for (i = 0; i < $('.strip span').length; i++) {
//     (function(ind) {
//       setTimeout(function(){
//           $('.strip span:not(".row")').eq(ind).toggleClass('animate');
//       }, ind * 15);
//     })(i);
//   }
// }).click();
