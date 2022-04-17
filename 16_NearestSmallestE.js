let arr = [-2, 1, 2, 0, 14, 16, 2, -1];
let st = [];
st.push(arr[0]);
let ans = [];
ans.push(-1);
for (let i = 1; i < arr.length; i++) {
  while (st[st.length - 1] > arr[i]) {
    st.pop();
  }
  if (st.length !== 0) ans.push(st[st.length - 1]);
  else ans.push(-1);
  st.push(arr[i]);
}
console.log(ans);
