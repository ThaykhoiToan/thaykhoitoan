window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  chtml: {
    scale: 1,                      // Tỷ lệ chung
    minScale: 0.5,                 // Không thu nhỏ quá 50%
    matchFontHeight: true,
    displayAlign: 'center',
    linebreaks: {                  // Bật tính năng ngắt dòng
      automatic: true,
      width: 'container'
    }
  },
  svg: {
    linebreaks: { 
      automatic: true, 
      width: 'container' 
    }
  }
};