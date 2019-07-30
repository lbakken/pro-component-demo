
(function(doc){
  var scriptElm = doc.scripts[doc.scripts.length - 1];
  var warn = ['[pro-ui-library] Deprecated script, please remove: ' + scriptElm.outerHTML];

  warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:')

  var parts = scriptElm.src.split('/');
  parts.pop();
  parts.push('pro-ui-library');
  var url = parts.join('/');

  var scriptElm = doc.createElement('script');
  scriptElm.setAttribute('type', 'module');
  scriptElm.src = url + '/pro-ui-library.esm.js';
  doc.head.appendChild(scriptElm);
  warn.push(scriptElm.outerHTML);

  scriptElm = doc.createElement('script');
  scriptElm.setAttribute('nomodule', '');
  scriptElm.src = url + '/pro-ui-library.js';
  doc.head.appendChild(scriptElm);
  warn.push(scriptElm.outerHTML);

  console.warn(warn.join('\n'));

})(document);