function findsubsequences(s, ans) {
  if (s.length == 0) {
    console.log(ans);
    return;
    }
    findsubsequences(s.substring(1), ans);
  findsubsequences(s.substring(1), ans + s.charAt(0));
  
}
findsubsequences("abc", "");

