export function timestampToTime(timestamp) {
  //时间戳为10位需*1000，时间戳为13位的话不需乘1000，因为js，java等使用整数位表示毫秒数转化回js外的时间戳除以1000
  let r_date = new Date(timestamp * 1000);
  let ry = r_date.getFullYear();
  // 月份从0开始
  let rm = r_date.getMonth()+1;
  let rd = r_date.getDate();
  let rh = r_date.getHours();
  let rmi = r_date.getMinutes();

  let n_date = new Date();
  let ny = n_date.getFullYear();
  let nm = n_date.getMonth();
  let nd = n_date.getDate();
  let nh = n_date.getHours();
  let nmi = n_date.getMinutes();

  if (ny-ry>0) {return ny-ry+"年前"}
  else if (nm-rm>0) {return nm-rm+"个月前"}
  else if (nd-rd>0) {return nd-rd+"天前"}
  else if (nh-rh>0) {return nh-rh+"小时前"}
  else if (nmi-rmi>0) {return nmi-rmi+"分钟前"}
  else {return "刚刚"}
}

export function timestampToDetail(timestamp) {
  let r_date = new Date(timestamp * 1000);
  let ry = r_date.getFullYear();
  let rm = r_date.getMonth()+1;
  let rd = r_date.getDate();
  let rh = r_date.getHours();
  let rmi = r_date.getMinutes();
  let rsec = r_date.getSeconds();

  if (rm<10) {rm = '0'+rm}
  if (rd<10) {rd = '0'+rd}
  if (rh<10) {rh = '0'+rh}
  if (rmi<10) {rmi = '0'+rmi}
  if (rsec<10) {rsec = '0'+rsec}

  return ry+"-"+rm+"-"+rd+" "+rh+":"+rmi+":"+rsec
}

export function debounce(func, delay=50) {
  let timer = null;

  return function(...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}