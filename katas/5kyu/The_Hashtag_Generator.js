// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  if(!str.trim() || str.replace(/ /g, '').length > 139) return false;
  return`#${str.trim().split(/ +/).map((x) => x.replace(/^./, x[0].toUpperCase())).join('')}`;
}
