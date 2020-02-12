function convertDate(res) {
  let count = 0;
  const date = res.split("/").join("");
  var i = date.length;
  while (i--) {
    count += parseInt(date.charAt(i));
  }
  return count;
}

module.exports = convertDate;
