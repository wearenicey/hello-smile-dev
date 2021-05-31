
Vue.filter('money', function (value, sign = 'RSD ') {
  if (!value) return 0;
  return (value / 100).toFixed(2) + sign;
});
