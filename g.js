var s=[
"gin.htm",
"http://dailybitcoins.org/index.php?aff=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://www.freebitcoins4u.co.uk/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://freebitcoinfaucet.co.uk/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://www.doublebitcoins.io/faucet/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://www.pentafaucet.com/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://itsrainingbitcoins.com/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://www.wytewolfbtc.com/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://bitcobear.com/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://www.bitcoinerz.eu/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://www.satoshididu.com/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://www.bitcoinfaucet.cash/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://faucetbos.top/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://crypto4free.net/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://www.bitcoinsreward.com/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://www.lemonbitcoin.com/faucet/index.php?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"https://winfreebitcoin.net/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://www.top-bit.com/faucet/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://xbitcoinfree.com/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://greenfaucet.cf/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://btcn.in.ua/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://thefreebitcoin.website/?r=1Lm4b8LeVqyrozgHCoaCrr7qjdxGrLxBi6",
"http://bibitcoin.trade"
];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter your bitcoin address:');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}
