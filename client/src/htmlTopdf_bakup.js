// pdfToHTML() {
//   const pdf = new jsPDF('p', 'pt', 'letter');
//   const source = $('#HTMLtoPDF')[0];
//   const specialElementHandlers = {
//     '#byPassMe': function (element, renderer) {
//       return true
//     }
//   };

//   const margins = {
//     top: 50,
//     left: 60,
//     width: 545
//   };

//   pdf.fromHTML(
//     source // HTML string or DOM elem ref.
//     , margins.left // x coord
//     , margins.top // y coord
//     , {
//       'width': margins.width, // max width of content on PDF
//       'elementHandlers': specialElementHandlers
//     },
//     function (dispose) {
//       pdf.textWithLink('Click here', 100, 100, { url: 'http://www.google.com' });
//       // dispose: object with X, Y of the last line add to the PDF
//       // this allow the insertion of new lines after html

//       const string = pdf.output('datauristring');

//       const iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"

//       const x = window.open();
//       x.document.open();
//       x.document.write(iframe);
//       x.document.close();
//       // axios.post('http://localhost:4000/api/pdf', {
//       //   data: PDF,
//       // })
//       // .then(res => console.log(res))
//       // .catch(err => console.log(err))
//     }
//   )
// }